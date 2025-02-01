'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import styles from './ApplicationFormBlock.module.css'

const ApplicationFormBlock = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="w-full px-4 py-16">
      <div className={`max-w-[1200px] mx-auto rounded-[32px] overflow-hidden ${styles.gradientBackground}`}>
        <div className="flex flex-col items-center py-16 px-4">
          <h2 className="text-[64px] mb-4 text-center tracking-wider text-white" style={{ fontFamily: 'BOWLER' }}>
            ОСТАВИТЬ ЗАЯВКУ
          </h2>
          <h3 className="text-[32px] mb-12 text-center tracking-wider text-white/80" style={{ fontFamily: 'BOWLER' }}>
            НА ЛЬГОТНОЕ ОБУЧЕНИЕ
          </h3>
          
          <form onSubmit={handleSubmit} className="w-full max-w-[600px] space-y-6">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="h-14 px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/40 focus-visible:border-white/40 backdrop-blur-sm"
            />
            
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Номер телефона"
              className="h-14 px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/40 focus-visible:border-white/40 backdrop-blur-sm"
            />
            
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="h-14 px-6 rounded-[18px] bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/40 focus-visible:border-white/40 backdrop-blur-sm"
            />
            
            <button
              type="submit"
              className="w-full h-14 bg-white/20 hover:bg-white/30 text-white rounded-[18px] font-medium transition-colors backdrop-blur-sm"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplicationFormBlock
