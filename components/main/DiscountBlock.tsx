import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscountBlock = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[600px] md:h-[600px] flex flex-col md:flex-row overflow-hidden rounded-[var(--card-border-radius)]"
        >
          {/* Левая сторона с изображением */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full md:w-2/6 h-[300px] md:h-auto bg-cover bg-center md:bg-[center_top] bg-[center_top_-20px]"
            style={{ 
              // Используем изображение из /main (папка public/main)
              backgroundImage: "url(/main/two-man-with-notebook.jpg)"
            }}
          />

          {/* Правая сторона с содержимым */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full md:w-4/6 flex items-center bg-[var(--color-darkblue)] md:bg-transparent"
          >
            <Image
              src="/main/gradient-1.png"
              alt="Background gradient"
              fill
              className="hidden md:block object-cover"
              priority
            />
            
            <div className="relative z-10 w-full px-6 md:px-16 py-8 md:py-0 flex flex-col items-center md:items-start gap-4">
              {/* Подпись */}
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-center md:text-left"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'var(--font-size-subheading)',
                  lineHeight: '1.2',
                  fontWeight: 'var(--font-weight-heading)',
                  letterSpacing: 'var(--letter-spacing-heading)',
                  color: 'var(--color-cta)'
                }}
              >
                Технолиум
              </motion.h3>

              {/* Основной заголовок */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-[var(--color-white)] text-center md:text-left"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'var(--font-size-heading)',
                  lineHeight: '1.2',
                  fontWeight: 'var(--font-weight-heading)',
                  letterSpacing: 'var(--letter-spacing-heading)'
                }}
              >
                Онлайн-университет языков программирования,<br />
                предлагающий гибкую и высокоэффективную<br />
                образовательную модель
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center md:items-start gap-4 mt-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="max-w-[280px] md:max-w-[320px] group relative overflow-hidden bg-gradient-to-r from-[#2563EB]/30 to-[#2563EB]/10 backdrop-blur-sm text-[var(--color-white)] px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base text-center md:text-left font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:from-[#2563EB]/40 hover:to-[#2563EB]/20"
                >
                  <div className="relative z-10 whitespace-normal">
                    -55% от стоимости стандартного обучения
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </motion.div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const form = document.getElementById('application-form')
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' })
                    }
                  }} 
                  className="w-full md:w-auto bg-[var(--color-white)] text-[hsl(var(--foreground))] px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-base md:text-lg font-medium"
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