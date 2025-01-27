import { NextResponse } from 'next/server'
import { createOrGetContact } from '@/actions/bitrix24'

export async function POST(request: Request) {
  try {
    const { answers, userInfo } = await request.json()

    const { name, email, phone } = userInfo

    // Create or get contact in Bitrix24
    const contactId = await createOrGetContact(name, email, phone)

    // Format answers for Bitrix24
    const formattedAnswers = answers.map((answer: any) => {
      const questionMap: { [key: number]: string } = {
        0: 'Направление',
        1: 'Опыт',
        2: 'Формат обучения'
      }
      return `${questionMap[answer.questionId]}: ${answer.answer}`
    }).join('\\n')

    // Create deal in Bitrix24
    const dealData = {
      TITLE: `${name}: Заявка на консультацию`,
      CONTACT_ID: contactId,
      ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
      STAGE_ID: "NEW",
      COMMENTS: formattedAnswers,
      UF_CRM_CONSULTATION_FORM: JSON.stringify(answers)
    }

    const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.deal.add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: dealData,
      }),
    })

    const result = await response.json()

    if (!result.result) {
      throw new Error("Failed to create deal")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating consultation lead:', error)
    return NextResponse.json(
      { error: 'Failed to process consultation form' },
      { status: 500 }
    )
  }
}
