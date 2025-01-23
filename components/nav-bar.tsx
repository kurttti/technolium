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
    <header className="fixed top-0 left-0 right-0 bg-white z-50 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <nav className="flex items-center justify-between h-[56px] sm:h-[72px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/footerlogo.png"
              alt="Технолиум"
              width={140}
              height={36}
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
        <div
          ref={menuRef}
          className={`fixed top-[56px] sm:top-[72px] left-0 right-0 bg-white shadow-lg transition-[clip-path] duration-300 ease-in-out ${
            isMenuOpen ? "clip-path-slide-in" : "clip-path-slide-out"
          } md:hidden`}
          style={{ 
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <div className={`flex flex-col px-6 py-4 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}>
            {[
              ["Главная", "/"],
              ["О нас", "/about"],
              ["Направления", "/directions"],
              ["Новости", "/news"],
            ].map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className={`py-3 text-lg ${
                  pathname === url
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
