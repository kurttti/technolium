"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ApplicationButton } from "@/components/features/application-button"
import { Users, BookOpen, MessageCircle, GraduationCap, Calendar, Target, CheckCircle, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Contacts } from "@/components/features/contacts"
import { Footer } from "@/components/layout/footer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function CurrentActivityPage() {
  const router = useRouter()
  const features = [
    {
      icon: Users,
      title: "Сообщество выпускников",
      description: "Регулярные встречи и нетворкинг с выпускниками программы",
    },
    {
      icon: MessageCircle,
      title: "Постоянная коммуникация",
      description: "Активные чаты и онлайн-встречи для обмена опытом",
    },
    {
      icon: GraduationCap,
      title: "Поддержка преподавателя",
      description: "Персональный наставник на первые месяцы работы",
    },
  ]

  const activities = [
    {
      title: "Регулярные встречи выпускников",
      items: [
        "Ежеквартальные офлайн-встречи",
        "Обмен опытом и успешными кейсами",
        "Расширение профессиональных связей",
        "Неформальное общение в сообществе",
      ],
    },
    {
      title: "Онлайн-коммуникация",
      items: [
        "Тематические чаты по направлениям",
        "Еженедельные видеозвонки",
        "Обсуждение актуальных трендов",
        "Взаимопомощь в решении рабочих задач",
      ],
    },
    {
      title: "Менторская поддержка",
      items: [
        "Помощь в адаптации на новом месте",
        "Консультации по рабочим вопросам",
        "Разбор сложных ситуаций",
        "Рекомендации по развитию навыков",
      ],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Быстрая адаптация",
      description: "Помощь в освоении на новом рабочем месте",
    },
    {
      icon: Users,
      title: "Профессиональное сообщество",
      description: "Доступ к сети профессиональных контактов",
    },
    {
      icon: Calendar,
      title: "Регулярные мероприятия",
      description: "Встречи, воркшопы и неформальные события",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1E4FCD] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center text-white/80 hover:text-white transition-colors py-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </motion.button>
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <motion.div 
              className="p-3 bg-white/10 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">Действующая деятельность</h1>
          </motion.div>
          <motion.p 
            className="text-xl max-w-3xl pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Поддержка и развитие выпускников после трудоустройства
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Основные направления поддержки
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 shadow-lg"
                  variants={itemVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#1E4FCD] rounded-sm flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <BookOpen className="w-8 h-8 text-[#1E4FCD]" />
            </motion.div>
            <h2 className="text-3xl font-bold">Программа поддержки</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {activities.map((activity, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg"
                variants={itemVariant}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4">{activity.title}</h3>
                <motion.ul 
                  className="space-y-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {activity.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={itemVariant}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#1E4FCD] mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Преимущества программы
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  variants={itemVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-[#1E4FCD] rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            className="bg-[#1E4FCD] text-white p-8 text-center rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Присоединяйтесь к нашему сообществу
            </motion.h2>
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Станьте частью активного IT-сообщества и получите поддержку в развитии карьеры
            </motion.p>
            <ApplicationButton variant="secondary" />
          </motion.div>
        </div>
      </section>

      <main>
      </main>
      <Contacts />
      <Footer />
    </div>
  )
}
