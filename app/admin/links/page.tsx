'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { LinksList } from '@/components/admin/LinksList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LinksPage() {
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
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Список ссылок</h1>
          <p className="text-muted-foreground mt-1">
            Управление сгенерированными ссылками для кредитов и рассрочек
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin" className="gap-2">
              <Plus className="h-4 w-4" />
              Создать ссылку
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Все ссылки</CardTitle>
          <CardDescription>
            Просмотр и управление всеми сгенерированными ссылками
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LinksList />
        </CardContent>
      </Card>
    </div>
  );
}
