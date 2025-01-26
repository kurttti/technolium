import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// Правильный URL для создания заявки
const TINKOFF_API_URL = 'https://forma.tinkoff.ru/api/partners/v2/orders/create';

interface TinkoffOrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface CreateOrderRequest {
  orderNumber?: string;
  items: TinkoffOrderItem[];
}

// Функция для генерации номера заказа
function generateOrderNumber() {
  const date = new Date();
  const timestamp = date.getTime();
  const random = Math.floor(Math.random() * 1000);
  return `ORDER-${timestamp}-${random}`;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!process.env.TINKOFF_SHOP_ID || !process.env.TINKOFF_SHOWCASE_ID) {
      return NextResponse.json(
        { success: false, error: 'Tinkoff credentials not configured' },
        { status: 500 }
      );
    }

    const { orderNumber, items }: CreateOrderRequest = await request.json();

    const tinkoffRequest = {
      shopId: process.env.TINKOFF_SHOP_ID,
      showcaseId: process.env.TINKOFF_SHOWCASE_ID,
      sum: items.reduce((total: number, item: TinkoffOrderItem) => total + (item.price * item.quantity), 0),
      orderNumber: orderNumber || generateOrderNumber(), // Используем переданный номер или генерируем новый
      items: items.map((item: TinkoffOrderItem) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/credit/success`,
      failUrl: `${process.env.NEXT_PUBLIC_APP_URL}/credit/fail`
    };

    console.log('Sending request to Tinkoff:', JSON.stringify(tinkoffRequest, null, 2));

    const response = await fetch(TINKOFF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tinkoffRequest)
    });

    // Сначала получаем текст ответа для отладки
    const responseText = await response.text();
    console.log('Tinkoff response:', responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Tinkoff response:', e);
      return NextResponse.json(
        { success: false, error: 'Invalid response from Tinkoff API' },
        { status: 500 }
      );
    }

    if (!response.ok || responseData.validations) {
      const error = responseData.validations 
        ? Object.values(responseData.validations).join(', ')
        : responseData.message || 'Failed to create application';
        
      return NextResponse.json(
        { success: false, error },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({ 
      success: true,
      link: responseData.link 
    });
  } catch (error) {
    console.error('Error creating Tinkoff application:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
