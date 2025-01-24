'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

type TestResultProps = {
  result: string
  onRetake: () => void
}

export function TestResult({ result, onRetake }: TestResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="prose prose-blue max-w-none">
        <h3 className="text-xl font-semibold mb-4">Ваши результаты</h3>
        <div 
          className="text-gray-700 mb-6"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <Button
          variant="outline"
          onClick={onRetake}
          className="flex items-center"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Пройти тест заново
        </Button>

        <Button 
          onClick={() => window.location.href = '/education-plan'}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Посмотреть программы обучения
        </Button>
      </div>
    </motion.div>
  )
}
