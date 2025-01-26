"use server"

import { createOrGetContact } from './bitrix24'

interface CareerTestResult {
  answers: Array<{
    questionId: number
    answer: string
  }>
  analysis: {
    motivation: {
      level: string
      factors: string[]
      urgency: string
    }
    budget: {
      range: string
      flexibility: string
    }
    schedule: {
      availability: string
      hoursPerWeek: string
    }
    sellingPoints: string[]
    possibleObjections: Array<{
      objection: string
      context: string
      response: string
    }>
  }
}

export async function createCareerTestLead(
  name: string,
  email: string,
  phone: string,
  testResult: CareerTestResult
) {
  try {
    console.log('Creating career test lead with data:', {
      name,
      email,
      phone,
      testResult
    })

    const contactId = await createOrGetContact(name, email, phone)
    console.log('Contact created/found with ID:', contactId)

    const dealData = {
      TITLE: `${name}: Прошел карьерный тест`,
      CONTACT_ID: contactId,
      ASSIGNED_BY_ID: process.env.BITRIX24_USER_ID!,
      STAGE_ID: "NEW",
      COMMENTS: formatCommentsForSales(testResult),
      UF_CRM_CAREER_TEST: JSON.stringify(testResult.answers),
      UF_CRM_MOTIVATION: testResult.analysis.motivation.level,
      UF_CRM_BUDGET: testResult.analysis.budget.range,
      UF_CRM_SCHEDULE: testResult.analysis.schedule.availability,
      UF_CRM_SALES_INSIGHTS: JSON.stringify({
        motivation: testResult.analysis.motivation,
        budget: testResult.analysis.budget,
        schedule: testResult.analysis.schedule,
        sellingPoints: testResult.analysis.sellingPoints,
        possibleObjections: testResult.analysis.possibleObjections
      })
    }

    console.log('Attempting to create deal with data:', dealData)

    const response = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.deal.add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: dealData,
      }),
    })

    console.log('Bitrix24 API response status:', response.status)
    const result = await response.json()
    console.log('Bitrix24 API response:', result)

    if (!result.result) {
      console.error('Failed to create deal. Response:', result)
      throw new Error("Failed to create deal")
    }

    return result.result
  } catch (error) {
    console.error("Error creating career test lead:", error)
    throw error
  }
}

function formatCommentsForSales(testResult: CareerTestResult): string {
  const { analysis } = testResult
  return `
АНАЛИЗ КАРЬЕРНОГО ТЕСТА
=======================

МОТИВАЦИЯ:
----------
Уровень: ${analysis.motivation.level}
Факторы: ${analysis.motivation.factors.join(', ')}
Срочность: ${analysis.motivation.urgency}

БЮДЖЕТ:
-------
Диапазон: ${analysis.budget.range}
Гибкость: ${analysis.budget.flexibility}

ГРАФИК:
-------
Доступность: ${analysis.schedule.availability}
Часов в неделю: ${analysis.schedule.hoursPerWeek}

КЛЮЧЕВЫЕ ТОЧКИ ДЛЯ ПРОДАЖИ:
--------------------------
${analysis.sellingPoints.map(point => `• ${point}`).join('\n')}

ВОЗМОЖНЫЕ ВОЗРАЖЕНИЯ:
-------------------
${analysis.possibleObjections.map(obj => `
• ${obj.objection}
  Контекст: ${obj.context}
  Как ответить: ${obj.response}
`).join('\n')}
`
}
