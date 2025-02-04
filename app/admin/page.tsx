'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AdminLinkGenerator } from '@/components/admin/AdminLinkGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LogOut } from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Панель администратора</h1>
            <p className="text-muted-foreground mt-1">
              Управление ссылками и настройками системы
            </p>
          </div>
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </Button>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Генерация ссылок</CardTitle>
                  <CardDescription>
                    Создание ссылок для оформления кредита или рассрочки
                  </CardDescription>
                </div>
                {/* <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/links" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    К списку ссылок
                  </Link>
                </Button> */}
              </div>
            </CardHeader>
            <CardContent>
              <AdminLinkGenerator />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
