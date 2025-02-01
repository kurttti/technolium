const FooterBlock = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1200px] mx-auto rounded-[32px] bg-[#0A0A2C] overflow-hidden">
        <div className="py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Контактная информация */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl tracking-wider" style={{ fontFamily: 'BOWLER' }}>КОНТАКТЫ</h4>
              <div className="space-y-3 text-white/80">
                <p>Телефон: +7 (999) 999-99-99</p>
                <p>Email: info@python.school</p>
                <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            {/* Навигация */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl tracking-wider" style={{ fontFamily: 'BOWLER' }}>НАВИГАЦИЯ</h4>
              <div className="space-y-3">
                <a href="#" className="block text-white/80 hover:text-white transition-colors">О нас</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Программы обучения</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="space-y-4">
              <h4 className="text-white text-2xl tracking-wider" style={{ fontFamily: 'BOWLER' }}>МЫ В СОЦСЕТЯХ</h4>
              <div className="space-y-3">
                <a href="#" className="block text-white/80 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">VK</a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            <p> 2024 Python School. Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBlock
