import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createCareerTestLead } from '@/actions/bitrix24-career-test'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Анализ для Битрикса
async function generateManagerAnalysis(answers: any[]) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "Ты - опытный менеджер по продажам. Проанализируй ответы потенциального клиента и создай структурированный JSON для CRM. ВАЖНО: верни только чистый JSON-объект, без markdown форматирования и без дополнительного текста."
      },
      {
        role: "user",
        content: `Проанализируй ответы клиента и создай JSON с анализом. Верни ТОЛЬКО JSON, без дополнительного текста или форматирования:

Ответы клиента:
${answers.map((a: any) => `${a.questionId + 1}: ${a.answer}`).join('\n')}

Формат ответа (заполни своими данными):
{
  "motivation": {
    "level": "high/medium/low",
    "factors": ["факторы мотивации"],
    "urgency": "high/medium/low"
  },
  "budget": {
    "range": "диапазон бюджета",
    "flexibility": "high/medium/low"
  },
  "schedule": {
    "availability": "когда может учиться",
    "hoursPerWeek": "сколько часов в неделю"
  },
  "sellingPoints": [
    "ключевые моменты для продажи"
  ],
  "possibleObjections": [
    {
      "objection": "возможное возражение",
      "context": "почему может возникнуть",
      "response": "как ответить"
    }
  ]
}`
      }
    ],
    temperature: 0.3,
    max_tokens: 1000
  })

  const content = response.choices[0]?.message?.content || ''
  
  let jsonContent = content
  if (content.includes('```json')) {
    jsonContent = content.split('```json')[1].split('```')[0]
  }
  
  try {
    return JSON.parse(jsonContent.trim())
  } catch (error) {
    console.error('Error parsing manager analysis:', error)
    console.error('Raw content:', content)
    return null
  }
}

export async function POST(request: Request) {
  try {
    const { answers, userInfo } = await request.json()
    console.log('Creating Bitrix lead for:', userInfo)

    const analysis = await generateManagerAnalysis(answers)
    if (!analysis) {
      throw new Error('Failed to generate manager analysis')
    }

    await createCareerTestLead(
      userInfo.name,
      userInfo.email,
      userInfo.phone,
      {
        answers,
        analysis
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating Bitrix lead:', error)
    return NextResponse.json(
      { error: 'Failed to create Bitrix lead' },
      { status: 500 }
    )
  }
}
