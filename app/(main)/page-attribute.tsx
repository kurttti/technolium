// components/layout/page-attribute.tsx
"use client";

import { usePathname } from "next/navigation";

export function PageAttribute() {
  const pathname = usePathname();
  
  // Динамический title для разных страниц
  const getPageTitle = () => {
    if (pathname === "/") {
      return "Технолиум| Официальный сайт";
    }
    return "Технолиум | " + pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  };

  return (
    <>
      <title>{getPageTitle()}</title>
      <meta 
        name="description" 
        content="Официальный сайт университета. Высшее образование, направления подготовки, условия поступления, контакты." 
      />
      <meta property="og:title" content="Ваше Название Вуза - Официальный сайт" />
      <meta property="og:image" content="/logo-og.jpg" />
    </>
  );
}
