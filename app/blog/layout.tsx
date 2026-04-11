import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F1629]">
      {/* NAV */}
      <nav className="border-b border-[#E2E1DC] bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LOGO_NEW.png" alt="EuroCareer AI" width={140} height={32} className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm text-[#3D4255] hover:text-[#0F1629] transition-colors font-medium">Sign in</Link>
            <Link href="/auth/signup" className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ background: "#636DF5" }}>Start free</Link>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
