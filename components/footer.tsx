'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Reference Newspaper</h3>
              <p className="text-gray-400">Nigeria's trusted source for breaking news, in-depth analysis, and comprehensive coverage of politics, business, sports, and entertainment.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <label className="text-sm font-semibold">Subscribe to our newsletter</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded text-sm focus:outline-none focus:border-crimson"
                  required
                />
                <button type="submit" className="px-6 py-3 bg-crimson text-white font-semibold hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Categories */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/category/politics" className="hover:text-crimson transition-colors">Politics</Link></li>
              <li><Link href="/category/business" className="hover:text-crimson transition-colors">Business</Link></li>
              <li><Link href="/category/sports" className="hover:text-crimson transition-colors">Sports</Link></li>
              <li><Link href="/category/entertainment" className="hover:text-crimson transition-colors">Entertainment</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-crimson transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Press Kit</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-crimson transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-crimson transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Follow Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-crimson transition-colors">Twitter/X</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Reference Newspaper Online. All rights reserved.</p>
          <p>Committed to Nigerian journalism excellence</p>
        </div>
      </div>
    </footer>
  )
}
