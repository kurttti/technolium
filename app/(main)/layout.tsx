import { NavBar } from '@/components/layout/nav-bar';
import { CallWidget } from '@/components/widgets/call-widget';
import { ScrollManager } from '@/components/layout/scroll-manager';
import { Providers } from '@/components/layout/providers';
import { PageTransitionProvider } from '@/contexts/page-transition-context';
import { Toaster } from '@/components/ui/toaster';
import { PageAttribute } from '@/components/layout/page-attribute';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageAttribute />
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
