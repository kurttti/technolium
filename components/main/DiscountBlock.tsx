'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Анимационные варианты, согласованные с другими блоками
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 }
  }
};

const leftImageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export const DiscountBlock = () => {
  // Функция для скроллинга к форме заявки
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Теги технологий и преимуществ
  const techTags = ['Javascript', 'Python', 'Нейросети', 'GO', 'C#'];
  const benefitTags = ['10 месяцев', 'Коммерческая деятельность', 'Центр карьеры', 'Выбор специализации'];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-content mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row overflow-hidden rounded-[20px] shadow-xl min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
        >
          {/* Левая колонка: фоновое изображение, отображаемое на больших экранах */}
          <motion.div
            variants={leftImageVariants}
            className="hidden lg:block lg:w-1/2 xl:w-2/5 h-[300px] sm:h-[400px] lg:h-auto bg-cover"
            style={{ backgroundImage: "url('/main/men-with-notebook.jpg')" }}
          />

          {/* Правая колонка: содержимое блока */}
          <motion.div
            variants={contentVariants}
            className="w-full lg:w-1/2 xl:w-3/5 flex items-center justify-center py-10 sm:py-12 px-6 lg:px-12"
            style={{ 
              backgroundImage: "url('/main/gradient-1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="w-full flex flex-col items-center lg:items-start gap-6">
              {/* Заголовок блока */}
              <motion.h1 
                variants={textVariants}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-[40px] sm:text-[48px] lg:text-h1 font-h1 tracking-banner text-white text-center lg:text-left"
                style={{ fontFamily: 'BOWLER' }}
              >
                ТЕХНОЛИУМ
              </motion.h1>

              {/* Описание блока */}
              <motion.h4 
                variants={textVariants}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-[20px] sm:text-[24px] lg:text-h4 font-h4 tracking-heading text-white text-center lg:text-left max-w-xl"
              >
                Онлайн-университет языков программирования, предлагающий гибкую и высокоэффективную образовательную модель
              </motion.h4>

              {/* Теги и кнопки */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col items-center lg:items-start w-full gap-6"
              >
                {/* Ряд с технологическими тегами и кнопкой */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {techTags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-1 bg-black/20 rounded-full border border-white cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-text whitespace-nowrap text-white">{tag}</span>
                    </span>
                  ))}
                  <button
                    onClick={scrollToForm}
                    className="px-4 py-1 bg-white text-black rounded-full border border-white cursor-pointer hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="text-xs sm:text-sm font-text whitespace-nowrap">Подобрать профессию</span>
                  </button>
                </div>
                {/* Ряд с тегами преимуществ */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {benefitTags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-1 bg-black/20 rounded-full border border-white cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-text whitespace-nowrap text-white">{tag}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscountBlock;