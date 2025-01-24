"use client"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { Regions } from "@/components/regions"
import { AdmissionPlan } from "@/components/admission-plan"
import { EducationFormat } from "@/components/education-format"
import { CommercialViability } from "@/components/commercial-viability"
import { News } from "@/components/news"
import { ContactFooter } from "@/components/contact-footer"
import { motion } from "framer-motion"

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

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
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
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.05 }}
      >
        <Specialties />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <Regions />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.15 }}
      >
        <AdmissionPlan />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <EducationFormat />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.25 }}
      >
        <CommercialViability />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <News />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ delay: 0.35 }}
      >
        <ContactFooter />
      </motion.div>
    </motion.main>
  )
}
