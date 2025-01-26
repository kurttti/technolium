import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// Правильный URL для создания заявки
const TINKOFF_API_URL = 'https://forma.tbank.ru/api/partners/v2/orders/create';

interface TinkoffOrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface CreateOrderRequest {
  sum: number;
  orderNumber: string;
  items: TinkoffOrderItem[];
  creditType: string;
  successUrl: string;
  failUrl: string;
}

// Функция для генерации номера заказа
function generateOrderNumber() {
  const date = new Date();
  const timestamp = date.getTime();
  const random = Math.floor(Math.random() * 1000);
  return `ORDER-${timestamp}-${random}`;
}

export async function POST(request: Request): Promise<NextResponse> {
  console.log('=== Starting POST request to /api/tinkoff/create ===');
  
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session?.user?.isAdmin) {
      console.log('Unauthorized: User is not admin');
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    // Проверяем переменные окружения
    console.log('Checking environment variables...');
    console.log('TINKOFF_SHOP_ID exists:', !!process.env.TINKOFF_SHOP_ID);
    console.log('TINKOFF_SHOWCASE_ID exists:', !!process.env.TINKOFF_SHOWCASE_ID);
    console.log('TINKOFF_API_TOKEN exists:', !!process.env.TINKOFF_API_TOKEN);
    console.log('TINKOFF_CSRF_TOKEN exists:', !!process.env.TINKOFF_CSRF_TOKEN);

    if (!process.env.TINKOFF_SHOP_ID || !process.env.TINKOFF_SHOWCASE_ID) {
      throw new Error('Missing Tinkoff credentials. Required: SHOP_ID, SHOWCASE_ID');
    }

    // Парсим тело запроса
    console.log('Parsing request body...');
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);
    
    const body: CreateOrderRequest = JSON.parse(rawBody);
    console.log('Parsed request body:', body);

    // Валидация входных данных
    console.log('Validating request data...');
    if (!body.sum || body.sum < 3000 || body.sum > 500000) {
      console.log('Invalid sum:', body.sum);
      return new NextResponse(
        JSON.stringify({
          error: 'Validation Error',
          message: 'Сумма заказа должна быть от 3000 до 500000 рублей'
        }),
        { status: 400 }
      );
    }

    if (!body.items?.length) {
      console.log('No items in request');
      return new NextResponse(
        JSON.stringify({
          error: 'Validation Error',
          message: 'Добавьте хотя бы один товар'
        }),
        { status: 400 }
      );
    }

    // Подготавливаем данные для запроса к Тинькофф
    console.log('Preparing Tinkoff request...');
    
    // Получаем параметры рассрочки из типа кредита
    // Например, из "installment_0_0_12_14.5_22" получаем:
    // months: 12, commission: 14.5
    const [type, firstPayment, monthlyPayment, months, commission] = body.creditType.split('_');
    
    const tinkoffRequest = {
      shopId: process.env.TINKOFF_SHOP_ID,
      showcaseId: process.env.TINKOFF_SHOWCASE_ID,
      sum: body.sum,
      orderNumber: body.orderNumber || generateOrderNumber(),
      items: body.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      values: {
        installmentParams: {
          term: Number(months),
          productType: "installment"
        }
      },
      successUrl: body.successUrl,
      failUrl: body.failUrl
    };

    console.log('Sending request to Tinkoff:', JSON.stringify(tinkoffRequest, null, 2));

    const response = await fetch(TINKOFF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tinkoffRequest),
    });

    const data = await response.json();
    console.log('Tinkoff response:', data);

    if (!response.ok || (data.errors && data.errors.length > 0)) {
      console.log('Tinkoff API error:', data.errors);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Validation Error', 
          message: data.errors ? data.errors[0] : 'Failed to create order in Tinkoff',
          details: data.errors 
        }),
        { status: 400 }
      );
    }

    console.log('Successfully created order');
    return new NextResponse(
      JSON.stringify({ 
        success: true,
        link: data.link 
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in /api/tinkoff/create:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return new NextResponse(
      JSON.stringify({ 
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Не удалось создать заказ',
        stack: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.stack : null : undefined
      }),
      { status: 500 }
    );
  }
}
