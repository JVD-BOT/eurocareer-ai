"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How it works</Link>
          <Link href="/#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</Link>
          <Link href="/#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Guides</Link>
          <Link href="/#faq" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/login" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Start free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors">How it works</Link>
            <Link href="/#features" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors">Features</Link>
            <Link href="/#pricing" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors">Pricing</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors">Guides</Link>
            <Link href="/#faq" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2.5 transition-colors">FAQ</Link>
            <div className="pt-3 mt-1 border-t border-slate-800 flex flex-col gap-2">
              <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="text-sm text-slate-400 hover:text-white py-2 transition-colors">Sign in</Link>
              <Link
                href="/auth/signup"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
