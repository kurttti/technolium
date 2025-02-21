'use client'

import { motion } from 'framer-motion'

const PythonCoursePage = () => {
  return (
    <div className="w-full">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-section-margin mt-[60px] sm:mt-[80px] md:mt-[100px]">
        {/* Название курса и слоган */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight lg:leading-h1 font-h1 mb-4 tracking-banner text-center uppercase"
          style={{ fontFamily: 'BOWLER' }}
        >
          PYTHON ДЛЯ НАЧИНАЮЩИХ: ОТ
          ОСНОВ К ПРОФЕССИОНАЛЬНОЙ
          РАЗРАБОТКЕ
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal text-gray-600 mb-[70px] text-center"
        >
          Освойте самый популярный язык программирования с нуля
        </motion.p>

        {/* Что это за курс? */}
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

        {/* Для кого этот курс? */}
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
          <ul className="list-none sm:list-disc list-inside mt-4 space-y-3 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700">
            <li>Начинающих программистов без опыта</li>
            <li>Тех, кто хочет сменить профессию на IT</li>
            <li>Студентов технических специальностей</li>
            <li>Специалистов из других областей, желающих автоматизировать свою работу</li>
          </ul>
        </section>

        {/* Что я узнаю? */}
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

        {/* Как устроен курс? */}
        <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Как устроен курс?
          </h2>
          <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
            <div className="mb-6">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium mb-4">Модули курса:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium mr-2">Модуль 1:</span>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Введение в Python и основы программирования</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium mr-2">Модуль 2:</span>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Структуры данных и функции</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium mr-2">Модуль 3:</span>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Объектно-ориентированное программирование</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium mr-2">Модуль 4:</span>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Работа с файлами и базами данных</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">Формат:</p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Онлайн, доступ 24/7</p>
              </div>
              <div>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">Продолжительность:</p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">12 недель, 6-8 часов в неделю</p>
              </div>
            </div>
          </div>
        </section>

        {/* Какие предпосылки нужны? */}
        <section className="mb-8 sm:mb-10 md:mb-12">
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
        </section>

        {/* Какую поддержку я получу? */}
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

        {/* Познакомьтесь с инструктором */}
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

        {/* Отзывы студентов */}
        <section className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-none font-normal mb-6"
            style={{ fontFamily: 'BOWLER' }}
          >
            Отзывы студентов
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 mb-4">
                "Отличный курс! За 3 месяца я освоил Python с нуля и уже создал свой первый проект.
                Преподаватель объясняет сложные темы простым языком."
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium">— Михаил, выпускник 2024 года</p>
            </div>
            <div className="bg-[#F8F8F8] p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px]">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 mb-4">
                "Много практики и реальных примеров. После курса я смог найти работу junior-разработчиком.
                Спасибо за качественное обучение!"
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium">— Елена, выпускница 2024 года</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-cta text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-[12px] sm:rounded-btn text-[16px] sm:text-[18px] font-medium hover:bg-opacity-90 transition-colors"
          >
            Записаться на курс
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default PythonCoursePage
