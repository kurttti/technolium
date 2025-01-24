import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'edge'

const courses = [
  {
    name: "Машинное обучение",
    description: "Изучите основы искусственного интеллекта и разработки алгоритмов машинного обучения",
    skills: ["Python", "статистика", "SQL", "машинное обучение", "визуализация данных", "математический анализ"]
  },
  {
    name: "Автоматизация тестирования ПО",
    description: "Освойте современные инструменты и методологии автоматизированного тестирования",
    skills: ["Selenium", "Python", "API тестирование", "CI/CD", "Git", "написание тест-кейсов"]
  },
  {
    name: "Информационная безопасность",
    description: "Станьте специалистом по защите компьютерных систем и сетей",
    skills: ["сетевая безопасность", "криптография", "анализ уязвимостей", "Linux", "системное администрирование", "этичный хакинг"]
  },
  {
    name: "Серверная веб-разработка",
    description: "Научитесь создавать современные веб-приложения и работать с базами данных",
    skills: ["Node.js", "Python/Django", "SQL", "REST API", "MongoDB", "микросервисы"]
  }
]

const systemPrompt = `Ты - опытный карьерный консультант в сфере IT. 
Проанализируй ответы на тест и составь краткий, понятный для менеджера вывод. 
Укажи ключевые сильные стороны и порекомендуй максимум два курса из списка. 
Затем в трех пунктах (короткими предложениями) объясни, почему эти направления подходят. 
Строго соблюдай данный HTML-формат, не добавляя других секций и заголовков:

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
