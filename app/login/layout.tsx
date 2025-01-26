'use client';

import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { Providers } from '@/components/providers';

export default function LoginLayout({
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
