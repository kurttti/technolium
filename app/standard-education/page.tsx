'use client'

import ApplicationFormBlock from '@/components/main/ApplicationFormBlock'
import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'

export default function StandardEducation() {
  return (
    <main>
      <ApplicationFormBlock 
        title="СТАНДАРТНОЕ ОБУЧЕНИЕ" 
        applicationType="webinar"
        fullscreen
      />
    </main>
  )
}
