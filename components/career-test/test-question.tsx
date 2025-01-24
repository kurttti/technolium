'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type QuestionProps = {
  question: {
    text: string
    description?: string
  }
  onAnswer: (score: number) => void
  isLast: boolean
  onSubmit: () => void
  isSubmitting: boolean
}

export function TestQuestion({ question, onAnswer, isLast, onSubmit, isSubmitting }: QuestionProps) {
  const handleAnswer = (score: number) => {
    onAnswer(score)
    if (isLast) {
      onSubmit()
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{question.text}</h3>
      {question.description && (
        <p className="text-gray-600 mb-6">{question.description}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button
          variant="outline"
          className="h-auto py-4 px-6 text-left hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
          onClick={() => handleAnswer(1)}
          disabled={isSubmitting}
        >
          <div>
            <div className="font-medium mb-1">Далеко от меня</div>
            <div className="text-sm text-gray-500">
              Это совсем не про меня
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 px-6 text-left hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
          onClick={() => handleAnswer(2)}
          disabled={isSubmitting}
        >
          <div>
            <div className="font-medium mb-1">Отчасти про меня</div>
            <div className="text-sm text-gray-500">
              Что-то среднее
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-4 px-6 text-left hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
          onClick={() => handleAnswer(3)}
          disabled={isSubmitting}
        >
          <div>
            <div className="font-medium mb-1">Очень близко</div>
            <div className="text-sm text-gray-500">
              Это точно про меня
            </div>
          </div>
        </Button>
      </div>

      {isSubmitting && (
        <div className="mt-6 flex items-center justify-center text-gray-500">
          <Loader2 className="animate-spin mr-2" size={18} />
          Анализируем ваши ответы...
        </div>
      )}
    </div>
  )
}
