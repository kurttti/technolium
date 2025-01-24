"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const PageTransitionContext = createContext({
  isTransitioning: false,
})

export const usePageTransition = () => useContext(PageTransitionContext)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    setIsFirstMount(false)
  }, [])

  return (
    <PageTransitionContext.Provider value={{ isTransitioning: false }}>
      <div className="min-h-screen flex flex-col">
        <motion.div
          key={pathname}
          className="flex-grow"
          animate={{
            opacity: 1,
            transition: { duration: 0.2, ease: "linear" }
          }}
          style={{
            opacity: isFirstMount ? 1 : 0.8
          }}
        >
          {children}
        </motion.div>
      </div>
    </PageTransitionContext.Provider>
  )
}
