"use client"

import { useCallback } from "react"

interface InteractiveButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export function InteractiveButton({ onClick, children, className }: InteractiveButtonProps) {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

