import { NextResponse } from 'next/server'
import { ChatOpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { HumanMessage } from '@langchain/core/messages'

const courses = [
  {
    name: "Frontend-разработка",
    description: "Создание пользовательских интерфейсов веб-приложений",
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX", "адаптивный дизайн"]
  },
  {
    name: "Backend-разработка",
    description: "Разработка серверной части веб-приложений",
    skills: ["Python", "Node.js", "базы данных", "API", "безопасность"]
  },
  {
    name: "Data Science",
    description: "Анализ данных и машинное обучение",
    skills: ["Python", "статистика", "SQL", "машинное обучение", "визуализация данных"]
  },
  {
    name: "DevOps",
    description: "Автоматизация и управление инфраструктурой",
    skills: ["Linux", "Docker", "CI/CD", "облачные технологии", "мониторинг"]
  }
]

const template = `Ты - опытный карьерный консультант в сфере IT. Проанализируй ответы пользователя на тест профориентации и порекомендуй ему наиболее подходящие направления обучения.

Ответы пользователя (где 1 - далеко от меня, 2 - отчасти про меня, 3 - очень близко):
{answers}

Доступные курсы:
{courses}

На основе этих данных:
1. Определи сильные стороны и предрасположенности пользователя
2. Выбери 1-2 наиболее подходящих направления обучения
3. Объясни, почему именно эти направления подходят пользователю
4. Дай несколько конкретных рекомендаций по развитию в выбранных направлениях

Формат ответа - HTML с тегами <p>, <ul>, <li>, <strong>. Текст на русском языке.`

export async function POST(request: Request) {
  try {
    const { answers } = await request.json()

    // Форматируем ответы для промпта
    const formattedAnswers = answers
      .map((a: any) => `Вопрос ${a.questionId + 1}: ${a.score}`)
      .join('\n')

    // Форматируем курсы для промпта
    const formattedCourses = courses
      .map(c => `${c.name}: ${c.description}\nНавыки: ${c.skills.join(', ')}`)
      .join('\n\n')

    const prompt = new PromptTemplate({
      template,
      inputVariables: ['answers', 'courses'],
    })

    const model = new ChatOpenAI({
      modelName: 'gpt-4',
      temperature: 0.7,
      maxTokens: 1500,
    })

    const input = await prompt.format({
      answers: formattedAnswers,
      courses: formattedCourses,
    })

    const result = await model.call([new HumanMessage({ content: input })])

    return NextResponse.json({ result: result.content })
  } catch (error) {
    console.error('Error analyzing test results:', error)
    return NextResponse.json(
      { error: 'Failed to analyze test results' },
      { status: 500 }
    )
  }
}
