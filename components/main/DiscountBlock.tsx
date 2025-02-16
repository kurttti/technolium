import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscountBlock = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-content mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[700px] flex flex-col lg:flex-row overflow-hidden"
        >
          {/* Левая сторона с изображением - скрыта на мобильных и планшетах */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block w-full lg:w-2/6 h-[250px] sm:h-[300px] lg:h-auto bg-cover bg-bottom"
            style={{ 
              backgroundImage: "url('/main/men-with-notebook.jpg')"
            }}
          />

          {/* Правая сторона с содержимым - занимает всю ширину на мобильных */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full flex items-start lg:items-center bg-darkblue lg:bg-transparent py-8 sm:py-12 lg:py-0"
            style={{ 
              backgroundImage: "url('/main/gradient-1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-modal w-full px-4 sm:px-6 lg:px-16 flex flex-col items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
              {/* Подпись */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-[32px] sm:text-[40px] lg:text-h1 leading-tight lg:leading-h1 font-h1 tracking-banner text-white text-center lg:text-left"
                style={{ fontFamily: 'BOWLER' }}
              >
                ТЕХНОЛИУМ
              </motion.h1>

              {/* Основной заголовок */}
              <motion.h4 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-[20px] sm:text-[24px] lg:text-h4 leading-normal lg:leading-h4 font-h4 tracking-heading text-white text-center lg:text-left max-w-[90%] lg:max-w-none"
              >
                Онлайн-университет языков программирования,
                предлагающий гибкую и высокоэффективную
                образовательную модель
              </motion.h4>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center lg:items-start w-full"
              >
                {/* Теги */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full max-w-[90%] lg:max-w-none">
                  {['Javascript', 'Python', 'Нейросети', 'GO', 'C#'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 sm:px-4 py-1 sm:py-1.5 bg-black/20 rounded-full text-white border border-white cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xs sm:text-sm leading-body font-text whitespace-nowrap">{tag}</span>
                    </span>
                  ))}
                  <span 
                    onClick={scrollToForm}
                    className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white text-black rounded-full border border-white cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-xs sm:text-sm leading-body font-text whitespace-nowrap">Подобрать профессию</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2 w-full max-w-[90%] lg:max-w-none">
                  {['10 месяцев', 'Коммерческая деятельность', 'Центр карьеры', 'Выбор специализации'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 sm:px-4 py-1 sm:py-1.5 bg-black/20 rounded-full text-white border border-white cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <span className="text-xs sm:text-sm leading-body font-text whitespace-nowrap">{tag}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}