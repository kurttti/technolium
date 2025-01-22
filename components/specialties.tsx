import Link from "next/link"

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
      <div className="bg-[#1E4FCD] py-6 mb-8 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold text-center">47 льготных мест</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h3 className="text-4xl font-bold text-center mb-16">Специалитеты по льготе</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((specialty) => (
            <Link
              href={`/specialties/${specialty.id}`}
              key={specialty.id}
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
          ))}
        </div>
      </div>
    </section>
  )
}

