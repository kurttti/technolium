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
    <main className="min-h-screen">
      <header className="text-h6 leading-h6 font-h6">
        // ... header content
      </header>
      <Providers>{children}</Providers>
      <footer className="text-base leading-body font-text">
        // ... footer content
      </footer>
    </main>
  );
}
