'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-shadow duration-300 bg-white border-b border-border ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Brand Logo - Serif Font */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Reference Newspaper
            </h1>
          </Link>

          {/* Horizontal Navigation for Categories */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/category/politics" className="text-sm font-medium text-foreground hover:text-red-700 transition-colors duration-200">
              Politics
            </Link>
            <Link href="/category/business" className="text-sm font-medium text-foreground hover:text-red-700 transition-colors duration-200">
              Business
            </Link>
            <Link href="/category/sports" className="text-sm font-medium text-foreground hover:text-red-700 transition-colors duration-200">
              Sports
            </Link>
          </nav>

          {/* Search Icon & Red Login Button */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground hover:text-red-700 transition-colors duration-200" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="px-6 py-2 bg-red-700 text-white font-semibold text-sm hover:bg-red-800 transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
