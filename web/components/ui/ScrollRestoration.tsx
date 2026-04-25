'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }
  }, [pathname])

  return null
}