'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import ApplicationFormBlock from '@/components/main/ApplicationFormBlock'

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInWhenVisible = ({ children, delay = 0, className = '' }: FadeInWhenVisibleProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const StaggerItem = ({ children, className = '' }: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const PythonCoursePage: React.FC = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  
  return (
    <main className="w-full" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-section-margin mt-[30px]">
        {/* Название курса и слоган */}
        <FadeInWhenVisible>
          <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[22px] xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] sm:leading-tight lg:leading-h1 font-h1 mb-4 tracking-banner text-center uppercase max-w-[280px] xs:max-w-[400px] sm:max-w-full mx-auto"
            style={{ fontFamily: 'BOWLER' }}
          >
            PYTHON: ОТ ОСНОВ К ПРОФЕССИОНАЛЬНОЙ РАЗРАБОТКЕ
          </motion.h1>
          </div>
        </FadeInWhenVisible>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal text-gray-600 mb-[70px] text-center max-w-[260px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] mx-auto"
        >
          Освойте самый популярный язык программирования с нуля
        </motion.p>

        {/* Что это за курс? */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Что это за курс?
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
            Этот курс представляет собой полное погружение в мир Python-разработки. 
            Вы изучите язык с нуля, познакомитесь с основными концепциями программирования 
            и научитесь создавать реальные проекты. Курс сочетает теорию и практику, 
            что позволит вам быстро освоить материал и начать применять знания.
          </p>
        </section>
          </FadeInWhenVisible>

        {/* Для кого этот курс? */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Для кого этот курс?
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
            Курс идеально подходит для:
          </p>
          <StaggerContainer className="list-none sm:list-disc list-inside mt-4 space-y-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700">
            <li className="flex items-start">Начинающих программистов без опыта</li>
            <li className="flex items-start">Тех, кто хочет сменить профессию на IT</li>
            <li className="flex items-start">Студентов технических специальностей</li>
            <li className="flex items-start">Специалистов из других областей, желающих автоматизировать свою работу</li>
          </StaggerContainer>
        </section>
          </FadeInWhenVisible>

        {/* Что я узнаю? */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Что я узнаю?
          </h2>
          <ul className="space-y-2">
            {[
              'Основы программирования на Python',
              'Работу с данными и базами данных',
              'Создание веб-приложений',
              'Автоматизацию задач',
              'Основы алгоритмов и структур данных',
              'Работу с популярными библиотеками и фреймворками'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
          </FadeInWhenVisible>

        {/* Как устроен курс? */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
              style={{ fontFamily: 'BOWLER' }}
            >
              Как устроен курс?
            </h2>

            {/* Базовый курс Python */}
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px] mb-6">
              <h3 className="text-[20px] sm:text-[24px] font-medium mb-4">
                Базовый курс Python (11 модулей, 6 месяцев)
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-4 text-gray-700">
                Курс адаптирован для новичков без опыта программирования и охватывает фундаментальные основы:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StaggerContainer className="space-y-2 text-[16px] sm:text-[18px] text-gray-700">
                  <StaggerItem>• Введение в программирование и установку Python</StaggerItem>
                  <StaggerItem>• Основы синтаксиса: переменные, операторы, комментарии</StaggerItem>
                  <StaggerItem>• Управление потоком: условия и циклы</StaggerItem>
                  <StaggerItem>• Функции и параметры</StaggerItem>
                  <StaggerItem>• Списки и словари</StaggerItem>
                  <StaggerItem>• Работа с файлами</StaggerItem>
                </StaggerContainer>
                <ul className="space-y-2 text-[16px] sm:text-[18px] text-gray-700">
                  <li className="flex items-start">• Обработка исключений</li>
                  <li className="flex items-start">• Модули и пакеты</li>
                  <li className="flex items-start">• Основы ООП</li>
                  <li className="flex items-start">• Введение в тестирование</li>
                  <li className="flex items-start">• Версионный контроль с Git</li>
                </ul>
              </div>
            </div>

            {/* Специализации */}
            <div className="mb-6">
              <h3 className="text-[20px] sm:text-[24px] font-medium mb-4">Специализации</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-6 text-gray-700">
                По завершении базового курса выберите одно из направлений для углубленного изучения:
              </p>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
                {/* Нейросети и ML */}
                <StaggerItem>
                  <div className="bg-[#F8F8F8] p-6 rounded-[16px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <h4 className="font-medium text-[18px] mb-3">Нейросети и ML</h4>
                    <p className="text-[16px] text-gray-700 mb-2">Длительность: 5–6 месяцев</p>
                    <StaggerContainer className="text-[16px] text-gray-700 space-y-2 mb-4">
                      <StaggerItem>• NumPy и Pandas</StaggerItem>
                      <StaggerItem>• Scikit-learn</StaggerItem>
                      <StaggerItem>• TensorFlow и PyTorch</StaggerItem>
                      <StaggerItem>• Computer Vision</StaggerItem>
                    </StaggerContainer>
                    <p className="text-[14px] text-gray-600">
                      Финальный проект: Система распознавания объектов
                    </p>
                  </div>
                </StaggerItem>

                {/* Backend-разработка */}
                <StaggerItem>
                  <div className="bg-[#F8F8F8] p-6 rounded-[16px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <h4 className="font-medium text-[18px] mb-3">Backend-разработка</h4>
                    <p className="text-[16px] text-gray-700 mb-2">Длительность: 4 месяца</p>
                    <StaggerContainer className="text-[16px] text-gray-700 space-y-2 mb-4">
                      <StaggerItem>• Введение в веб-разработку и HTTP</StaggerItem>
                      <StaggerItem>• PostgreSQL</StaggerItem>
                      <StaggerItem>• FastAPI</StaggerItem>
                      <StaggerItem>• Docker и Redis</StaggerItem>
                      <StaggerItem>• Микросервисы</StaggerItem>
                    </StaggerContainer>
                    <p className="text-[14px] text-gray-600">
                      Финальный проект: API для электронной коммерции
                    </p>
                  </div>
                </StaggerItem>

                {/* Автоматизация тестирования */}
                <StaggerItem>
                  <div className="bg-[#F8F8F8] p-6 rounded-[16px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <h4 className="font-medium text-[18px] mb-3">Автоматизация тестирования</h4>
                    <p className="text-[16px] text-gray-700 mb-2">Длительность: 4 месяца</p>
                    <StaggerContainer className="text-[16px] text-gray-700 space-y-2 mb-4">
                      <StaggerItem>• PyTest</StaggerItem>
                      <StaggerItem>• Selenium и Playwright</StaggerItem>
                      <StaggerItem>• API-тестирование</StaggerItem>
                      <StaggerItem>• CI/CD</StaggerItem>
                    </StaggerContainer>
                    <p className="text-[14px] text-gray-600">
                      Финальный проект: Фреймворк автоматизированного тестирования
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Поддержка и оценка */}
      <FadeInWhenVisible>
        <section className="mb-8 sm:mb-10 md:mb-12">
        <div className="bg-[#F0F0F0] p-6 rounded-[16px] mb-6">
          <h3 className="text-[18px] font-medium mb-4">Поддержка и оценка</h3>
          <StaggerContainer className="space-y-2 text-[16px] text-gray-700">
            <StaggerItem>• Онлайн формат с форумами и регулярными заданиями</StaggerItem>
            <StaggerItem>• Менторская поддержка и сессии вопросов-ответов</StaggerItem>
            <StaggerItem>• Получение сертификата по завершении курса</StaggerItem>
          </StaggerContainer>
        </div>

          {/* Additional Features */}
          <div className="bg-[#F0F0F0] p-6 rounded-[16px]">
            <h3 className="text-[18px] font-medium mb-4">Дополнительные возможности</h3>
            <StaggerContainer className="space-y-2 text-[16px] text-gray-700">
              <StaggerItem>• Смена специализации за дополнительную плату</StaggerItem>
              <StaggerItem>• Индивидуальные консультации с экспертами</StaggerItem>
              <StaggerItem>• Помощь в трудоустройстве после защиты проекта</StaggerItem>
              <StaggerItem>• Доступ к записям занятий в течение года</StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Какие предпосылки нужны? */}
      <FadeInWhenVisible>
        <section className="mb-8 sm:mb-10 md:mb-12">
          <div className="mb-6">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Какие предпосылки нужны?
          </h2>
          <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
              Специальных знаний не требуется. Достаточно базового умения работать с компьютером 
              и желания учиться. Мы начинаем с самых основ и постепенно переходим к сложным темам.
            </p>
          </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Какую поддержку я получу? */}
      <FadeInWhenVisible>
        <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Какую поддержку я получу?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Поддержка преподавателя</h3>
              <p>Персональные консультации и разбор домашних заданий</p>
            </div>
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Сообщество</h3>
              <p>Доступ к закрытому чату студентов курса</p>
            </div>
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Материалы</h3>
              <p>Презентации, код и дополнительные ресурсы</p>
            </div>
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Практика</h3>
              <p>Реальные проекты и код-ревью</p>
            </div>
          </div>
        </section>
          </FadeInWhenVisible>

        {/* Познакомьтесь с инструктором */}
        {/* <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Познакомьтесь с инструктором
          </h2>
          <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 sm:mb-0 sm:mr-6"></div>
            <div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium mb-3">Александр Петров</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
                Senior Python разработчик с 8-летним опытом работы. Участник open-source проектов,
                автор технических статей и спикер на IT-конференциях. Преподает Python более 5 лет.
              </p>
            </div>
          </div>
        </section>
          </FadeInWhenVisible>

        {/* Отзывы студентов */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-8 sm:mb-10"
            style={{ fontFamily: 'BOWLER' }}
          >
            Отзывы студентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] text-gray-700 mb-6 leading-relaxed">
                "Профессионал своего дела. Хорошо и грамотно объясняет. Легко найти общий язык. После его объяснений все четко и ясно разложено в голове)"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-[15px] sm:text-[16px] font-medium text-gray-900">Андрей</p>
                <p className="text-[14px] text-gray-500">21 ноября</p>
              </div>
            </div>

            <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] text-gray-700 mb-6 leading-relaxed">
                "Отличный профессионал своего дела, доступно объясняет, для меня все максимально понятно, надеюсь дальше больше!)"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-[15px] sm:text-[16px] font-medium text-gray-900">JET скупка</p>
                <p className="text-[14px] text-gray-500">21 ноября</p>
              </div>
            </div>

            <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] text-gray-700 mb-6 leading-relaxed">
                "Занимаемся уже 2 недели, все нравится. Объясняет очень подробно, занятия интересные и продуктивные"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-[15px] sm:text-[16px] font-medium text-gray-900">Владислав</p>
                <p className="text-[14px] text-gray-500">16 ноября</p>
              </div>
            </div>

            <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] text-gray-700 mb-6 leading-relaxed">
                "Хороший преподаватель, провели занятие с ним, помог заполнить пробелы и объяснить много ньюансов, которые не понимала"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-[15px] sm:text-[16px] font-medium text-gray-900">Анастасия</p>
                <p className="text-[14px] text-gray-500">16 октября</p>
              </div>
            </div>
          </div>
        </section>
          </FadeInWhenVisible>

        {/* FAQ */}
        <FadeInWhenVisible>
          <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Могу ли я учиться в своем темпе?</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
                Да, все материалы курса доступны 24/7, и вы можете изучать их в удобном для вас темпе.
                Однако мы рекомендуем придерживаться графика для лучшего усвоения материала.
              </p>
            </div>
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-3">Что если я пропущу занятие?</h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-gray-700">
                Все занятия записываются, и вы всегда можете пересмотреть их в удобное время.
                Также вы можете задать вопросы в чате курса или на следующем занятии.
              </p>
            </div>
          </div>
        </section>
        </FadeInWhenVisible>

      {/* Call to Action */}
      <FadeInWhenVisible>
        <div className="mt-8 sm:mt-10 md:mt-12">
          <ApplicationFormBlock title="ЗАПИСАТЬСЯ НА КУРС PYTHON" />
        </div>
      </FadeInWhenVisible>
      </div>
    </main>
  );
}

export default PythonCoursePage;
