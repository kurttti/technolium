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
    <footer className="bg-black text-white py-16">
      <div className="max-w-content mx-auto px-4">
        <h2 className="text-h4 leading-h4 font-h4 mb-8">
          Технолиум
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-h6 leading-h6 font-h6">Контакты</h3>
            <p className="text-base leading-body font-text">
              info@tehnolium.ru
            </p>
          </div>
          {/* ... остальные секции */}
        </div>
        
        <p className="text-sm leading-body font-text mt-8 text-white/60">
          © 2024 Технолиум. Все права защищены
        </p>
      </div>
    </footer>
  )
}

export default FooterBlock
