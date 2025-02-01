'use client'

import { DiscountBlock } from '@/components/landing/second/DiscountBlock'
import { TeacherBlock } from '@/components/landing/second/TeacherBlock'
import { OpportunitiesBlock } from '@/components/landing/second/OpportunitiesBlock'
import CarouselBlock from '@/components/landing/second/CarouselBlock'
import EducationPlanBlock from '@/components/landing/second/EducationPlanBlock'
import { NavBarSecond } from '@/components/layout/nav-bar-second'
import './styles.module.css'

export default function SecondLandingPage() {
  return (
    <main>
      <DiscountBlock />
      <NavBarSecond />      
      <TeacherBlock />
      <OpportunitiesBlock />
      <CarouselBlock />
      <EducationPlanBlock />
    </main>
  )
}