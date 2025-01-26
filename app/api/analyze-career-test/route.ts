import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

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
    description: "Интенсивный курс по backend-разработке с акцентом на современные технологии и архитектурные подходы. Включает работу с базами данными, API и микросервисами.",
    skills: ["Node.js", "Python/Django", "SQL", "REST API", "MongoDB", "микросервисы"],
    courseUrl: "https://technolium.ru/specialties/web-development"
  }
]

export async function POST(request: Request) {
  try {
    const { answers } = await request.json()
    console.log('Analyzing career test answers:', answers)

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Ты - карьерный консультант по IT. Создай мотивирующую HTML-страницу с рекомендациями на основе ответов пользователя."
        },
        {
          role: "user",
          content: `
Курсы:
${courses.map(course => `${course.name} (${course.courseUrl}): ${course.description}`).join('\n')}

Ответы пользователя:
${answers.map((a: any) => `${a.questionId + 1}: ${a.answer}`).join('\n')}

Создай HTML-страницу в таком формате:
<div class="results-container">
  <div class="strength-section">
    <p><strong>Ваши сильные стороны:</strong> [яркое описание]</p>
    <div class="market-stats">
      <p class="stat">🚀 [статистика зарплат]</p>
      <p class="stat">💼 [спрос на специалистов]</p>
      <p class="stat">🌍 [возможности работы]</p>
    </div>
  </div>

  <div class="recommendations-section">
    <p><strong>Рекомендуемые направления:</strong></p>
    <ul>
      <li><a href="[URL курса]">[Название курса]</a></li>
      [второй курс если подходит]
    </ul>
  </div>

  <div class="benefits-section">
    <p><strong>Почему стоит начать прямо сейчас:</strong></p>
    <ul>
      <li>💰 [зарплаты начинающих]</li>
      <li>📈 [перспективы роста]</li>
      <li>🎯 [тренды]</li>
      <li>⚡️ [срочность]</li>
    </ul>
  </div>

  <div class="success-story">
    <p><strong>История успеха:</strong></p>
    <p>🎓 [история выпускника]</p>
  </div>
</div>`
        }
      ],
      temperature: 0.7,
      max_tokens: 1500
    })

    const content = response.choices[0]?.message?.content
    if (!content) {
      throw new Error('No response from GPT')
    }

    return NextResponse.json({ result: content })
  } catch (error) {
    console.error('Error analyzing test results:', error)
    return NextResponse.json(
      { error: 'Failed to analyze test results' },
      { status: 500 }
    )
  }
}
