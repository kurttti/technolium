'use client'

import Image from 'next/image'
import Link from 'next/link'

const TestingBlock = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto relative">
        {/* Python логотип - самый большой */}
        <div className="absolute top-[20px] sm:top-[30px] md:top-[40px] lg:top-[50px] right-[20px] sm:right-[30px] md:right-[40px] lg:right-[50px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/python.png"
            alt="Python"
            width={170}
            height={170}
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px]"
          />
        </div>

        {/* JS и таймер */}
        <div className="absolute top-[30px] sm:top-[50px] md:top-[65px] lg:top-[80px] left-[20px] sm:left-[30px] md:left-[40px] lg:left-[50px] flex gap-2 md:gap-4 -rotate-[15deg]">
          <div className="transform hover:rotate-[15deg] transition-all duration-300">
            <Image
              src="/main/language-icon/js.png"
              alt="JavaScript"
              width={85}
              height={85}
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px]"
            />
          </div>
          {/* <div className="transform hover:rotate-[15deg] transition-all duration-300">
            <span className="text-black text-[24px] md:text-[36px] font-bold">5'</span>
          </div> */}
        </div>

        {/* Golang логотип - средний размер */}
        <div className="absolute bottom-[100px] sm:bottom-[120px] md:bottom-[135px] lg:bottom-[150px] left-[80px] sm:left-[100px] md:left-[125px] lg:left-[150px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/go.png"
            alt="Golang"
            width={120}
            height={120}
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          />
        </div>

        {/* C# логотип - маленький размер */}
        <div className="absolute bottom-[200px] sm:bottom-[240px] md:bottom-[270px] lg:bottom-[300px] right-[20px] sm:right-[30px] md:right-[40px] lg:right-[50px] -rotate-[10deg] transform hover:rotate-[15deg] transition-all duration-300">
          <Image
            src="/main/language-icon/csharp.png"
            alt="C#"
            width={85}
            height={85}
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px]"
          />
        </div>

        <div className="flex flex-col items-center pt-[200px] sm:pt-[250px] md:pt-[290px] lg:pt-[330px] pb-[200px] sm:pb-[250px] md:pb-[290px] lg:pb-[380px]">
          <h1 
            className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-normal text-center tracking-banner"
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
            className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-normal text-center tracking-banner mb-6 sm:mb-8 md:mb-10 lg:mb-[36px]"
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

          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[90px] px-4">
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
              Пройди тестирование и поймешь,
            </p>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
              какая профессия тебе подходит.
            </p>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal">
              Время прохождения - 5 минут
            </p>
          </div>

          <Link 
            href="/testing"
            className="bg-[#2B076E] text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal px-6 sm:px-8 md:px-12 lg:px-[67px] py-4 sm:py-5 md:py-6 lg:py-[20px] rounded-full hover:bg-[#2B076E]/90 transition-colors"
          >
            Пройти тестирование
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestingBlock 