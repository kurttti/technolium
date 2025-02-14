'use client'

import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { news } from '../data'

export default function NewsArticlePage() {
  const router = useRouter()
  const params = useParams()
  const id = Number(params.id)

  // Проверяем существование новости
  if (isNaN(id) || id < 0 || id >= news.length) {
    router.push('/news')
    return null
  }

  const article = news[id]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[24px] overflow-hidden shadow-lg p-8"
        >
          <Link 
            href="/news"
            className="inline-flex items-center text-[#2B076E] hover:text-[#1a0347] transition-colors mb-6"
          >
            ← Назад к новостям
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs bg-[#2B076E] text-white rounded-md">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              {article.content}
            </p>
            
            {/* Здесь можно добавить дополнительный контент статьи */}
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Мы постоянно работаем над улучшением нашего образовательного контента и стремимся предоставить нашим студентам самые актуальные и качественные материалы для обучения.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 