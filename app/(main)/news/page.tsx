'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { news } from './data'

export default function NewsPage() {
  const router = useRouter()

  const handleNewsClick = (index: number) => {
    router.push(`/news/${index}`)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-h1 leading-tight font-h1 text-center mb-12"
          style={{ fontFamily: 'BOWLER' }}
        >
          НОВОСТИ ТЕХНОЛИУМА
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleNewsClick(index)}
              className={`${
                index % 2 === 0 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black'
              } rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer`}
            >
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs bg-[#2B076E] text-white rounded-md">
                    {item.category}
                  </span>
                </div>

                <h2 className={`text-2xl font-bold mb-4 leading-tight ${
                  index % 2 === 0 ? 'text-white' : 'text-black'
                }`}>
                  {item.title}
                </h2>

                <p className={`mb-6 text-base leading-relaxed ${
                  index % 2 === 0 ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.content}
                </p>

                <span 
                  className={`inline-flex items-center transition-colors ${
                    index % 2 === 0 
                      ? 'text-white hover:text-gray-300' 
                      : 'text-[#2B076E] hover:text-[#1a0347]'
                  }`}
                >
                  Читать полностью...
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
} 