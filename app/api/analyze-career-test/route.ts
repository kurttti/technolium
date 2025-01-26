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

export async function POST(request: Request) {
  try {
    const { answers } = await request.json()

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const formattedAnswers = answers
      .map((a: any) => `Вопрос ${a.questionId + 1}: ${a.answer}`)
      .join('\n')

    console.log('Formatted answers:', formattedAnswers)

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { 
          role: "system", 
          content: `Ты - опытный карьерный консультант, специализирующийся на IT-профессиях. 
Твоя задача - проанализировать ответы пользователя и составить убедительную, мотивирующую рекомендацию.
Используй психологические триггеры:
- Социальное доказательство (истории успеха, статистика трудоустройства)
- Срочность (почему важно начать именно сейчас)
- FOMO (что пользователь теряет, откладывая обучение)
- Конкретные цифры по зарплатам и спросу на рынке
- Перспективы карьерного роста через 1-3-5 лет`
        },
        { 
          role: "user", 
          content: `
Проанализируй ответы пользователя и выбери максимум 2 подходящих направления из списка.

Доступные направления:
${courses.map(course => `
${course.name}
Описание: ${course.description}
URL: ${course.courseUrl}
---`).join('\n')}

Ответы пользователя:
${formattedAnswers}

Сформируй ответ строго в таком формате HTML:

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
` 
        }
      ],
      temperature: 0.7,
      max_tokens: 1500
    })

    console.log('GPT response:', response.choices[0].message.content)

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
