'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import AdminLinkGenerator from '@/components/AdminLinkGenerator';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { AdminHeader } from '@/components/admin/header';

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (!session?.user?.isAdmin) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-1 container max-w-screen-2xl mx-auto px-4 py-6 md:py-8">
        <div className="space-y-6">
          <div className="p-4 sm:p-6 md:p-8 bg-card rounded-lg border shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Генерация ссылок</h2>
            <AdminLinkGenerator />
          </div>
        </div>
      </main>
    </div>
  );
}
