"use client";

import Link from "next/link";

export default function CoverLetterPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-5xl mb-6">{"\u2764\uFE0F"}</div>
        <h1
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "'Outfit', sans-serif", color: "#0F1629" }}
        >
          AI Cover Letter
        </h1>
        <p className="text-sm mb-8" style={{ color: "#7A7F94" }}>
          Generate a tailored cover letter in seconds. Open an application from
          your tracker and use the AI Cover Letter tool inside to get started.
        </p>
        <Link
          href="/applications"
          className="inline-block bg-[#3B55E6] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#2d44c4] transition-colors"
        >
          Go to Applications
        </Link>
      </div>
    </div>
  );
}
