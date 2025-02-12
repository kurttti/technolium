"use client"

import { createContext, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const PageTransitionContext = createContext({
  isTransitioning: false,
})

export const usePageTransition = () => useContext(PageTransitionContext)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <PageTransitionContext.Provider value={{ isTransitioning: false }}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </PageTransitionContext.Provider>
  )
}
