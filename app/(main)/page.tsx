"use client"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { Regions } from "@/components/regions"
import { AdmissionPlan } from "@/components/admission-plan"
import { EducationFormat } from "@/components/education-format"
import { CommercialViability } from "@/components/commercial-viability"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"
import { Contacts } from "@/components/contacts"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const viewportAmount = isMobile ? 0.1 : 0.2
  const staggerDelay = isMobile ? 0.05 : 0.1

  // Если пользователь предпочитает уменьшенное движение, отключаем анимации
  if (prefersReducedMotion) {
    return (
      <main>
        <Hero />
        <Specialties />
        <Regions />
        <AdmissionPlan />
        <EducationFormat />
        <CommercialViability />
        <News />
        <Contacts />
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <motion.div
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
      </motion.div>
    </main>
  )
}
