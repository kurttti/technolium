'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from '@/app/(main)/landing/second/styles.module.css'

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Направления', href: '/directions' },
  { label: 'Формат обучения', href: '/education-format' },
  { label: 'План обучения', href: '/education-plan' },
  { label: 'Новости', href: '/news' },
]

export const NavBarSecond = () => {
  const pathname = usePathname()

  return (
    <nav className="w-full">
      <div className="max-w-[1200px] mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="bg-black/90 backdrop-blur-sm rounded-[11px] h-[70px] w-[70px] flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="bg-black/90 backdrop-blur-sm rounded-[11px] h-[70px] flex items-center px-8">
          <div className="flex items-center gap-[80px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'IBM Plex Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '140%',
                  color: '#FFFFFF'
                }}
                className="transition-colors hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
