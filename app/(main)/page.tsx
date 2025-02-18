"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import ApplicationFormBlock from "@/components/main/ApplicationFormBlock"
import { DiscountBlock } from "@/components/main/DiscountBlock"
import CarouselBlock from "@/components/main/CarouselBlock"
import { OpportunitiesBlock } from "@/components/main/OpportunitiesBlock"
import EducationPlanBlock from "@/components/main/EducationPlanBlock"
// import { TariffBlock } from "@/components/main/TariffBlock"
import TariffBlock from '@/components/main/TariffBlock';
import FoundersBlock from "@/components/main/FoundersBlock"
import HistoryBlock from "@/components/main/HistoryBlock"
import ProfessionBlock from "@/components/main/ProfessionBlock"
import StudentsBlock from "@/components/main/StudentsBlock"
import EducationFormatBlock from "@/components/main/EducationFormatBlock"
import TestingBlock from "@/components/main/TestingBlock"
import HelpStepsBlock from "@/components/main/HelpStepsBlock"
import NewsBlock from "@/components/main/NewsBlock"


export default function MainPage() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        when: "beforeChildren",
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    initial: { 
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: prefersReducedMotion ? 1 : 1.02,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <>
      {isLoaded && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16"
          style={{ 
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <DiscountBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <FoundersBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <HistoryBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <ProfessionBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <StudentsBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <EducationFormatBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <TestingBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <HelpStepsBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <TariffBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <NewsBlock />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="transform-gpu will-change-transform"
          >
            <ApplicationFormBlock />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
