import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'edge'

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

const systemPrompt = `Ты - карьерный консультант в сфере IT. Проанализируй ответы на тест и дай рекомендации строго в следующем формате HTML:

<p><strong>Ваши сильные стороны:</strong> [одно предложение о главных выявленных качествах]</p>

<p><strong>Рекомендуемые направления:</strong></p>
<ul>
<li>[Первое направление из списка]</li>
<li>[Второе направление из списка, если подходит]</li>
</ul>

<p><strong>Почему подходит:</strong></p>
<ul>
<li>[Первая причина - одно предложение]</li>
<li>[Вторая причина - одно предложение]</li>
<li>[Третья причина - перспективы на рынке труда]</li>
</ul>

Строго следуй этому формату. Не добавляй никаких других заголовков или секций.`

export async function POST(request: Request) {
  try {
    const { answers } = await request.json()

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const formattedAnswers = answers
      .map((a: any) => `Вопрос ${a.questionId + 1}: ${a.score}`)
      .join('\n')

    const formattedCourses = courses
      .map(c => `${c.name}: ${c.description}\nНавыки: ${c.skills.join(', ')}`)
      .join('\n\n')

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Ответы теста:\n${formattedAnswers}\n\nДоступные курсы:\n${formattedCourses}` }
      ],
      temperature: 0.3,
      max_tokens: 500,
    })

    return NextResponse.json({ 
      result: response.choices[0].message.content 
    })
  } catch (error) {
    console.error('Error analyzing test results:', error)
    return NextResponse.json(
      { error: 'Failed to analyze test results' },
      { status: 500 }
    )
  }
}
