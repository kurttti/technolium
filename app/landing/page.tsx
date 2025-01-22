import { LeadForm } from '@/components/lead-form'

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center">
      <div className="w-full max-w-lg mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Начните свой путь сегодня</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Оставьте заявку, и мы свяжемся с вами для обсуждения деталей обучения
          </p>
        </div>
        <LeadForm />
      </div>
    </div>
  )
}
