'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'О нас', href: '/history' },
  { name: 'Профессии', href: '#profession-block' },
  { name: 'Формат обучения', href: '#education-format-block' },
  { name: 'Тарифы', href: '#tariff-block' },
  { name: 'Тестирование', href: '#testing-block' },
  { name: 'Новости', href: '/news' },
  { name: 'Контакты', href: '#footer' },
];

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathname !== '/') {
        router.push(`/${href}`);
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black"
    >
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
          
          {/* Десктопное меню */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={clsx(
                  'inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'text-black border-b-2 border-black'
                    : 'text-black/70 hover:text-black hover:border-b-2 hover:border-black/30'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-black focus:outline-none"
          >
            <span className="sr-only">Открыть меню</span>
            <div className="w-6 h-[1.15rem] flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-black"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={clsx(
                    'block px-3 py-2 text-base font-medium rounded-md transition-all duration-200',
                    pathname === item.href
                      ? 'text-black bg-black/5'
                      : 'text-black/70 hover:text-black hover:bg-black/5'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 