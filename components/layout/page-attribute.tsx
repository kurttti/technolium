'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PageAttribute() {
  const pathname = usePathname()

  useEffect(() => {
    document.body.setAttribute('data-page', pathname)
    return () => {
      document.body.removeAttribute('data-page')
    }
  }, [pathname])

  return null
}
