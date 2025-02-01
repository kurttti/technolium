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
    <div className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-16">
          {/* Left side - Gradient Circle */}
          <div className="w-[400px] h-[400px] bg-black rounded-[31px] flex items-center justify-center p-8">
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(85.14deg, #594A73 9.35%, #151B4D 91.08%)'
              }}
            />
          </div>

          {/* Right side - Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-[40px] leading-none font-bold" style={{ fontFamily: 'BOWLER' }}>
                БАЛОЯН НАЗАР
              </h2>
              <div className="bg-[#1E1B4B] text-white px-4 py-2 rounded -mt-1">
                Senior Python Developer
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">—</div>
                  <div>
                    <div className="text-lg font-medium" style={{ fontFamily: 'IBM Plex Sans KR' }}>
                      {fact.title}
                    </div>
                    {fact.subtitle && (
                      <div className="text-lg" style={{ fontFamily: 'IBM Plex Sans KR' }}>
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
    </div>
  )
}
