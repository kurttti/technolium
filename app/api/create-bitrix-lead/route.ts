import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { createCareerTestLead } from '@/actions/bitrix24-career-test'

export const runtime = 'nodejs'
export const maxDuration = 60 // максимальное время выполнения в секундах

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Типы для очереди
interface QueueItem {
  retries: number;
  lastAttempt: number;
  data: {
    answers: Array<{ questionId: number; answer: string }>;
    userInfo: {
      name: string;
      email: string;
      phone: string;
    };
  };
}

// Очередь запросов
const queue = new Map<string, QueueItem>();

const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // 5 секунд между попытками
const CONCURRENT_LIMIT = 5; // Максимум одновременных запросов к GPT

let activeRequests = 0;

// Генерация уникального ID для запроса
function generateRequestId(): string {
  return Math.random().toString(36).substring(7) + Date.now();
}

// Анализ для Битрикса с повторными попытками
async function generateManagerAnalysis(answers: any[], requestId: string): Promise<any> {
  try {
    // Проверяем лимит одновременных запросов
    while (activeRequests >= CONCURRENT_LIMIT) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    activeRequests++;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "Ты - опытный менеджер по продажам. Проанализируй ответы потенциального клиента и создай структурированный JSON для CRM. ВАЖНО: верни только чистый JSON-объект, без markdown форматирования и без дополнительного текста.",
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
}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    activeRequests--;

    const content = response.choices[0]?.message?.content || '';
    let jsonContent = content;
    if (content.includes('```json')) {
      jsonContent = content.split('```json')[1].split('```')[0];
    }

    return JSON.parse(jsonContent.trim());
  } catch (error) {
    activeRequests--;
    console.error(`Error in generateManagerAnalysis for request ${requestId}:`, error);

    const queueItem = queue.get(requestId);
    if (queueItem && queueItem.retries < MAX_RETRIES) {
      queueItem.retries++;
      queueItem.lastAttempt = Date.now();
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return generateManagerAnalysis(answers, requestId);
    }

    throw error;
  }
}

// Создание лида в Битриксе с повторными попытками
async function createBitrixLeadWithRetry(
  name: string,
  email: string,
  phone: string,
  data: any,
  requestId: string
): Promise<void> {
  try {
    await createCareerTestLead(name, email, phone, data);
  } catch (error) {
    console.error(`Error in createBitrixLeadWithRetry for request ${requestId}:`, error);

    const queueItem = queue.get(requestId);
    if (queueItem && queueItem.retries < MAX_RETRIES) {
      queueItem.retries++;
      queueItem.lastAttempt = Date.now();
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return createBitrixLeadWithRetry(name, email, phone, data, requestId);
    }

    throw error;
  }
}

export async function POST(request: Request) {
  const requestId = generateRequestId();

  try {
    const { answers, userInfo } = await request.json();
    console.log(`Processing request ${requestId} for:`, userInfo);

    // Добавляем запрос в очередь
    queue.set(requestId, {
      retries: 0,
      lastAttempt: Date.now(),
      data: { answers, userInfo },
    });

    // Генерируем анализ с повторными попытками
    const analysis = await generateManagerAnalysis(answers, requestId);
    if (!analysis) {
      throw new Error('Failed to generate manager analysis');
    }

    // Создаем лид с повторными попытками
    await createBitrixLeadWithRetry(
      userInfo.name,
      userInfo.email,
      userInfo.phone,
      {
        answers,
        analysis,
      },
      requestId
    );

    // Удаляем успешно обработанный запрос из очереди
    queue.delete(requestId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error processing request ${requestId}:`, error);

    // Если все попытки исчерпаны, удаляем запрос из очереди
    const queueItem = queue.get(requestId);
    if (queueItem && queueItem.retries >= MAX_RETRIES) {
      queue.delete(requestId);
    }

    return NextResponse.json(
      { error: 'Failed to create Bitrix lead' },
      { status: 500 }
    );
  }
}
