const FooterBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto rounded-[32px] bg-[#0A0A2C] overflow-hidden">
        <div className="py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Контакты */}
            <div>
              <h3 className="text-2xl text-white mb-8" style={{ fontFamily: 'BOWLER' }}>
                КОНТАКТЫ
              </h3>
              <div className="space-y-6 text-white/80">
                <a 
                  href="https://wa.me/79999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://t.me/+79999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Telegram
                </a>
                <a 
                  href="mailto:info@python.school"
                  className="block hover:text-white transition-colors"
                >
                  Email: info@python.school
                </a>
              </div>
            </div>

            {/* Мы в соцсетях */}
            <div>
              <h3 className="text-2xl text-white mb-8" style={{ fontFamily: 'BOWLER' }}>
                МЫ В СОЦСЕТЯХ
              </h3>
              <div className="space-y-6 text-white/80">
                <a 
                  href="https://t.me/pythonschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Telegram
                </a>
                <a 
                  href="https://vk.com/pythonschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  VK
                </a>
                <a 
                  href="https://youtube.com/@pythonschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-white/60">
            <p>2024 Python School. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBlock
