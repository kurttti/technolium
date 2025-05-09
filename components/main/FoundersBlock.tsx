'use client'

import { motion } from 'framer-motion'

interface Founder {
  id: number
  role: string
  achievements: string[]
}

const founders: Founder[] = [
  {
    id: 1,
    role: 'LEAD DEVELOPER',
    achievements: [
      '7+ лет опыта в разработке веб-приложений',
      'Эксперт в Python и Go',
      'Разработал архитектуру образовательной платформы Технолиум',
      'Наставник для начинающих разработчиков'
    ]
  },
  {
    id: 2,
    role: 'PRODUCT MANAGER',
    achievements: [
      '5+ лет в управлении продуктами EdTech',
      'Разработала методологию практического обучения',
      'Координировала запуск первых курсов',
      'Выпускница топового университета, магистр управления'
    ]
  },
  {
    id: 3,
    role: 'DATA ANALYST',
    achievements: [
      'Эксперт в анализе данных и бизнес-процессов',
      'Оптимизировал систему обратной связи студентов',
      '4+ года работы с BI-инструментами',
      'Призер хакатонов по аналитике'
    ]
  },
  {
    id: 4,
    role: 'MARKETING SPECIALIST',
    achievements: [
      'Разработала стратегию продвижения университета',
      '3+ года опыта в digital-маркетинге',
      'Увеличила охват бренда на 200% за год',
      'Сертифицированный специалист Google Ads'
    ]
  },
  {
    id: 5,
    role: 'UI/UX DESIGNER',
    achievements: [
      'Создал интуитивный интерфейс платформы',
      '5+ лет опыта в дизайне цифровых продуктов',
      'Победитель конкурсов по UX-дизайну',
      'Интегрировал 3D-визуализации в курсы'
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

        <p className="text-lg sm:text-xl lg:text-2xl text-center mb-12 max-w-3xl mx-auto">
          Университет Технолиум создан командой из пяти молодых и амбициозных профессионалов, объединенных идеей построить качественный продукт на рынке EdTech. Они собрались вместе, чтобы разработать образовательную платформу, которая помогает людям осваивать востребованные IT-навыки через практику и реальные проекты.
        </p>

        {founders.map((founder, index) => (
          <div key={founder.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-10 lg:mb-16`}>
            <div className="w-full sm:w-3/4 lg:w-1/2 bg-gray-100 rounded-[20px] p-6 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-black text-white px-6 py-3 rounded-full mb-6 text-left">
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium">{founder.role}</span>
                </div>
              </div>
            </div>
            <div className={`w-full sm:w-3/4 lg:w-1/2 mt-6 lg:mt-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} space-y-4 px-4 lg:px-0 flex flex-col items-start justify-center`}>
              {founder.achievements.map((achievement, idx) => (
                <p key={idx} className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
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
