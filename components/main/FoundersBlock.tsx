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

        <div className="grid grid-cols-1 gap-8">
          {/* Блок Назара */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block w-[300px] h-[300px] relative">
              <FlowingShape
                position={[0, 0, 0]}
                color="#6B5BFF"
                reverse={false}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-card p-8 relative overflow-hidden text-black"
              style={{ maxWidth: '800px' }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-8">
                  {/* Фото и информация */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden mb-6 relative">
                      {/* Градиентный фон */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#6B5BFF]/20 to-[#6B5BFF]/80 z-0"
                        style={{
                          borderRadius: '50%',
                        }}
                      />
                      <div className="w-full h-full relative z-10">
                        <Image
                          src={founders[0].photo}
                          alt={`${founders[0].name} ${founders[0].surname}`}
                          fill
                          className="object-cover object-top"
                          sizes="300px"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-body tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                          {founders[0].name}
                        </h3>
                        <h3 className="text-heading tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                          {founders[0].surname}
                        </h3>
                      </div>
                      
                      <div className="bg-black text-white px-6 py-2 rounded-full inline-block">
                        {founders[0].role}
                      </div>
                    </div>
                  </div>

                  {/* Список достижений справа */}
                  <ul className="space-y-4 flex-1 self-center">
                    {founders[0].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-body">
                        <span className="text-black/60">—</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Блок Арсения */}
          <div className="flex items-center gap-8 justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-card p-8 relative overflow-hidden text-black"
              style={{ maxWidth: '800px' }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-8">
                  {/* Список достижений слева */}
                  <ul className="space-y-4 flex-1 self-center">
                    {founders[1].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-body">
                        <span className="text-black/60">—</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Фото и информация */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden mb-6 relative">
                      {/* Градиентный фон */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#1A365D]/20 to-[#1A365D]/80 z-0"
                        style={{
                          borderRadius: '50%',
                        }}
                      />
                      <div className="w-full h-full relative z-10">
                        <Image
                          src={founders[1].photo}
                          alt={`${founders[1].name} ${founders[1].surname}`}
                          fill
                          className="object-cover object-top"
                          sizes="300px"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-body tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                          {founders[1].name}
                        </h3>
                        <h3 className="text-heading tracking-heading" style={{ fontFamily: 'BOWLER' }}>
                          {founders[1].surname}
                        </h3>
                      </div>
                      
                      <div className="bg-black text-white px-6 py-2 rounded-full inline-block">
                        {founders[1].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="hidden md:block w-[300px] h-[300px] relative">
              <FlowingShape
                position={[0, 0, 0]}
                color="#1A365D"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersBlock 