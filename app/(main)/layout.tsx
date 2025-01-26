import { NavBar } from '@/components/nav-bar';
import { CallWidget } from '@/components/call-widget';
import { ScrollManager } from '@/components/scroll-manager';
import { PageTransitionProvider } from '@/contexts/page-transition-context';
import { Providers } from '@/components/providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <PageTransitionProvider>
        <ScrollManager />
        <main>
          <Providers>{children}</Providers>
        </main>
      </PageTransitionProvider>
    </>
  );
}
