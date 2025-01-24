import { LeadForm } from '@/components/lead-form'

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gray-50 pt-[var(--header-height)]">
      <div className="h-full w-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Заявка на льготное обучение</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Оставьте заявку, и мы свяжемся с вами для обсуждения деталей обучения
          </p>
        </div>
        <div className="w-full max-w-lg">
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
