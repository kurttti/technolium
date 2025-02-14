"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import ApplicationFormBlock from "@/components/main/ApplicationFormBlock"
import { DiscountBlock } from "@/components/main/DiscountBlock"
import CarouselBlock from "@/components/main/CarouselBlock"
import { OpportunitiesBlock } from "@/components/main/OpportunitiesBlock"
import EducationPlanBlock from "@/components/main/EducationPlanBlock"
import FooterBlock from "@/components/main/FooterBlock"
import { TariffBlock } from "@/components/main/TariffBlock"
import FoundersBlock from "@/components/main/FoundersBlock"
import HistoryBlock from "@/components/main/HistoryBlock"
import ProfessionBlock from "@/components/main/ProfessionBlock"
import StudentsBlock from "@/components/main/StudentsBlock"
import EducationFormatBlock from "@/components/main/EducationFormatBlock"

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
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  }
  
  const itemVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
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
          className="w-full"
          style={{ 
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.div variants={itemVariants}>
            <DiscountBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FoundersBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HistoryBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProfessionBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StudentsBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <EducationFormatBlock />
          </motion.div>
            {/* <NavBarSecond />       */}
          {/* <motion.div variants={itemVariants}>
            <FoundersBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OpportunitiesBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <TariffBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CarouselBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <EducationPlanBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ApplicationFormBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FooterBlock />
          </motion.div> */}
        </motion.div>
      )}
    </>
  )
}
