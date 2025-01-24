"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const mobileMenuVariants = {
  closed: { 
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.3
      },
      opacity: {
        duration: 0.2
      }
    }
  },
  open: { 
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.3
      },
      opacity: {
        duration: 0.3
      }
    }
  }
}

const mobileLinkVariants = {
  closed: { 
    opacity: 0,
    x: -10
  },
  open: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

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
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white z-40 w-full shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-[56px] sm:h-[72px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/footerlogo.png"
                alt="Технолиум"
                width={140}
                height={36}
                priority
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {[
              { href: "/", label: "Главная" },
              { href: "/about", label: "О нас" },
              { href: "/directions", label: "Направления" },
              { href: "/news", label: "Новости" },
            ].map(({ href, label }, index) => (
              <motion.div
                key={href}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="relative py-1"
              >
                <Link
                  href={href}
                  className={`inline-flex flex-col items-center text-[#333333] hover:text-gray-600 transition-colors gap-1.5 ${
                    pathname === href ? "text-[#0095FF]" : ""
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="h-[2px] bg-[#0095FF] w-full"
                      layoutId="underline"
                      transition={{ 
                        type: "spring", 
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-[56px] sm:top-[72px] left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.div 
                className="flex flex-col space-y-4 px-6 py-4"
                variants={mobileMenuVariants}
              >
                {[
                  ["Главная", "/"],
                  ["О нас", "/about"],
                  ["Направления", "/directions"],
                  ["Новости", "/news"],
                ].map(([title, url]) => (
                  <motion.div
                    key={url}
                    variants={mobileLinkVariants}
                    className="relative py-1"
                  >
                    <Link
                      href={url}
                      className={`inline-flex flex-col items-center text-lg gap-1.5 ${
                        pathname === url
                          ? "text-[#0095FF]"
                          : "text-[#333333] hover:text-gray-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {title}
                      {pathname === url && (
                        <motion.div
                          className="h-[2px] bg-[#0095FF] w-full"
                          layoutId="underline-mobile"
                          transition={{ 
                            type: "spring", 
                            stiffness: 380,
                            damping: 30
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
