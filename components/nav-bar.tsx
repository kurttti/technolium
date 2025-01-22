"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function NavBar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <nav className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechnoliumLogoCube-CF7adPTdcUn7kfkGQZSYy7xadiPS8p.svg"
              alt="Технолиум"
              width={120}
              height={35}
              className="w-[120px] h-auto"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {[
              { href: "/", label: "Главная" },
              { href: "/about", label: "О нас" },
              { href: "/directions", label: "Направления" },
              { href: "/news", label: "Новости" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[#333333] hover:text-gray-600 transition-colors ${
                  pathname === href ? "text-[#0095FF] font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed left-0 right-0 top-[72px] bg-white border-b border-gray-200 px-4 py-4 z-40"
          >
            <div className="flex flex-col gap-4">
              {[
                { href: "/", label: "Главная" },
                { href: "/about", label: "О нас" },
                { href: "/directions", label: "Направления" },
                { href: "/news", label: "Новости" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-[#333333] hover:text-gray-600 transition-colors ${
                    pathname === href ? "text-[#0095FF] font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

