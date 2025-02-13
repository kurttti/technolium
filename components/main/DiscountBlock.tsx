import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscountBlock = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[600px] md:h-[600px] flex flex-col md:flex-row overflow-hidden"
        >
          {/* Левая сторона с изображением */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full md:w-2/6 h-[300px] md:h-auto bg-cover bg-center md:bg-[center_top] bg-[center_top_-20px]" 
            style={{ 
              backgroundImage: 'url(/landing/second/men-with-notebook.png)'
            }}
          />

          {/* Правая сторона с содержимым */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full md:w-4/6 flex items-center bg-[var(--color-darkblue)] md:bg-transparent "
          >
            <Image
              src="/landing/second/gradient-1.png"
              alt="Background gradient"
              fill
              className="hidden md:block object-cover"
              priority
            />
            
            <div className="relative z-10 w-full px-6 md:px-16 py-8 md:py-0">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-[var(--color-white)] text-center md:text-left"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'clamp(36px, 4.5vw, 65px)',
                  lineHeight: '1.2',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  letterSpacing: '0.02em'
                }}
              >
                ОТКРЫТ НАБОР<br />
                НА ЛЬГОТНОЕ<br />
                ОБУЧЕНИЕ
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center md:items-start gap-4 mt-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="max-w-[280px] md:max-w-[320px] group relative overflow-hidden bg-gradient-to-r from-[#2563EB]/30 to-[#2563EB]/10 backdrop-blur-sm text-[var(--color-white)] px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base text-center md:text-left font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:from-[#2563EB]/40 hover:to-[#2563EB]/20"
                >
                  <div className="relative z-10 whitespace-normal">-55% от стоимости стандартного обучения</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </motion.div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const form = document.getElementById('application-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="w-full md:w-auto bg-[var(--color-white)] text-[hsl(var(--foreground))] px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-base md:text-lg font-medium"
                >
                  Оставить заявку
                </motion.button>
              </motion.div>

              {/* Текст Python справа */}
              <div 
                className="hidden md:flex absolute right-8 flex-col justify-between"
                style={{
                  width: '58px',
                  height: '492px',
                  fontFamily: 'BOWLER',
                  fontSize: '70px',
                  lineHeight: '82px',
                  fontWeight: '400',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                {['P', 'Y', 'T', 'H', 'O', 'N'].map((letter, index) => (
                  <motion.span 
                    key={index} 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                    style={{
                      color: 'hsl(var(--foreground))',
                      WebkitTextStroke: '1px var(--color-white)',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
