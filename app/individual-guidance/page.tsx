'use client'

import ApplicationFormBlock from '@/components/main/ApplicationFormBlock'
import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'

export default function IndividualGuidance() {
  return (
    <main>
      <ApplicationFormBlock 
        title="ИНДИВИДУАЛЬНОЕ ВЕДЕНИЕ" 
        applicationType="individual"
        fullscreen
      />
    </main>
  )
}
