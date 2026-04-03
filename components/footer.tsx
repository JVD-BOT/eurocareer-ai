import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <Image src="/STAR.png" alt="EuroCareer AI" width={24} height={24} className="opacity-60" />
            <span className="text-sm text-slate-500">© 2026 EuroCareer AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/blog" className="text-sm text-slate-500 hover:text-white transition-colors">Guides</Link>
            <Link href="/auth/login" className="text-sm text-slate-500 hover:text-white transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="text-sm text-slate-500 hover:text-white transition-colors">Sign up</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
