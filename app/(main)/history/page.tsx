'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
        {/* История */}
        <motion.div 
          variants={itemVariants}
          className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Становление Университета Технолиум</h2>
          <p className="text-base sm:text-lg md:text-xl">
            Университет Технолиум начался с идеи создать образовательную платформу, которая объединяет практический подход и качественное обучение в сфере IT. Это история о стремлении делиться знаниями и помогать людям осваивать востребованные профессии через реальные проекты и живое взаимодействие.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Первые шаги были связаны с разработкой чат-ботов и сайтов для небольших заказчиков. Команда искала клиентов через объявления, изучая продвижение и маркетинг. Со временем появилась идея систематизировать накопленный опыт и создать образовательную программу, которая была бы простой, но эффективной. Один из заказчиков однажды выразил желание учиться, что вдохновило команду на запуск полноценного обучения.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Университет формировался вокруг идеи, что обучение должно быть практическим и ориентированным на результат. Вместо традиционных лекций акцент был сделан на реальных кейсах, код-ревью и наставничестве от опытных специалистов. Это позволило создать уникальную среду, где студенты не только изучают теорию, но и сразу применяют знания на практике.
          </p>
        </motion.div>

        {/* Наши ученики */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Наши ученики</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Первые группы студентов состояли из 12 человек, которых провели через интенсивное обучение за два месяца. Все они успешно завершили программу и нашли свои первые рабочие места в IT. Сегодня в университете обучаются около 72 студентов, а в планах — масштабирование до 500–600 человек одновременно.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Обучение в Университете Технолиум строится на живом общении. Кураторы — опытные разработчики и аналитики из ведущих компаний — помогают с код-ревью, разбирают реальные кейсы и поддерживают студентов на пути к трудоустройству. Основной фокус сделан на двух языках программирования: Python и Go. Например, на курсе по Python студенты с первых занятий разрабатывают Telegram-боты, изучая автоматизацию, интеграцию с API и платежными системами. Лучшие студенческие проекты попадают на внутреннюю биржу заказов, где их могут приобрести стартапы или представители малого бизнеса.
          </p>
        </motion.div>

        {/* О будущем */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Немного о будущем университета</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Университет Технолиум не стремится стать крупнейшей образовательной платформой. Главная цель — создать уютное сообщество, где приоритет отдается качеству обучения. В планах — помощь в трудоустройстве через рекомендации и партнерства с компаниями, которые доверяют качеству подготовки студентов.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Основной фокус направлен на обучение 5000–10000 студентов, которым университет поможет освоить востребованные навыки, найти достойную работу и изменить свою жизнь через IT.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
