'use client'

import Image from 'next/image'
import Link from 'next/link'

const TestingBlock = () => {
  return (
    <section id="testing-block" className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-content mx-auto relative">
        {/* Python логотип - самый большой */}
        <div className="absolute top-[10px] sm:top-[20px] md:top-[30px] lg:top-[40px] right-[10px] sm:right-[20px] md:right-[30px] lg:right-[40px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/python.png"
            alt="Python"
            width={200}
            height={200}
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"
          />
        </div>

        {/* JS и таймер */}
        <div className="absolute top-[20px] sm:top-[30px] md:top-[40px] lg:top-[50px] left-[10px] sm:left-[20px] md:left-[30px] lg:left-[40px] flex gap-2 md:gap-4 -rotate-[15deg]">
          <div className="transform hover:rotate-[15deg] transition-all duration-300">
            <Image
              src="/main/language-icon/js.png"
              alt="JavaScript"
              width={100}
              height={100}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
        </div>

        {/* Golang логотип - средний размер */}
        <div className="absolute bottom-[50px] sm:bottom-[70px] md:bottom-[90px] lg:bottom-[110px] left-[40px] sm:left-[60px] md:left-[80px] lg:left-[100px] rotate-[15deg] transform hover:rotate-[30deg] transition-all duration-300">
          <Image
            src="/main/language-icon/go.png"
            alt="Golang"
            width={140}
            height={140}
            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px]"
          />
        </div>

        {/* C# логотип - маленький размер */}
        <div className="absolute bottom-[150px] sm:bottom-[170px] md:bottom-[190px] lg:bottom-[210px] right-[10px] sm:right-[20px] md:right-[30px] lg:right-[40px] -rotate-[10deg] transform hover:rotate-[15deg] transition-all duration-300">
          <Image
            src="/main/language-icon/csharp.png"
            alt="C#"
            width={100}
            height={100}
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
          />
        </div>

        <div className="flex flex-col items-center pt-[150px] sm:pt-[200px] md:pt-[250px] lg:pt-[300px] pb-[150px] sm:pb-[200px] md:pb-[250px] lg:pb-[300px]">
          <h1 
            className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-normal text-center tracking-banner mix-blend-difference"
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
            className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-normal text-center tracking-banner mb-6 sm:mb-8 md:mb-10 lg:mb-[36px] mix-blend-difference"
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
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal mix-blend-difference">
              Пройди тестирование и поймешь,
            </p>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal mix-blend-difference">
              какая профессия тебе подходит.
            </p>
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-normal mix-blend-difference">
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