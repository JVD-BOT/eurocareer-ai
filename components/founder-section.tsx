export default function FounderSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex flex-col sm:flex-row items-start gap-5 p-7 rounded-2xl border border-slate-800 bg-slate-900/40">
          {/* Indigo left accent bar */}
          <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-indigo-500/60 rounded-full" />

          {/* Avatar */}
          <div className="flex-shrink-0 ml-3">
            <div className="w-14 h-14 rounded-full bg-indigo-900/60 border border-indigo-700/50 flex items-center justify-center">
              <span className="text-indigo-300 font-semibold text-base">JD</span>
            </div>
          </div>

          {/* Text */}
          <div className="ml-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold text-sm">Jon D.</span>
              <span className="text-slate-500 text-xs">·</span>
              <span className="text-slate-500 text-xs">Designer &amp; founder</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              I spent two years applying to design roles across Europe before going freelance. Every country had different expectations — and no tool handled that. I built EuroCareer AI to solve the problem I lived through.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
