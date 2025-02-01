 import Image from 'next/image'

export const DiscountBlock = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative w-full h-[600px] md:h-[600px] flex flex-col md:flex-row overflow-hidden">
          {/* Left side with image */}
          <div 
            className="relative w-full md:w-2/6 h-[300px] md:h-auto bg-cover bg-center rounded-t-[18px] md:rounded-[18px]" 
            style={{ 
              backgroundImage: 'url(/landing/secong/men-with-notebook.png)'
            }}
          />

          {/* Right side with content */}
          <div className="relative w-full md:w-4/6 flex items-center bg-[#0A0A2C] md:bg-transparent rounded-b-[18px] md:rounded-none">
            <Image
              src="/landing/secong/gradient-1.png"
              alt="Background gradient"
              fill
              className="hidden md:block object-cover rounded-[18px]"
              priority
            />
            
            <div className="relative z-10 w-full px-6 md:px-16 py-8 md:py-0">
              <h2 
                className="text-white text-center md:text-left"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: 'clamp(40px, 5vw, 70px)',
                  lineHeight: '1.2',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  letterSpacing: '0.02em'
                }}
              >
                ОТКРЫТ<br />
                НАБОР<br />
                НА<br />
                ЛЬГОТНОЕ<br />
                ОБУЧЕНИЕ
              </h2>

              <div className="flex flex-col items-center md:items-start gap-4 mt-6">
                <div className="bg-[#2563EB]/20 text-white px-8 py-4 rounded-full text-base md:text-lg text-center md:text-left">
                  -55% от стоимости стандартного обучения
                </div>

                <button className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-base md:text-lg font-medium">
                  Оставить заявку
                </button>
              </div>

              {/* Python text on the right */}
              <div 
                className="hidden md:flex absolute right-8 flex-col justify-between"
                style={{
                  width: '58px',
                  height: '492px',
                  fontFamily: 'BOWLER',
                  fontSize: '70px',
                  lineHeight: '82px',
                  fontWeight: '400',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                {'PYTHON'.split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="text-center"
                    style={{
                      color: '#000000',
                      WebkitTextStroke: '1px #FFFFFF',
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
