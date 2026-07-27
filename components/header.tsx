'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50)
    }, { passive: true })
  }

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${scrolled ? 'bg-white border-b border-border shadow-sm' : 'bg-white border-b border-border'}`}>
      {/* Tier 1: Breaking News Ticker */}
      <div className="bg-crimson text-white px-4 py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee">
            <div className="flex gap-8 whitespace-nowrap">
              <span className="text-xs font-bold uppercase tracking-wider">🔴 BREAKING NEWS</span>
              <span className="text-xs">Latest developments in global politics and technology</span>
              <span className="text-xs font-bold uppercase tracking-wider">🔴 BREAKING NEWS</span>
              <span className="text-xs">Latest developments in global politics and technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Header */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              REALISTIC
            </h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/category/politics" className="text-sm font-medium hover:text-crimson transition-colors">
              Politics
            </Link>
            <Link href="/category/technology" className="text-sm font-medium hover:text-crimson transition-colors">
              Technology
            </Link>
            <Link href="/category/business" className="text-sm font-medium hover:text-crimson transition-colors">
              Business
            </Link>
            <Link href="/category/science" className="text-sm font-medium hover:text-crimson transition-colors">
              Science
            </Link>
          </nav>
          <button className="px-4 py-2 border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Tier 3: Category Filter (visible on category pages) */}
    </header>
  )
}
