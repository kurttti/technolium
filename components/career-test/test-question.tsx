'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type QuestionProps = {
  question: {
    text: string
    description?: string
    options: string[]
  }
  onAnswer: (answer: string) => void
  isLast: boolean
  onSubmit: () => void
  isSubmitting: boolean
  selectedAnswer?: string
}

export function TestQuestion({ 
  question, 
  onAnswer, 
  isLast, 
  onSubmit, 
  isSubmitting,
  selectedAnswer 
}: QuestionProps) {
  const handleAnswer = (answer: string) => {
    onAnswer(answer)
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

      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => {
          const isSelected = option === selectedAnswer
          return (
            <Button
              key={index}
              variant={isSelected ? "default" : "outline"}
              className={`h-auto py-4 px-6 text-left ${
                isSelected 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
              } w-full transition-all duration-200`}
              onClick={() => handleAnswer(option)}
              disabled={isSubmitting}
            >
              <div className="font-medium">{option}</div>
            </Button>
          )
        })}
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
