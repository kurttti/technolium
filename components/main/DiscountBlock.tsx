import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscountBlock = () => {
  return (
    <div className="w-full">
      <div className="max-w-[var(--max-content-width)] mx-auto">
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
            className="relative w-full md:w-4/6 flex items-start md:items-center bg-[var(--color-darkblue)] md:bg-transparent py-[var(--section-margin)] md:py-0"
          >
            <Image
              src="/main/gradient-1.jpg"
              alt="Background gradient"
              fill
              className="hidden md:block object-cover"
              priority
            />
            
            <div className="relative z-10 w-full px-6 md:pl-16 flex flex-col items-center md:items-start gap-[var(--min-gap-button-text)]">
              {/* Подпись */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-center md:text-left"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'var(--font-size-heading)',
                  lineHeight: 'var(--line-height-body)',
                  fontWeight: 'var(--font-weight-heading)',
                  letterSpacing: 'var(--letter-spacing-heading)',
                  color: 'var(--color-white)',
                  marginBottom: 'var(--min-gap-button-text)'
                }}
              >
                ТЕХНОЛИУМ
              </motion.h1>

              {/* Основной заголовок */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-[var(--color-white)] text-center md:text-left max-w-[800px]"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'var(--font-size-subheading)',
                  lineHeight: 'var(--line-height-body)',
                  fontWeight: 'var(--font-weight-heading)',
                  letterSpacing: 'var(--letter-spacing-heading)',
                  marginBottom: 'var(--section-margin)'
                }}
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
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Javascript</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Python</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Нейросети</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">GO</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">C#</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Подобрать профессию</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">10 месяцев</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Коммерческая деятельность</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Центр карьеры</span>
                  <span className="px-4 py-1.5 bg-black/[var(--opacity-bg-photo)] rounded-full text-[var(--color-white)] border border-white cursor-pointer hover:bg-white/20 transition-colors">Выбор специализации</span>
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
                  className="mt-[var(--section-margin)] w-full md:w-auto bg-[var(--color-white)] text-[hsl(var(--foreground))] px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-base md:text-lg font-medium"
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