import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'
import { Providers } from '@/components/layout/providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Providers>{children}</Providers>
    </main>
  );
}
