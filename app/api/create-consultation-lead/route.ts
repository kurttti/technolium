import { NextResponse } from 'next/server'
import { createOrGetContact } from '@/actions/bitrix24'

interface Answer {
  questionId: number
  answer: string
}

interface UserInfo {
  name: string
  email: string
  phone: string
}

interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

const questionMap: Record<number, string> = {
  0: 'Возраст',
  1: 'Уровень владения ПК',
  2: 'Желаемый доход',
  3: 'Текущая деятельность',
  4: 'Гражданство'
}

function formatAnswers(answers: Answer[]): string {
  return answers
    .map(answer => `${questionMap[answer.questionId]}: ${answer.answer}`)
    .join('\n')
}

function formatUtmParams(utmParams: UtmParams): string {
  return Object.entries(utmParams)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')
}

export async function POST(request: Request) {
  try {
    const { answers, userInfo, utmParams } = await request.json() as { 
      answers: Answer[]
      userInfo: UserInfo
      utmParams: UtmParams
    }
    const { name, email, phone } = userInfo

    // Create or get contact in Bitrix24
    const contactId = await createOrGetContact(name, email, phone)

    // Format answers and UTM params for Bitrix24
    const formattedAnswers = formatAnswers(answers)
    const formattedUtm = formatUtmParams(utmParams)

    // Create deal in Bitrix24
    const dealData = {
      TITLE: `${name}: Заявка на консультацию`,
      CONTACT_ID: contactId,
      ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
      STAGE_ID: "NEW",
      COMMENTS: `Результаты опроса:\n\n${formattedAnswers}\n\nUTM метки:\n${formattedUtm}`,
      SOURCE_ID: utmParams.utm_source || "Форма консультации",
      SOURCE_DESCRIPTION: "Заполнена форма для получения консультации на сайте",
      UTM_SOURCE: utmParams.utm_source || "",
      UTM_MEDIUM: utmParams.utm_medium || "",
      UTM_CAMPAIGN: utmParams.utm_campaign || "",
      UTM_CONTENT: utmParams.utm_content || "",
      UTM_TERM: utmParams.utm_term || "",
      UF_CRM_CONSULTATION_FORM: JSON.stringify({
        age: answers.find((a: Answer) => a.questionId === 0)?.answer,
        computerSkills: answers.find((a: Answer) => a.questionId === 1)?.answer,
        desiredIncome: answers.find((a: Answer) => a.questionId === 2)?.answer,
        currentField: answers.find((a: Answer) => a.questionId === 3)?.answer,
        citizenship: answers.find((a: Answer) => a.questionId === 4)?.answer,
        ...utmParams
      })
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
