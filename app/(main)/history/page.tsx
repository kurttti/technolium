'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const founderCards = [
  {
    name: 'БАЛОЯН\nНАЗАР',
    role: 'Senior Python Developer',
    image: '/main/nazar.png',
    achievements: [
      'Ведущий преподаватель и основатель Университета Технолиум',
      'Более 6 лет в коммерческой разработке',
      'Более 3х лет в обучении и разработке',
      'Степень магистра в области математики и computer science'
    ]
  },
  {
    name: 'БАЛОЯН\nАРСЕНИЙ',
    role: 'Business Analyst',
    image: '/main/arseniy.png',
    achievements: [
      'Призер олимпиады «Я профессионал» по направлению «Бизнес-информатика»',
      'Получатель гранта президента Российский Федерации',
      'Высшее образование СПбГЭУ, ВШЭ'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function HistoryPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Заголовок с градиентным фоном */}
      <div className="w-full relative">
        <div className="absolute inset-0">
          <Image
            src="/main/gradient-1.jpg"
            alt="Градиентный фон"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 py-16 sm:py-24 md:py-32 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-white font-bold text-center tracking-wider"
            style={{ fontFamily: 'BOWLER' }}
          >
            О НАС
          </motion.h1>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {founderCards.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              className="relative bg-[#0A0A0A] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-4 sm:p-6 md:p-8 overflow-hidden"
            >
              {/* Градиентный фон для карточки */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A3A] opacity-50" />
              
              <div className="relative z-10">
                {/* Центрированный блок */}
                <div className="flex flex-col items-center text-center">
                  {/* Фото */}
                  <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] relative rounded-full overflow-hidden mb-4">
                    <Image
                      src={founder.image}
                      alt={founder.name.replace('\n', ' ')}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Роль */}
                  <div className="inline-block px-3 sm:px-4 py-1 bg-white rounded-full text-black text-xs sm:text-sm mb-3 sm:mb-4">
                    {founder.role}
                  </div>

                  {/* Имя */}
                  <h2 
                    className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-gray-400 mb-4 sm:mb-6 whitespace-pre-line"
                    style={{ fontFamily: 'BOWLER' }}
                  >
                    {founder.name}
                  </h2>
                </div>

                {/* Достижения (выравнивание по левому краю) */}
                <ul className="space-y-3 sm:space-y-4">
                  {founder.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-white">
                      <span className="text-gray-400 shrink-0">—</span>
                      <span className="text-left text-sm sm:text-base md:text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* История */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16 prose prose-sm sm:prose-base md:prose-lg max-w-none"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Становление Университета Технолиум</h2>
          <p className="text-base sm:text-lg md:text-xl">
            Это история о том, как разные таланты и подходы к жизни могут привести к успешному сотрудничеству, 
            если за действиями стоит искреннее желание развиваться и учиться друг у друга.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Началось все с мечты, которая была достигнута за счет 100 потов. Когда Назар был школьником, 
            взял как подработку разработку сайта на html и css. Как и у всех, получалось криво, но ему нравилось 
            и он пошел учиться на специальность «Математика и компьютерные науки» и параллельно изучал Java, 
            на стажировке делал проекты именно по Java, но быстро понял, что хочет динамики и простоты. 
            Так перешел на Python. Само образование не сильно помогло в заработке, рынок труда был жесток, 
            а его знания не приносили желаемых результатов.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Время от времени жил на сухарях и воде, поэтому стал искать стажировки. Первая улыбнувшаяся удача - 
            отбор в СимбирСофт, прошел не без труда, но ему удалось за все лето подкопить опыт на практике в этой компании. 
            Взяли на работу не сразу, пришлось побегать по собеседованиям, в результате попал на Python разработчика 
            по должности Junior. Со временем проекты давались легче, сложные работы захватывали интерес, мог сидеть днями 
            и ночами, чтобы ни единой ошибки и все по срокам сдать заказчику.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Назар говорит: "Арсений мне напоминает, что я технарь до мозга костей. Кстати Сеня тоже разработчик, 
            но пошел на бизнес-аналитика. Он более предприимчивый и коммуникабельный. Мы хоть и братья, но очень разные, 
            он больше про бизнес-процессы, я же люблю задачи, где нужно копать вглубь: оптимизация запросов, настройка 
            мониторинга через Grafana, интеграция аутентификации."
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Арсений в свое время выбрал экономику и управление в СПбГЭУ, а также ВШЭ. Ему нравилось анализировать данные, 
            строить бизнес-модели, но ближе к выпуску осознал, что без технической базы в IT не выжить. Параллельно начал 
            карьеру: сначала как системный аналитик, потом перешел в управление проектами.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Чтобы монетизировать знания, пришла идея выставлять объявление на Авито, чтобы зарабатывать, искали заказчиков 
            самостоятельно. Арсений много изучал продвижение и поиск самих заказов. Делали чат-боты, далее уже на сайты перешли.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Арсений делится: "Мне интересно познавать все новое, у нас разные взгляды с Назаром, но вместе мы отличная команда. 
            Был момент, когда заказчик попросился к нам в ученики. Мы тогда посмеялись, думали, что он шутит. Так появилась идея 
            создать свою методику обучения, чтобы она была простой и легкой в освоении."
          </p>
        </motion.div>

        {/* Наши ученики */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Наши ученики</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Изначально, взяли фокус-группу из 12 студентов, которых провели экстерном через обучение. 
            Все ребята дошли до конца и получили свои первые работы. Это было непросто: за 2 месяца пролететь программу 
            7 месяцев. Сейчас уже учится порядка 72 студентов. Планируется единовременно учить 500-600 человек.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Наш университет — не про лекции в Zoom, а про живое общение. Кураторы — senior-разработчики и аналитики из топовых 
            компаний — проводят код-ревью, разбирают реальные кейсы, помогают с трудоустройством. Мы сделали ставку на два 
            языка — Python и Go. Например, на курсе по Python студенты сразу погружаются в разработку Telegram-ботов: от простой 
            автоматизации до интеграции с платежными системами и API. Лучшие проекты попадают в нашу биржу заказов — 
            их покупают стартапы или малый бизнес.
          </p>
        </motion.div>

        {/* О будущем */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Немного о будущем университета</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Мы не хотим конкурировать за звание самого огромного университета на рынке, нет цели взлетать в космос и становится 
            одной из самых громких школ на рынке. Нас интересует сделать ламповое место с упором на качество обучения.
            Также есть запросы от компаний, для которых Назар и Арсений выполняли проекты. Поэтому для студентов будет помощь 
            в трудоустройстве и рекомендации от наших преподавателей.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Сейчас весь фокус внимания на главную цель - это 5000-10000 студентов, которым мы поможем получить достойный заработок и новую жизнь.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 