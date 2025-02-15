import { motion } from 'framer-motion'

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const linkAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const FooterBlock = () => {
  return (
    <div className="w-full ">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-content mx-auto rounded-[20px] bg-[#0A0A2C] overflow-hidden"
      >
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-24">
            {/* Technolium text - показываем над контактами на мобильном */}
            <div className="block md:hidden">
              <motion.div 
                className="flex justify-center items-center mb-8 w-full overflow-x-hidden px-1"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'clamp(16px, 6vw, 32px)',
                  lineHeight: '1.2',
                  fontWeight: '400',
                }}
              >
                <div className="flex flex-nowrap justify-center min-w-0">
                  {['Т', 'Е', 'Х', 'Н', 'О', 'Л', 'И', 'У', 'М'].map((letter, index) => (
                    <motion.span 
                      key={index} 
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                      style={{
                        color: '#FFFFFF',
                        opacity: 0.15,
                        display: 'inline-block',
                        marginRight: '0.02em'
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              {/* Контакты */}
              <motion.div variants={itemAnimation}>
                <motion.h3 
                  variants={itemAnimation}
                  className="text-2xl text-white mb-8" 
                  style={{ fontFamily: 'BOWLER' }}
                >
                  КОНТАКТЫ
                </motion.h3>
                <motion.div 
                  variants={containerAnimation}
                  className="space-y-6 text-white/80"
                >
                  <motion.a 
                    variants={linkAnimation}
                    whileHover={{ x: 10, color: '#fff' }}
                    href="https://wa.me/79952147457" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transition-colors"
                  >
                    WhatsApp
                  </motion.a>
                  <motion.a 
                    variants={linkAnimation}
                    whileHover={{ x: 10, color: '#fff' }}
                    href="https://drive.google.com/file/d/1BP1Rh0ZWpkEO7YwzYhKoIwnx4N2V1T0q/view"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block transition-colors"
                  >
                    Публичная оферта
                  </motion.a>
                  <motion.a 
                    variants={linkAnimation}
                    whileHover={{ x: 10, color: '#fff' }}
                    href="mailto:info@technolium.ru"
                    className="block transition-colors"
                  >
                    Email: info@technolium.ru
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Technolium text - показываем справа на планшете и десктопе */}
            <motion.div 
              className="hidden md:flex items-center justify-end"
              style={{
                fontFamily: 'BOWLER',
                fontSize: '64px',
                lineHeight: '76px',
                fontWeight: '400',
              }}
            >
              <div className="flex">
                {['Т', 'Е', 'Х', 'Н', 'О', 'Л', 'И', 'У', 'М'].map((letter, index) => (
                  <motion.span 
                    key={index} 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                    style={{
                      color: '#FFFFFF',
                      opacity: 0.15,
                      display: 'inline-block',
                      marginRight: '0.1em'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemAnimation}
            className="mt-12 text-white/60"
          >
            {/* Основная информация */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-left">
              <motion.div variants={itemAnimation} className="space-y-2">
                <h4 className="font-medium text-white/80">Регистрационные данные</h4>
                <p>ИП БАЛОЯН АРСЕНИЙ РОБЕРТОВИЧ</p>
                <p>ОГРНИП: 324237500502599</p>
                <p>ИНН: 233608758888</p>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="space-y-2">
                <h4 className="font-medium text-white/80">Регистрирующий орган</h4>
                <p>Межрайонная инспекция Федеральной налоговой службы № 16 по Краснодарскому краю</p>
              </motion.div>
            </div>

            {/* Копирайт */}
            <div className="text-center pt-6 border-t border-white/10">
              <p>© 2024 Technolium. Все права защищены.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FooterBlock
