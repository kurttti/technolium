'use client';

import { SessionProvider } from 'next-auth/react';
import { Providers } from '@/components/layout/providers';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Providers>
        {children}
      </Providers>
    </SessionProvider>
  );
}
