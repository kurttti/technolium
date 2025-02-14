'use client'

const EducationFormatBlock = () => {
  const formats = [
    {
      number: '01',
      title: 'МАТЕРИАЛЫ',
      points: [
        'Короткие записи простых и понятных лекций от лучших преподавателей на рынке СНГ',
        'Продолжительность каждой, отдельно взятой лекции - до 15 минут'
      ]
    },
    {
      number: '02',
      title: 'ЛЕКЦИИ',
      points: [
        'Живые встречи с преподавателем, в одном потоке до 20 человек',
        'Выделенное время под "вопрос-ответ" и знакомство с другими студентами'
      ]
    },
    {
      number: '03',
      title: 'РЕПЕТИТОРЫ',
      points: [
        'Дополнительные занятия 1 на 1 с ведущими преподавателями "Технолиум"',
        'Формат встречи определяется запросом студента'
      ]
    },
    {
      number: '04',
      title: 'ПРАКТИКА',
      points: [
        'Обсуждение коммерческой составляющей профессии',
        'Репетитор ведёт трудовую деятельность в IT на момент преподавания'
      ]
    }
  ]

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-content w-full">
        <div className="flex flex-col items-center">
          <h1 
            className="text-h1 leading-h1 font-h1 text-center mb-section-margin tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            ФОРМАТ ОБУЧЕНИЯ
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
            {formats.map((format) => (
              <div 
                key={format.number}
                className="bg-[#F8F8F8] rounded-card p-card-padding"
              >
                <h2 className="text-h4 leading-h4 font-h4 mb-6">
                  {format.number} {format.title}
                </h2>
                <div className="space-y-4">
                  {format.points.map((point, index) => (
                    <p key={index} className="text-base leading-body font-text">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-dark text-white rounded-card p-card-padding w-full">
            <h2 
              className="text-h4 leading-h4 font-h4 text-center mb-4"
              style={{ fontFamily: 'BOWLER' }}
            >
              КОММЕРЧЕСКАЯ ДЕЯТЕЛЬНОТЬ
            </h2>
            <p className="text-center text-base leading-body font-text">
              Выполнение тестовых и практических заданий<br />
              от работодателей с третьего месяца
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationFormatBlock 