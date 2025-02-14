import '../styles/variables.css'
import '../styles/global.css'
import '../styles/fonts.css'
import { Providers } from '@/components/layout/providers';
import { NavBar } from '@/components/layout/nav-bar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-16">      
        <Providers>{children}</Providers>
      </main>
    </>
  );
}
