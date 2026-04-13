import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <Image src="/STAR.png" alt="EuroCareerAI" width={24} height={24} className="opacity-40" />
            <span className="text-sm text-slate-500">&copy; 2026 EuroCareerAI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Guides</Link>
            <Link href="/auth/login" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">Start free &rarr;</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/jon-daliling"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-[#6366F1] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9V14c0-2.5-1.35-3.66-3.15-3.66-1.45 0-2.1.8-2.46 1.36v-1.2H10.5c.04.75 0 7.84 0 7.84h2.22v-4.38c0-.2.01-.4.07-.55.17-.4.53-.81 1.15-.81.81 0 1.14.62 1.14 1.53v4.21h2.26z" />
              </svg>
            </a>
            <a
              href="https://x.com/eurocareerai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-400 hover:text-[#6366F1] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.47 7.39L22 22h-6.84l-4.72-6.18L4.8 22H2l6.93-7.92L2 2h6.99l4.26 5.64L18.24 2zm-1.2 18h1.53L7.03 4H5.4l11.64 16z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
