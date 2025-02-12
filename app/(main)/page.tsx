"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import ApplicationFormBlock from "@/components/landing/second/ApplicationFormBlock"
import { DiscountBlock } from "@/components/landing/second/DiscountBlock"
import CarouselBlock from "@/components/landing/second/CarouselBlock"
import { TeacherBlock } from "@/components/landing/second/TeacherBlock"
import { OpportunitiesBlock } from "@/components/landing/second/OpportunitiesBlock"
import EducationPlanBlock from "@/components/landing/second/EducationPlanBlock"
import FooterBlock from "@/components/landing/second/FooterBlock"
import './styles.module.css'
import './styles.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]  
    }
  }
}

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

  const viewportAmount = isMobile ? 0.1 : 0.2
  const staggerDelay = isMobile ? 0.05 : 0.1

  // // Если пользователь предпочитает уменьшенное движение, отключаем анимации
  // if (prefersReducedMotion) {
  //   return (
  //     <main>
  //       <Hero />
  //       <Specialties />
  //       <Regions />
  //       <AdmissionPlan />
  //       <EducationFormat />
  //       <CommercialViability />
  //       <News />
  //       <Contacts />
  //       <Footer />
  //     </main>
  //   )
  // }

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
    <div className="flex-1 relative">
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
          {/* <NavBarSecond />       */}
          <motion.div variants={itemVariants}>
            <TeacherBlock />
          </motion.div>
          <motion.div variants={itemVariants}>
            <OpportunitiesBlock />
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
          </motion.div>
        </motion.div>
      )}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay }}
      >
        <Specialties />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 2 }}
      >
        <Regions />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 3 }}
      >
        <AdmissionPlan />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 4 }}
      >
        <EducationFormat />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 5 }}
      >
        <CommercialViability />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 6 }}
      >
        <News />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 7 }}
      >
        <Contacts />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        transition={{ delay: staggerDelay * 8 }}
      >
        <Footer />
      </motion.div> */}
    </div>
  )
}
