// app/layout.tsx
import { MainLayout } from '@/components/layout/main-layout';

export const metadata = {
  title: "Технолиум - онлайн университет",
  description: "Описание по умолчанию для SEO",
  openGraph: {
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
