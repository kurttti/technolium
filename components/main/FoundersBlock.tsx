'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FlowingShape } from '../3d/FlowingShape'

interface Founder {
  id: number
  name: string
  surname: string
  role: string
  photo: string
  achievements: string[]
}

const founders: Founder[] = [
  {
    id: 1,
    name: 'БАЛОЯН',
    surname: 'НАЗАР',
    role: 'PYTHON DEVELOPER SENIOR',
    photo: '/main/nazar.png', // Изображение должно быть в папке public
    achievements: [
      'Ведущий преподаватель и основатель Университета Технолиум',
      'Более 6 лет в коммерческой разработке',
      'Более 3х лет в обучении и разработке',
      'Степень магистра в области математики и computer science'
    ]
  },
  {
    id: 2,
    name: 'БАЛОЯН',
    surname: 'АРСЕНИЙ',
    role: 'BUSINESS ANALYST',
    photo: '/main/arseniy.png', // Изображение должно быть в папке public
    achievements: [
      'Основатель Университета Технолиум',
      'Призер олимпиады «Я профессионал» по направлению «Бизнес-информатика»',
      'Получатель гранта президента Российский Федерации',
      'Высшее образование СПбГЭУ, ВШЭ'
    ]
  }
]

const FoundersBlock = () => {
  return (
    <section className="w-full py-section-margin">
      <div className="max-w-content mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-h1 leading-h1 font-h1 text-center mb-section-margin tracking-banner"
          style={{ fontFamily: 'BOWLER' }}
        >
          ОСНОВАТЕЛИ
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <div key={founder.name} className="space-y-4">
              <h2 className="text-h3 leading-h3 font-h3">
                {founder.name}
              </h2>
              <p className="text-base leading-body font-text">
                {founder.surname}
              </p>
              <div className="space-y-2">
                {founder.achievements.map((achievement, index) => (
                  <p key={index} className="text-sm leading-body font-text">
                    {achievement}
                  </p>
                ))}
              </div>
              <div className="text-base leading-body font-text bg-black text-white px-6 py-2 rounded-full">
                {founder.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoundersBlock 