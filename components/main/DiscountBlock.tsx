import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscountBlock = () => {
  return (
    <div className="w-full">
      <div className="max-w-content mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[500px] md:h-[700px] flex flex-col md:flex-row overflow-hidden"
        >
          {/* Левая сторона с изображением */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full md:w-2/6 h-[250px] md:h-auto bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/main/men-with-notebook.jpg')"
            }}
          />

          {/* Правая сторона с содержимым */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full md:w-4/6 flex items-start md:items-center bg-darkblue md:bg-transparent py-section-margin md:py-0"
          >
            <Image
              src="/main/gradient-1.jpg"
              alt="Background gradient"
              fill
              className="hidden md:block object-cover"
              priority
            />
            
            <div className="relative z-modal w-full px-6 md:pl-16 flex flex-col items-center md:items-start gap-min-gap-button-text">
              {/* Подпись */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-h1 leading-h1 font-h1 tracking-heading text-white mb-min-gap-button-text"
                style={{ fontFamily: 'BOWLER' }}
              >
                ТЕХНОЛИУМ
              </motion.h1>

              {/* Основной заголовок */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-h3 leading-h3 font-h3 tracking-heading text-white mb-section-margin"
              >
                Онлайн-университет языков программирования,
                предлагающий гибкую и высокоэффективную
                образовательную модель
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center md:items-start"
              >
                {/* Добавляем теги */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['Javascript', 'Python', 'Нейросети', 'GO', 'C#', 'Подобрать профессию'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-black/20 rounded-full text-white border border-white cursor-pointer hover:bg-white/20 transition-colors">
                      <span className="text-sm leading-body font-text">{tag}</span>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                  {['10 месяцев', 'Коммерческая деятельность', 'Центр карьеры', 'Выбор специализации'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-black/20 rounded-full text-white border border-white cursor-pointer hover:bg-white/20 transition-colors">
                      <span className="text-sm leading-body font-text">{tag}</span>
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const form = document.getElementById('application-form')
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' })
                    }
                  }} 
                  className="mt-section-margin w-full md:w-auto bg-white text-foreground px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-base md:text-lg font-medium"
                >
                  Оставить заявку
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}