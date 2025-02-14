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
            className="text-block text-center mb-section-margin font-semibold tracking-banner"
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
                <h2 className="flex gap-2 text-2xl font-semibold mb-6" style={{ fontFamily: 'BOWLER' }}>
                  {format.number} {format.title}
                </h2>
                <div className="space-y-4">
                  {format.points.map((point, index) => (
                    <p key={index} className="flex items-start gap-2 text-quote leading-quote">
                      <span className="text-black">—</span>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-dark text-white rounded-card p-card-padding w-full">
            <h2 
              className="text-center text-2xl mb-4"
              style={{ fontFamily: 'BOWLER' }}
            >
              КОММЕРЧЕСКАЯ ДЕЯТЕЛЬНОТЬ
            </h2>
            <p className="text-center text-quote leading-quote">
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