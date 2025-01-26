import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import crypto from 'crypto';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const data = await request.json();
    const { shopName, companyDetails, orderNumber, creditType, products } = data;

    // Генерируем UUID v4
    const uuid = crypto.randomUUID();
    
    // Формируем ссылку в формате T-Bank
    const creditLink = `https://forma.tbank.ru/platform/applications/online/create/${uuid}`;
    
    return NextResponse.json({ 
      success: true,
      link: creditLink,
      fullData: {
        id: uuid,
        shopName,
        companyDetails,
        orderNumber,
        creditType,
        products,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error generating credit link:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate credit link' },
      { status: 500 }
    );
  }
}
