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
    const contactId = await createOrGetContact(name, email, phone)

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

    return result.result
  } catch (error) {
    console.error("Error creating career test lead:", error)
    throw error
  }
}

function formatCommentsForSales(testResult: CareerTestResult): string {
  return `
АНАЛИЗ КАРЬЕРНОГО ТЕСТА
=======================

МОТИВАЦИЯ:
----------
Уровень: ${testResult.analysis.motivation.level}
Факторы: ${testResult.analysis.motivation.factors.join(', ')}
Срочность: ${testResult.analysis.motivation.urgency}

БЮДЖЕТ:
-------
Диапазон: ${testResult.analysis.budget.range}
Гибкость: ${testResult.analysis.budget.flexibility}

ГРАФИК:
-------
Доступность: ${testResult.analysis.schedule.availability}
Часов в неделю: ${testResult.analysis.schedule.hoursPerWeek}

КЛЮЧЕВЫЕ ТОЧКИ ДЛЯ ПРОДАЖИ:
--------------------------
${testResult.analysis.sellingPoints.map(point => `• ${point}`).join('\n')}

ВОЗМОЖНЫЕ ВОЗРАЖЕНИЯ:
-------------------
${testResult.analysis.possibleObjections.map(obj => `
• ${obj.objection}
  Контекст: ${obj.context}
  Как ответить: ${obj.response}
`).join('\n')}
`
}
