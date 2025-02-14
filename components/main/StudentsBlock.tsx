'use client'

import Image from 'next/image'

const StudentsBlock = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-content w-full px-block-padding-xs md:px-block-padding-md">
        <div className="flex flex-col items-center">
          <h1 
            className="text-h1 leading-h1 font-h1 text-center tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            НАШИ УЧЕНИКИ
          </h1>

          <div className="w-full max-w-content mt-block-spacing-xl">
            <div className="relative w-full aspect-video">
              <Image
                src="/main/naz-response.png"
                alt="Отзывы учеников"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsBlock 