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
    <section className="w-full py-16 px-4 xl:px-0">
      <div className="max-w-content mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10 tracking-wide"
          style={{ fontFamily: 'BOWLER' }}
        >
          ОСНОВАТЕЛИ ТЕХНОЛИУМ
        </motion.h1>

        {founders.map((founder, index) => (
          <div key={founder.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-10 lg:mb-16`}>
            <div className="relative w-full sm:w-3/4 lg:w-1/2 bg-gray-100 rounded-[20px] p-6 shadow-lg">
              <div className="flex flex-col items-center">
                <div 
                  className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mb-6 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)' }}
                >
                  <Image
                    src={founder.photo}
                    alt={`${founder.name} ${founder.surname}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-black text-white px-6 py-3 rounded-full mb-6 text-left">
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium">{founder.role}</span>
                </div>
                <h2 
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center"
                  style={{ fontFamily: 'BOWLER' }}
                >
                  {founder.name} {founder.surname}
                </h2>
              </div>
            </div>
            <div className={`w-full sm:w-3/4 lg:w-1/2 mt-6 lg:mt-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} space-y-4 px-4 lg:px-0 flex flex-col items-start justify-center`}>
              {founder.achievements.map((achievement, index) => (
                <p key={index} className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  <span className="inline-block w-8">—</span> {achievement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FoundersBlock 
