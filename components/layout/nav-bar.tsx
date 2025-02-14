'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'История Университета', href: '/history' },
  { name: 'Профессии', href: '/professions' },
  { name: 'Формат обучения', href: '/education' },
  { name: 'Тарифы', href: '/pricing' },
  { name: 'Новости', href: '/news' },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Логотип"
                width={62}
                height={62}
                className="h-12 w-14"
              />
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'inline-flex items-center px-1 pt-1 text-sm font-medium',
                  pathname === item.href
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 