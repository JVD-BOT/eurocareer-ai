import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* NAV */}
      <nav className="border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to home">
            <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm text-[#1E293B] hover:text-[#0F172A] transition-colors font-medium">Sign in</Link>
            <Link href="/auth/signup" className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "#6366F1" }}>Start free</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="text-8xl font-bold text-[#6366F1] mb-4">404</p>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
            Page not found
          </h1>
          <p className="text-[#64748B] mb-8 leading-relaxed">
            Oops — this page does not exist. It may have been moved, deleted, or you may have followed a broken link.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Back to home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] hover:border-[#6366F1] text-[#0F172A] text-sm font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Browse career guides
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
