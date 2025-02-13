'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-block text-center mb-16 tracking-banner text-black"
          style={{ fontFamily: 'BOWLER' }}
        >
          ОСНОВАТЕЛИ ТЕХНОЛИУМ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-card p-8 relative overflow-hidden text-black"
            >
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6">
                    <Image
                      src={founder.photo}
                      alt={`${founder.name} ${founder.surname}`}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-body tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                        {founder.name}
                      </h3>
                      <h3 className="text-heading tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                        {founder.surname}
                      </h3>
                    </div>
                    
                    <div className="bg-black text-white px-6 py-2 rounded-full inline-block">
                      {founder.role}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {founder.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-body">
                      <span className="text-black/60">—</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoundersBlock 