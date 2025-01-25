import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'edge'

const courses = [
  {
    name: "Машинное обучение",
    description: "Комплексный курс по анализу данных и построению предиктивных моделей с использованием Python. Включает основы статистики, работу с большими данными и практику построения ML-моделей.",
    skills: ["Python", "статистика", "SQL", "машинное обучение", "визуализация данных", "математический анализ"],
    courseUrl: "https://technolium.ru/specialties/machine-learning"
  },
  {
    name: "Автоматизация тестирования ПО",
    description: "Практический курс по автоматизации тестирования с фокусом на веб-приложения. Охватывает создание тестовых фреймворков, интеграцию с CI/CD и best practices в автоматизации.",
    skills: ["Selenium", "Python", "API тестирование", "CI/CD", "Git", "написание тест-кейсов"],
    courseUrl: "https://technolium.ru/specialties/software-testing"
  },
  {
    name: "Информационная безопасность",
    description: "Углубленное изучение основ кибербезопасности, включая защиту сетей, криптографию и этичный хакинг. Курс сочетает теорию с практическими лабораторными работами.",
    skills: ["сетевая безопасность", "криптография", "анализ уязвимостей", "Linux", "системное администрирование", "этичный хакинг"],
    courseUrl: "https://technolium.ru/specialties/information-security"
  },
  {
    name: "Серверная веб-разработка",
    description: "Интенсивный курс по backend-разработке с акцентом на современные технологии и архитектурные подходы. Включает работу с базами данных, API и микросервисами.",
    skills: ["Node.js", "Python/Django", "SQL", "REST API", "MongoDB", "микросервисы"],
    courseUrl: "https://technolium.ru/specialties/web-development"
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
<li><a href="[courseUrl из объекта курса]">[Первое направление из списка]</a></li>
<li><a href="[courseUrl из объекта курса]">[Второе направление из списка, если подходит]</a></li>
</ul>

<p><strong>Почему подходит:</strong></p>
<ul>
<li>[Первая причина - одно предложение]</li>
<li>[Вторая причина - одно предложение]</li>
<li>[Третья причина - перспективы на рынке труда]</li>
</ul>

Строго следуй этому формату. Не добавляй никаких других заголовков или секций.
Используй точные URL из поля courseUrl соответствующего курса для создания ссылок.`

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
      temperature: 0.7,
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
