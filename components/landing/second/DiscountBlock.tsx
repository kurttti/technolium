 import Image from 'next/image'

export const DiscountBlock = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative w-full h-[500px] flex overflow-hidden">
          {/* Left side with image */}
          <div 
            className="relative w-1/3 bg-cover bg-center rounded-[18px]" 
            style={{ 
              backgroundImage: 'url(/landing/secong/men-with-notebook.png)'
            }}
          />

          {/* Right side with content */}
          <div className="relative w-2/3 flex items-center">
            <Image
              src="/landing/secong/gradient-1.png"
              alt="Background gradient"
              fill
              className="object-cover"
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

              <div className="bg-[#2563EB]/20 text-white px-8 py-4 rounded-full inline-block mb-8 mt-6 text-lg">
                -55% от стоимости стандартного обучения
              </div>

              <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium">
                Оставить заявку
              </button>
            </div>

            {/* Python text on the right */}
            <div 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 flex flex-col"
              style={{
                fontFamily: 'BOWLER',
                fontSize: '42px',
                fontWeight: '400',
                letterSpacing: '0.1em'
              }}
            >
              {'PYTHON'.split('').map((letter, index) => (
                <span key={index} className="text-center">{letter}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
