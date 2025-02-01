'use client'

import Image from 'next/image'

const facts = [
  {
    title: 'Ведущий преподаватель',
    subtitle: 'Университета Технолиум'
  },
  {
    title: 'Более 6 лет в коммерческой',
    subtitle: 'разработке'
  },
  {
    title: 'тут какой-то еще факт',
    subtitle: ''
  },
  {
    title: 'Степень магистра в области',
    subtitle: 'математики и computer science'
  }
]

export const TeacherBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Circle */}
          <div className="w-full md:w-[400px] aspect-square bg-black rounded-[31px] flex items-center justify-center p-8">
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)'
              }}
            />
          </div>

          {/* Right side - Info */}
          <div className="flex-1 flex items-center">
            {/* Name and title section */}
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-[32px] md:text-[40px] text-center leading-none font-bold" style={{ fontFamily: 'BOWLER' }}>
                БАЛОЯН НАЗАР
              </h2>
              <div className="bg-[#1E1B4B] text-white px-4 py-2 rounded w-fit mx-auto">
                Senior Python Developer
              </div>
            </div>
          </div>
        </div>

        {/* Facts section - Full width on tablet */}
        <div className="md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {facts.map((fact, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl">—</div>
                <div>
                  <div className="text-base md:text-lg font-medium" style={{ fontFamily: 'IBM Plex Sans KR' }}>
                    {fact.title}
                  </div>
                  {fact.subtitle && (
                    <div className="text-base md:text-lg" style={{ fontFamily: 'IBM Plex Sans KR' }}>
                      {fact.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
