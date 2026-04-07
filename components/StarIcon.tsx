export function StarIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
    return (
          <svg
                  width={size}
                  height={size}
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={className}
                >
                <polygon
                          stroke="currentColor"
                          strokeWidth="18"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          points="200,32 238,148 362,148 262,222 300,338 200,268 100,338 138,222 38,148 162,148"
                        />
                <line stroke="currentColor" strokeWidth="14" strokeLinecap="round" x1="200" y1="200" x2="238" y2="148" />
                <line stroke="currentColor" strokeWidth="14" strokeLinecap="round" x1="200" y1="200" x2="262" y2="222" />
                <line stroke="currentColor" strokeWidth="14" strokeLinecap="round" x1="200" y1="200" x2="200" y2="268" />
                <line stroke="currentColor" strokeWidth="14" strokeLinecap="round" x1="200" y1="200" x2="138" y2="222" />
                <line stroke="currentColor" strokeWidth="14" strokeLinecap="round" x1="200" y1="200" x2="162" y2="148" />
                <circle fill="currentColor" cx="200" cy="200" r="18" />
                <circle fill="currentColor" cx="238" cy="148" r="10" />
                <circle fill="currentColor" cx="262" cy="222" r="10" />
                <circle fill="currentColor" cx="200" cy="268" r="10" />
                <circle fill="currentColor" cx="138" cy="222" r="10" />
                <circle fill="currentColor" cx="162" cy="148" r="10" />
          </svg>
        );
}

export function BrandLogo({ className = '', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
    const textColor = variant === 'light' ? 'text-white' : 'text-[#0F1629]';
    return (
          <span className={`inline-flex items-center gap-1.5 ${className}`}>
                <StarIcon size={24} className="text-[#636DF5]" />
                <span className={`font-semibold text-lg tracking-tight ${textColor}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                        EuroCareer<span className="text-[#636DF5]">AI</span>
                </span>
          </span>
        );
}
