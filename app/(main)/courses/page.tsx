'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    id: 'python',
    title: 'Python для начинающих',
    description: 'Освойте самый популярный язык программирования с нуля',
    duration: '12 недель',
    level: 'Начинающий',
    image: '/images/courses/python.png'
  },
  // Добавьте больше курсов по мере необходимости
]

const CoursesPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-block-padding-xs md:px-block-padding-md py-section-margin mt-[100px]">
        {/* Заголовок страницы */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight lg:leading-h1 font-h1 mb-4 tracking-banner text-center"
          style={{ fontFamily: 'BOWLER' }}
        >
          Наши курсы
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal text-gray-600 mb-[70px] text-center"
        >
          Выберите курс и начните свой путь в IT
        </motion.p>

        {/* Сетка курсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Link href={`/courses/${course.id}`}>
                <div className="bg-[#F8F8F8] rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Изображение курса */}
                  <div className="h-48 bg-gray-200 relative">
                    {course.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Информация о курсе */}
                  <div className="p-6">
                    <h2 
                      className="text-[24px] leading-tight mb-3"
                      style={{ fontFamily: 'BOWLER' }}
                    >
                      {course.title}
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-600 mb-4">
                      {course.description}
                    </p>
                    
                    {/* Детали курса */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-500">
                        Длительность: {course.duration}
                      </span>
                      <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-500">
                        Уровень: {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Если нет курсов */}
        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Скоро здесь появятся новые курсы</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage
