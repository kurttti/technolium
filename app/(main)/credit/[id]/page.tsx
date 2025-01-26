import { notFound } from 'next/navigation';

interface CreditPageProps {
  params: {
    id: string;
  };
}

export default async function CreditPage({ params }: CreditPageProps) {
  // В реальном приложении здесь будет запрос к базе данных
  // для получения данных по ID
  
  // Временная заглушка для демонстрации
  if (!params.id) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Заявка на кредит или рассрочку</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p>ID заявки: {params.id}</p>
        {/* Здесь будет отображение данных заявки */}
      </div>
    </div>
  );
}
