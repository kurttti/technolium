import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createCareerTestLead } from '@/actions/bitrix24-career-test'

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

// Генерация HTML для пользователя
async function generateUserResponse(answers: any[]) {
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

  return response.choices[0]?.message?.content || ''
}

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
  
  // Добавляем дополнительную обработку на случай, если всё же придет форматированный текст
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
    console.log('Received request with answers:', answers)

    // Генерируем ответ для пользователя
    const userContent = await generateUserResponse(answers)
    
    // Если есть userInfo, асинхронно запускаем анализ для Битрикса
    if (userInfo) {
      // Не ждем завершения этих операций
      generateManagerAnalysis(answers).then(analysis => {
        if (analysis) {
          createCareerTestLead(
            userInfo.name,
            userInfo.email,
            userInfo.phone,
            {
              answers,
              analysis
            }
          ).catch(error => {
            console.error('Error creating Bitrix lead:', error)
          })
        }
      }).catch(error => {
        console.error('Error generating manager analysis:', error)
      })
    }

    // Сразу возвращаем результат пользователю
    return NextResponse.json({ result: userContent })

  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
