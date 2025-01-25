'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { RotateCcw, ChevronRight, BookOpen, Target, Compass } from 'lucide-react'
import { useEffect, useState } from 'react'

type TestResultProps = {
  result: string
  onRetake: () => void
}

type Section = {
  title: string
  content: string
  icon: JSX.Element
}

export function TestResult({ result, onRetake }: TestResultProps) {
  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    // Parse HTML content and extract sections
    const parser = new DOMParser()
    const doc = parser.parseFromString(result, 'text/html')
    
    const parsedSections: Section[] = []
    
    // Находим все h3 заголовки и обрабатываем каждый
    const headers = Array.from(doc.getElementsByTagName('h3'))
    
    headers.forEach(header => {
      const title = header.textContent || ''
      const content = header.nextElementSibling?.textContent || ''
      
      if (title.includes('Персональный анализ')) {
        parsedSections.push({
          title: 'Персональный анализ',
          content,
          icon: <Compass className="w-6 h-6" />
        })
      } else if (title.includes('Ваш потенциал')) {
        parsedSections.push({
          title: 'Ваш потенциал в IT',
          content,
          icon: <Target className="w-6 h-6" />
        })
      }
    })
    
    // Рекомендуемые направления
    const recommendationsTitle = doc.querySelector('p strong')
    if (recommendationsTitle?.textContent?.includes('Рекомендуемые направления')) {
      const recommendationsList = recommendationsTitle.parentElement?.nextElementSibling
      if (recommendationsList?.tagName === 'UL') {
        parsedSections.push({
          title: 'Рекомендуемые направления',
          content: recommendationsList.innerHTML,
          icon: <BookOpen className="w-6 h-6" />
        })
      }
    }

    setSections(parsedSections)
  }, [result])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-t-lg p-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ваши результаты
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
          className="text-blue-100"
        >
          На основе ваших ответов мы подготовили персональные рекомендации
        </motion.p>
      </div>

      <div className="bg-white rounded-b-lg shadow-lg">
        <div className="p-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className={`${index !== 0 ? 'mt-8 pt-8 border-t' : ''}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>
              
              {section.title === 'Рекомендуемые направления' ? (
                <div 
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <ChevronRight className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Ваши следующие шаги
              </h3>
            </div>
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100"
              >
                <Button 
                  onClick={() => window.location.href = '/education-plan'}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Посмотреть программы обучения
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gray-50 px-8 py-4 rounded-b-lg border-t">
          <Button
            variant="ghost"
            onClick={onRetake}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Пройти тест заново
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
