import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import AdminLinkGenerator from '@/components/AdminLinkGenerator';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  
  // Check if user is authenticated and is an admin
  if (!session?.user?.email || !session.user.isAdmin) {
    redirect('/');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Панель администратора</h1>
      <AdminLinkGenerator />
    </div>
  );
}
