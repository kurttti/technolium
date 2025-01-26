import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401 }
    );
  }

  try {
    // Здесь будет запрос к API Тинькофф
    const response = await fetch('https://secured.tinkoff.ru/api/v1/orders/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TINKOFF_API_TOKEN}`,
      },
      body: JSON.stringify({
        shopId: process.env.TINKOFF_SHOP_ID,
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // последние 30 дней
        to: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch orders from Tinkoff');
    }

    const data = await response.json();

    // Преобразуем данные в нужный формат
    const links = data.orders.map((order: any) => ({
      id: order.orderId,
      url: order.paymentUrl,
      orderNumber: order.orderNumber,
      amount: order.amount,
      creditType: order.creditType,
      createdAt: order.createdAt,
      status: order.status.toLowerCase(),
    }));

    return new NextResponse(
      JSON.stringify({ links }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching links:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch links' }),
      { status: 500 }
    );
  }
}
