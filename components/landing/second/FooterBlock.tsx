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
    <div className="w-full px-4 pb-2">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] mx-auto rounded-[32px] bg-[#0A0A2C] overflow-hidden"
      >
        <motion.div 
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  href="https://t.me/TechnoliumWeb_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-colors"
                >
                  Telegram
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

            {/* Мы в соцсетях */}
            <motion.div variants={itemAnimation}>
              <motion.h3 
                variants={itemAnimation}
                className="text-2xl text-white mb-8" 
                style={{ fontFamily: 'BOWLER' }}
              >
                МЫ В СОЦСЕТЯХ
              </motion.h3>
              <motion.div 
                variants={containerAnimation}
                className="space-y-6 text-white/80"
              >
                <motion.a 
                  variants={linkAnimation}
                  whileHover={{ x: 10, color: '#fff' }}
                  href="https://t.me/TechnoliumWeb_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-colors"
                >
                  Telegram
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemAnimation}
            className="mt-12 text-center text-white/60"
          >
            <p>2024 Technolium. Все права защищены.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FooterBlock
