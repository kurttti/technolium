'use client'

import Image from 'next/image'
import Link from 'next/link'

const TestingBlock = () => {
  return (
    <section className="w-full">
      <div className="max-w-content mx-auto relative">
        {/* Python логотип - самый большой */}
        <div className="absolute top-[50px] right-[50px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/python.png"
            alt="Python"
            width={170}
            height={170}
            className="w-[120px] h-[120px] md:w-[170px] md:h-[170px]"
          />
        </div>

        {/* JS и таймер */}
        <div className="absolute top-[80px] left-[50px] flex gap-2 md:gap-4 -rotate-[15deg]">
          <div className="transform hover:rotate-[15deg] transition-all duration-300">
            <Image
              src="/main/language-icon/js.png"
              alt="JavaScript"
              width={85}
              height={85}
              className="w-[60px] h-[60px] md:w-[85px] md:h-[85px]"
            />
          </div>
          {/* <div className="transform hover:rotate-[15deg] transition-all duration-300">
            <span className="text-black text-[24px] md:text-[36px] font-bold">5'</span>
          </div> */}
        </div>

        {/* Golang логотип - средний размер */}
        <div className="absolute bottom-[150px] left-[150px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/go.png"
            alt="Golang"
            width={120}
            height={120}
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
          />
        </div>

        {/* C# логотип - маленький размер */}
        <div className="absolute bottom-[300px] right-[50px] -rotate-[10deg] transform hover:rotate-[15deg] transition-all duration-300">
          <Image
            src="/main/language-icon/csharp.png"
            alt="C#"
            width={85}
            height={85}
            className="w-[60px] h-[60px] md:w-[85px] md:h-[85px]"
          />
        </div>

        <div className="flex flex-col items-center pt-[330px] pb-[380px]">
          <h1 
            className="text-[48px] leading-none font-normal text-center tracking-banner"
            style={{ 
              fontFamily: 'BOWLER',
              background: 'linear-gradient(88.66deg, #666666 0.96%, #000000 104.15%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            НАЧНИ НОВУЮ
          </h1>
          <h1 
            className="text-[48px] leading-none font-normal text-center tracking-banner mb-[36px]"
            style={{ 
              fontFamily: 'BOWLER',
              background: 'linear-gradient(88.66deg, #666666 0.96%, #000000 104.15%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ПРОФЕССИЮ С НАМИ
          </h1>

          <div className="text-center mb-[90px]">
            <p className="text-[30px] leading-normal">
              Пройди тестирование и поймешь,
            </p>
            <p className="text-[30px] leading-normal">
              какая профессия тебе подходит.
            </p>
            <p className="text-[30px] leading-normal">
              Время прохождения - 5 минут
            </p>
          </div>

          <Link 
            href="/testing"
            className="bg-[#2B076E] text-white text-[30px] leading-normal px-[67px] py-[20px] rounded-full hover:bg-[#2B076E]/90 transition-colors"
          >
            Пройти тестирование
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestingBlock 