import Link from "next/link"
import { motion } from "framer-motion"

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

const item = {
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

export function Specialties() {
  const specialties = [
    {
      id: "machine-learning",
      title: "Нейросети",
      description:
        "Раздел искусственного интеллекта, занимающийся разработкой алгоритмов для обучения компьютеров и предсказания на основе данных.",
      color: "bg-[#1E4FCD]",
      textColor: "text-white",
    },
    {
      id: "software-testing",
      title: "Автоматизация тестирования ПО",
      description: "Заключается в использовании специальных программных решений для выполнения тестов",
      color: "bg-white",
      textColor: "text-[#1E4FCD]",
    },
    {
      id: "information-security",
      title: "Информационная безопасность ЭВМ",
      description: "Защита компьютерных систем, сетей, программ и данных от киберугроз",
      color: "bg-white",
      textColor: "text-[#1E4FCD]",
    },
    {
      id: "web-development",
      title: "Производство серверных веб-приложений",
      description:
        "Включает создание серверной части веб-приложений, работу с базами данных и разработку бизнес-логики.",
      color: "bg-[#1E4FCD]",
      textColor: "text-white",
    },
  ]

  return (
    <section className="w-full">
      <motion.div 
        className="bg-[#1E4FCD] py-6 mb-8 w-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold text-center">47 льготных мест</h2>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.h3 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Специалитеты по льготе
        </motion.h3>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {specialties.map((specialty) => (
            <motion.div key={specialty.id} variants={item}>
              <Link
                href={`/specialties/${specialty.id}`}
                className={`${specialty.color} p-6 block transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <h4 className={`text-2xl font-bold mb-4 ${specialty.textColor}`}>{specialty.title}</h4>
                <p className={`mb-8 ${specialty.textColor}`}>{specialty.description}</p>
                <span
                  className={`inline-block border ${specialty.textColor} border-current px-6 py-2 hover:bg-opacity-10 hover:bg-white transition-all duration-300 ease-in-out`}
                >
                  Подробнее
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
