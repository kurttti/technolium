"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ApplicationModal } from "./application-modal"
import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.25 : 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const logoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.25 : 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.25 : 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: isMobile ? 1.02 : 1.03,
      transition: {
        duration: 0.15
      }
    }
  }

  // Если пользователь предпочитает уменьшенное движение
  if (prefersReducedMotion) {
    return (
      <section className="flex justify-center w-full lg:max-w-7xl mx-auto xl:pt-16">
        <div className="w-full max-w-7xl bg-[#F8F8F8]">
          <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
            <div className="mb-6 sm:mb-8 md:mb-10 relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative flex items-center justify-center">
                <div className="relative z-10 flex items-center justify-center w-[84px] h-[84px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoliumLogo-kzgl8HBePAmBx62DmyChft0dIKmFPH.svg"
                    alt="Технолиум логотип"
                    width={84}
                    height={84}
                    className="translate-x-[5px] translate-y-[6px]"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
              Программа повышения квалификации на Python от университета Технолиум
            </p>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight px-2 sm:px-4">
                Открыт набор на льготное обучение Python
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 px-2 sm:px-4">
              Подбери специальность и начни обучаться бесплатно
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#0095FF] text-white px-6 sm:px-10 py-3 sm:py-4 text-lg font-medium hover:bg-[#0080FF] transition-colors shadow-md hover:shadow-lg rounded-none"
            >
              Начать бесплатно
            </button>
          </div>
        </div>
        <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    )
  }

  return (
    <section className="flex justify-center w-full lg:max-w-7xl mx-auto xl:pt-16">
      <motion.div 
        className="w-full max-w-7xl bg-[#F8F8F8]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          <motion.div 
            className="mb-6 sm:mb-8 md:mb-10 relative"
            variants={logoVariants}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 bg-[#0095FF] bg-opacity-5 rounded-full"
                animate={{
                  scale: [1, 1.03, 1], // Уменьшили амплитуду для мобильных
                }}
                transition={{
                  duration: isMobile ? 2 : 1.5, // Увеличили длительность для более плавной анимации
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative z-10 flex items-center justify-center w-[84px] h-[84px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoliumLogo-kzgl8HBePAmBx62DmyChft0dIKmFPH.svg"
                  alt="Технолиум логотип"
                  width={84}
                  height={84}
                  className="translate-x-[5px] translate-y-[6px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
          <motion.p 
            className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl"
            variants={itemVariants}
          >
            Программа повышения квалификации на Python от университета Технолиум
          </motion.p>
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight px-2 sm:px-4"
              variants={itemVariants}
            >
              Открыт набор на льготное обучение Python
            </motion.h1>
          </div>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 px-2 sm:px-4"
            variants={itemVariants}
          >
            Подбери специальность и начни обучаться бесплатно
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#0095FF] text-white px-6 sm:px-10 py-3 sm:py-4 text-lg font-medium hover:bg-[#0080FF] transition-colors shadow-md hover:shadow-lg rounded-none"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            Начать бесплатно
          </motion.button>
        </div>
      </motion.div>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
