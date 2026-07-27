'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${scrolled ? 'bg-white border-b border-border shadow-md' : 'bg-white border-b border-border'}`}>
      {/* Tier 1: Breaking News Ticker */}
      <div className="bg-crimson text-white px-4 py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee">
            <div className="flex gap-8 whitespace-nowrap">
              <span className="text-xs font-bold uppercase tracking-wider">● BREAKING NEWS</span>
              <span className="text-xs">FG launches digital HR platform, Senate clarifies road safety amendment bill</span>
              <span className="text-xs font-bold uppercase tracking-wider">● BREAKING NEWS</span>
              <span className="text-xs">FG launches digital HR platform, Senate clarifies road safety amendment bill</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">
              Reference Newspaper
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="/category/politics" className="text-sm font-medium text-foreground hover:text-crimson transition-colors">
              Politics
            </Link>
            <Link href="/category/business" className="text-sm font-medium text-foreground hover:text-crimson transition-colors">
              Business
            </Link>
            <Link href="/category/sports" className="text-sm font-medium text-foreground hover:text-crimson transition-colors">
              Sports
            </Link>
            <Link href="/category/entertainment" className="text-sm font-medium text-foreground hover:text-crimson transition-colors">
              Entertainment
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground hover:text-crimson transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="px-4 py-2 bg-crimson text-white text-sm font-semibold hover:bg-red-700 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
