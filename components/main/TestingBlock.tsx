'use client'

import Image from 'next/image'
import Link from 'next/link'

const TestingBlock = () => {
  return (
    <section className="w-full bg-white flex items-center justify-center px-4">
      <div className="max-w-content w-full relative">
        {/* JS и таймер как отдельные блоки */}
        <div className="absolute left-20 top-20 flex gap-4 rotate-[-15deg]">
          <div className="bg-black text-white rounded-3xl p-8 transform transition-transform hover:rotate-6 hover:scale-110">
            <span className="text-5xl">JS</span>
          </div>
          <div className="bg-black text-white rounded-3xl p-8 transform transition-transform hover:rotate-6 hover:scale-110">
            <span className="text-6xl font-bold">5'</span>
          </div>
        </div>

        {/* Python логотип */}
        <div className="absolute right-20 top-0 rotate-12">
          <div className="bg-black rounded-3xl p-8 transform transition-transform hover:rotate-12 hover:scale-110">
            <Image
              src="/main/language-icon/python.svg"
              alt="Python"
              width={120}
              height={120}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* C# логотип */}
        <div className="absolute right-20 bottom-20 rotate-[-10deg]">
          <div className="bg-black rounded-3xl p-8 transform transition-transform hover:rotate-12 hover:scale-110">
            <Image
              src="/main/language-icon/csharp.svg"
              alt="C#"
              width={140}
              height={140}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Golang логотип */}
        <div className="absolute right-96 bottom-40 rotate-[15deg]">
          <div className="bg-black rounded-3xl p-8 transform transition-transform hover:rotate-12 hover:scale-110">
            <Image
              src="/main/language-icon/go.svg"
              alt="Golang"
              width={120}
              height={120}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Центральный контент */}
        <div className="flex flex-col items-center text-center">
          <h1 
            className="text-h1 leading-h1 font-h1 mb-4 tracking-banner"
            style={{ fontFamily: 'BOWLER' }}
          >
            НАЧНИ НОВУЮ ПРОФЕССИЮ С НАМИ
          </h1>
          
          <div className="space-y-1 mb-8">
            <p className="text-base leading-body font-text">
              Пройди тестирование и поймешь,
            </p>
            <p className="text-base leading-body font-text">
              какая профессия тебе подходит.
            </p>
            <p className="text-base leading-body font-text">
              Время прохождения - 5 минут
            </p>
          </div>

          <Link 
            href="/testing"
            className="bg-[#2B076E] text-white px-16 py-4 rounded-full text-xl hover:bg-[#2B076E]/90 transition-colors"
          >
            Пройти тестирование
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestingBlock 