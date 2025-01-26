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
    description: "Интенсивный курс по backend-разработке с акцентом на современные технологии и архитектурные подходы. Включает работу с базами данных, API и микросервисами.",
    skills: ["Node.js", "Python/Django", "SQL", "REST API", "MongoDB", "микросервисы"],
    courseUrl: "https://technolium.ru/specialties/web-development"
  }
]

export async function POST(request: Request) {
  try {
    const { answers, userInfo } = await request.json()

    console.log('Formatted answers:', answers)

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { 
          role: "system", 
          content: `Ты - опытный карьерный консультант, специализирующийся на IT-профессиях. 
Твоя задача - проанализировать ответы пользователя и предоставить два блока информации:

1. Для пользователя: мотивирующая HTML-страница с рекомендациями
2. Для менеджера: структурированный JSON с анализом профиля

ВАЖНО: Твой ответ ДОЛЖЕН содержать ровно две части, разделенные строкой "2. Для менеджера по продажам".
Первая часть - HTML для пользователя.
Вторая часть - только JSON-объект, без дополнительного текста.`
        },
        { 
          role: "user", 
          content: `
Доступные направления:
${courses.map(course => `
${course.name}
Описание: ${course.description}
URL: ${course.courseUrl}
---`).join('\n')}

Ответы пользователя:
${answers.map((a: any) => `Вопрос ${a.questionId + 1}: ${a.answer}`).join('\n')}

Сформируй два ответа строго в таком формате:

1. Для пользователя (в HTML):
<div class="results-container">
  <div class="strength-section">
    <p><strong>Ваши сильные стороны:</strong> [яркое описание сильных сторон, подчеркивающее потенциал]</p>
    <div class="market-stats">
      <p class="stat">🚀 [актуальная статистика по росту зарплат в этой области]</p>
      <p class="stat">💼 [статистика по спросу на специалистов]</p>
      <p class="stat">🌍 [возможности удаленной работы/релокации]</p>
    </div>
  </div>

  <div class="recommendations-section">
    <p><strong>Рекомендуемые направления:</strong></p>
    <ul>
    <li><a href="[URL курса]">[Название курса]</a></li>
    [второй курс, если подходит]
    </ul>
  </div>

  <div class="benefits-section">
    <p><strong>Почему стоит начать прямо сейчас:</strong></p>
    <ul>
    <li>💰 [конкретные цифры по зарплатам начинающих специалистов]</li>
    <li>📈 [перспективы роста через 1-3-5 лет]</li>
    <li>🎯 [актуальные тренды и технологии в этой области]</li>
    <li>⚡️ [срочность: почему важно не откладывать]</li>
    </ul>
  </div>

  <div class="success-story">
    <p><strong>История успеха:</strong></p>
    <p>🎓 [краткая история выпускника: предыдущий опыт - обучение - результат]</p>
  </div>
</div>

2. Для менеджера по продажам
{
  "motivation": {
    "level": "high/medium/low",
    "factors": ["список факторов мотивации"],
    "urgency": "high/medium/low"
  },
  "budget": {
    "range": "предполагаемый диапазон",
    "flexibility": "high/medium/low"
  },
  "schedule": {
    "availability": "когда может учиться",
    "hoursPerWeek": "сколько часов готов уделять"
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
      temperature: 0.7,
      max_tokens: 2000
    })

    const gptResponse = response.choices[0]?.message?.content
    if (!gptResponse) {
      throw new Error('No response from GPT')
    }
    
    console.log('Raw GPT response:', gptResponse)
    
    const parts = gptResponse.split('2. Для менеджера по продажам')
    console.log('Split parts length:', parts.length)
    console.log('First part:', parts[0])
    console.log('Second part:', parts[1])
    
    if (parts.length !== 2) {
      throw new Error('Invalid GPT response format: response not split into two parts')
    }
    
    const [userContent, managerContent] = parts
    if (!userContent || !managerContent) {
      throw new Error('Invalid GPT response format: missing content parts')
    }

    let analysis
    try {
      // Извлекаем JSON из текста ответа
      const jsonStartIndex = managerContent.indexOf('{')
      const jsonEndIndex = managerContent.lastIndexOf('}')
      
      if (jsonStartIndex === -1 || jsonEndIndex === -1) {
        console.error('Cannot find JSON in manager content. Content:', managerContent)
        throw new Error('Invalid manager content format: no JSON found')
      }
      
      const jsonStr = managerContent.substring(jsonStartIndex, jsonEndIndex + 1)
      console.log('Extracted JSON string:', jsonStr)
      
      analysis = JSON.parse(jsonStr)
      console.log('Parsed analysis:', analysis)
    } catch (error) {
      console.error('Error parsing manager content:', error)
    }

    // Создаем лид в Битрикс24
    if (userInfo && analysis) {
      try {
        console.log('Attempting to create Bitrix24 lead with:', {
          userInfo,
          analysis
        })
        
        await createCareerTestLead(
          userInfo.name,
          userInfo.email,
          userInfo.phone,
          {
            answers,
            analysis
          }
        )
        
        console.log('Successfully created Bitrix24 lead')
      } catch (error) {
        console.error('Error creating Bitrix24 lead:', error)
      }
    } else {
      console.log('Skipping Bitrix24 lead creation:', {
        hasUserInfo: !!userInfo,
        hasAnalysis: !!analysis
      })
    }

    return NextResponse.json({
      result: userContent.replace('1. Для пользователя (в HTML):', '').trim()
    })
  } catch (error) {
    console.error('Error analyzing test results:', error)
    return NextResponse.json({ error: 'Failed to analyze test results' }, { status: 500 })
  }
}
