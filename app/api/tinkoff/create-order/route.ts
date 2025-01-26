import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const TINKOFF_API_URL = 'https://forma.tinkoff.ru/api/partners/v2/orders/create';

// Эти значения нужно будет получить в личном кабинете Тинькофф
const SHOP_ID = process.env.TINKOFF_SHOP_ID;
const SHOWCASE_ID = process.env.TINKOFF_SHOWCASE_ID;

interface TinkoffOrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface CreateOrderRequest {
  orderNumber: string;
  items: TinkoffOrderItem[];
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  if (!SHOP_ID || !SHOWCASE_ID) {
    return NextResponse.json(
      { success: false, error: 'Tinkoff credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const { orderNumber, items }: CreateOrderRequest = await request.json();

    // Подготавливаем данные для API Тинькофф
    const tinkoffRequest = {
      shopId: SHOP_ID,
      showcaseId: SHOWCASE_ID,
      sum: items.reduce((total, item) => total + (item.price * item.quantity), 0),
      orderNumber,
      items: items.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/credit/success`,
      failUrl: `${process.env.NEXT_PUBLIC_APP_URL}/credit/fail`
    };

    const response = await fetch(TINKOFF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tinkoffRequest)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create order');
    }

    return NextResponse.json({
      success: true,
      link: data.link // Ссылка на форму заявки
    });

  } catch (error) {
    console.error('Error creating Tinkoff order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
