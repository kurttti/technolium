'use client'

import ApplicationFormBlock from '@/components/main/ApplicationFormBlock'
import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'

export default function Application() {
  return (
    <main>
      <ApplicationFormBlock 
        title="ОСТАВИТЬ ЗАЯВКУ"
        applicationType="webinar"
        fullscreen
      />
    </main>
  )
}
