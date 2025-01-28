'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
              <p className="text-gray-700 mb-4">
                Настоящая политика конфиденциальности описывает, как Технолиум собирает, использует и защищает персональную информацию, которую вы предоставляете при использовании нашего веб-сайта и услуг.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Сбор информации</h2>
              <p className="text-gray-700 mb-4">
                Мы собираем следующие типы информации:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Имя и контактная информация (email, телефон)</li>
                <li>Информация о предпочтениях в обучении</li>
                <li>Результаты тестирований и опросов</li>
                <li>Техническая информация о посещениях сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Использование информации</h2>
              <p className="text-gray-700 mb-4">
                Собранная информация используется для:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Предоставления образовательных услуг</li>
                <li>Улучшения качества обслуживания</li>
                <li>Персонализации обучающего опыта</li>
                <li>Коммуникации по вопросам обучения</li>
                <li>Анализа и улучшения наших услуг</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Защита информации</h2>
              <p className="text-gray-700 mb-4">
                Мы применяем современные технические и организационные меры для защиты вашей персональной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-gray-700 mb-4">
                Мы не продаем и не передаем вашу персональную информацию третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Когда это необходимо для предоставления услуг</li>
                <li>При наличии вашего явного согласия</li>
                <li>Если это требуется по закону</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Ваши права</h2>
              <p className="text-gray-700 mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Получить доступ к вашим персональным данным</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Файлы cookie</h2>
              <p className="text-gray-700 mb-4">
                Мы используем файлы cookie для улучшения работы сайта и предоставления персонализированного опыта. Вы можете отключить использование cookie в настройках вашего браузера.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Изменения в политике конфиденциальности</h2>
              <p className="text-gray-700 mb-4">
                Мы оставляем за собой право вносить изменения в данную политику конфиденциальности. Все изменения будут опубликованы на этой странице с указанием даты последнего обновления.
              </p>
            </section>

            <div className="mt-8 text-gray-600 text-sm">
              Последнее обновление: 28 января 2025 года
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
