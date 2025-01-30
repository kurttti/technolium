'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { RotateCcw, ChevronRight, BookOpen, Target, Compass, GraduationCap } from 'lucide-react'
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

const marketStatStyles = `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  .stat {
    background: linear-gradient(to right, #f0f9ff, #e0f2fe);
    padding: 1rem;
    border-radius: 0.75rem;
    font-weight: 500;
    color: #1e40af;
    text-align: center;
  }
`

const successStoryStyles = `
  background: linear-gradient(to right, #ecfdf5, #d1fae5);
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-top: 1.5rem;
  
  p {
    color: #065f46;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`

const benefitsListStyles = `
  li {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
    border: 1px solid #e5e7eb;
    color: #1f2937;
    font-size: 1.125rem;
    
    &:hover {
      border-color: #3b82f6;
      transform: translateX(5px);
      transition: all 0.2s;
    }
  }
`

export function TestResult({ result, onRetake }: TestResultProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    try {
      console.log('Raw result:', result)
      
      const parser = new DOMParser()
      const doc = parser.parseFromString(result, 'text/html')
      
      const parsedSections: Section[] = []
      
      // Сильные стороны и статистика
      const strengthSection = doc.querySelector('.strength-section')
      if (strengthSection) {
        const content = strengthSection.innerHTML.replace(
          '<div class="market-stats">',
          `<div class="market-stats" style="${marketStatStyles}">`
        )
        parsedSections.push({
          title: 'Ваши сильные стороны',
          content,
          icon: <Target className="w-6 h-6" />
        })
      }
      
      // Рекомендуемые направления
      const recommendationsSection = doc.querySelector('.recommendations-section')
      if (recommendationsSection) {
        const courseItemStyles = `
          display: block;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          transition: all 0.2s;
          background: white;
          color: #1e40af;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.125rem;
          position: relative;
          padding-right: 3rem;

          &:hover {
            border-color: #3b82f6;
            box-shadow: 0 4px 6px rgba(59,130,246,0.1);
            transform: translateY(-2px);
          }

          &::after {
            content: '→';
            position: absolute;
            right: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            color: #3b82f6;
            transition: transform 0.2s;
          }

          &:hover::after {
            transform: translate(5px, -50%);
          }
        `
        
        const enhancedHtml = recommendationsSection.innerHTML.replace(
          /<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g,
          `<a href="$1" class="course-link" style="${courseItemStyles}">$2</a>`
        )
        
        parsedSections.push({
          title: 'Рекомендуемые направления',
          content: enhancedHtml,
          icon: <BookOpen className="w-6 h-6" />
        })
      }

      // Почему стоит начать
      const benefitsSection = doc.querySelector('.benefits-section')
      if (benefitsSection) {
        const enhancedHtml = benefitsSection.innerHTML.replace(
          '<ul>',
          `<ul style="${benefitsListStyles}">`
        )
        parsedSections.push({
          title: 'Почему стоит начать прямо сейчас',
          content: enhancedHtml,
          icon: <Compass className="w-6 h-6" />
        })
      }

      // История успеха
      const successStory = doc.querySelector('.success-story')
      if (successStory) {
        const enhancedHtml = `<div style="${successStoryStyles}">${successStory.innerHTML}</div>`
        parsedSections.push({
          title: 'История успеха выпускника',
          content: enhancedHtml,
          icon: <GraduationCap className="w-6 h-6" />
        })
      }

      console.log('Parsed sections:', parsedSections)
      setSections(parsedSections)
    } catch (err) {
      console.error('Error parsing result:', err)
      setError(err instanceof Error ? err.message : 'Произошла ошибка при обработке результатов')
    }
  }, [result])

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <p className="text-red-600">{error}</p>
        <pre className="mt-2 text-sm text-red-800 whitespace-pre-wrap">
          {result}
        </pre>
      </div>
    )
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
      }}
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
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
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
              
              <div 
                className="space-y-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </motion.div>
          ))}

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
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
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
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
