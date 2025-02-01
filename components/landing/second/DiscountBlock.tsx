 import Image from 'next/image'

export const DiscountBlock = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative w-full h-[600px] flex overflow-hidden">
          {/* Left side with image */}
          <div 
            className="relative w-2/6 bg-cover bg-center rounded-[18px]" 
            style={{ 
              backgroundImage: 'url(/landing/secong/men-with-notebook.png)'
            }}
          />

          {/* Right side with content */}
          <div className="relative w-4/6 flex items-center">
            <Image
              src="/landing/secong/gradient-1.png"
              alt="Background gradient"
              fill
              className="object-cover rounded-[18px]"
              priority
            />
            
            <div className="relative z-10 w-full px-16">
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'BOWLER',
                  fontSize: '70px',
                  lineHeight: '58px',
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

              <div className="flex flex-col items-start gap-4 mt-6">
                <div className="bg-[#2563EB]/20 text-white px-8 py-4 rounded-full text-lg">
                  -55% от стоимости стандартного обучения
                </div>

                <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium">
                  Оставить заявку
                </button>
              </div>

              {/* Python text on the right */}
              <div 
                className="absolute right-8 flex flex-col justify-between"
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
