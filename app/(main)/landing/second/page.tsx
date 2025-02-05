'use client'

import { motion } from 'framer-motion'
import { DiscountBlock } from '@/components/landing/second/DiscountBlock'
import { TeacherBlock } from '@/components/landing/second/TeacherBlock'
import { OpportunitiesBlock } from '@/components/landing/second/OpportunitiesBlock'
import CarouselBlock from '@/components/landing/second/CarouselBlock'
import EducationPlanBlock from '@/components/landing/second/EducationPlanBlock'
import ApplicationFormBlock from '@/components/landing/second/ApplicationFormBlock'
import { NavBarSecond } from '@/components/layout/nav-bar-second'
import FooterBlock from "@/components/landing/second/FooterBlock"
import './styles.module.css'
import '../styles.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function SecondLandingPage() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="main-container pt-8"
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
    </motion.main>
  )
}