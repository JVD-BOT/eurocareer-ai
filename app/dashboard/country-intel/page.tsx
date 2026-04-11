"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    COUNTRY_INTELLIGENCE,
    type CountryIntelligence,
} from "@/lib/country-intelligence";

/* ── Badge colour helper ─────────────────────────────────── */
function photoBadge(val: CountryIntelligence["photoExpectation"]) {
    const map: Record<string, string> = {
          Required: "bg-red-100 text-red-700",
          Expected: "bg-amber-100 text-amber-700",
          Optional: "bg-blue-100 text-blue-700",
          "Not recommended": "bg-gray-100 text-gray-600",
    };
    return map[val] ?? "bg-gray-100 text-gray-600";
}

function formalityBadge(val: CountryIntelligence["formality"]) {
    const map: Record<string, string> = {
          "Very formal": "bg-indigo-100 text-indigo-700",
          Formal: "bg-violet-100 text-violet-700",
          Moderate: "bg-sky-100 text-sky-700",
          Relaxed: "bg-emerald-100 text-emerald-700",
    };
    return map[val] ?? "bg-gray-100 text-gray-600";
}

/* ── Country card ─────────────────────────────────────────── */
function CountryCard({
    country,
    isOpen,
    onToggle,
}: {
    country: CountryIntelligence;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
          <div className="bg-white rounded-2xl border border-[#E2E1DC] overflow-hidden hover:border-[#636DF5] transition-all">
            {/* Header — always visible */}
                <button
                          onClick={onToggle}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 group"
                        >
                        <div className="flex items-center gap-3 min-w-0">
                                  <span className="text-3xl flex-shrink-0">{country.flag}</span>
                                  <div className="min-w-0">
                                              <p
                                                              className="font-bold text-base truncate"
                                                              style={{
                                                                                fontFamily: "'Outfit', sans-serif",
                                                                                color: "#0F1629",
                                                              }}
                                                            >
                                                {country.name}
                                              </p>
                                              <p className="text-xs truncate" style={{ color: "#7A7F94" }}>
                                                {country.cvLength}
                                              </p>
                                  </div>
                        </div>
                
                        <div className="flex items-center gap-2 flex-shrink-0">
                                  <span
                                                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${photoBadge(
                                                                country.photoExpectation
                                                              )}`}
                                              >
                                              Photo: {country.photoExpectation}
                                  </span>
                                  <svg
                                                className={`w-4 h-4 transition-transform ${
                                                                isOpen ? "rotate-180" : ""
                                                }`}
                                                style={{ color: "#7A7F94" }}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                              <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M19 9l-7 7-7-7"
                                                            />
                                  </svg>
                        </div>
                </button>
          
            {/* Expandable detail section */}
            {isOpen && (
                    <div className="px-5 pb-5 border-t border-[#E2E1DC] pt-4 space-y-4 animate-fade-up">
                      {/* Quick stats row */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <div className="rounded-xl p-3 bg-[#F8F8F6]">
                                                        <p
                                                                          className="text-[11px] font-semibold uppercase tracking-wider mb-1"
                                                                          style={{ color: "#7A7F94" }}
                                                                        >
                                                                        Formality
                                                        </p>
                                                        <span
                                                                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${formalityBadge(
                                                                                              country.formality
                                                                                            )}`}
                                                                        >
                                                          {country.formality}
                                                        </span>
                                          </div>
                                          <div className="rounded-xl p-3 bg-[#F8F8F6]">
                                                        <p
                                                                          className="text-[11px] font-semibold uppercase tracking-wider mb-1"
                                                                          style={{ color: "#7A7F94" }}
                                                                        >
                                                                        CV Language
                                                        </p>
                                                        <p className="text-sm font-medium" style={{ color: "#0F1629" }}>
                                                          {country.language}
                                                        </p>
                                          </div>
                                          <div className="rounded-xl p-3 bg-[#F8F8F6]">
                                                        <p
                                                                          className="text-[11px] font-semibold uppercase tracking-wider mb-1"
                                                                          style={{ color: "#7A7F94" }}
                                                                        >
                                                                        Sign-off
                                                        </p>
                                                        <p
                                                                          className="text-sm font-medium italic"
                                                                          style={{ color: "#0F1629" }}
                                                                        >
                                                          {country.signOff}
                                                        </p>
                                          </div>
                              </div>
                    
                      {/* Key norms */}
                              <div>
                                          <p
                                                          className="text-xs font-semibold uppercase tracking-wider mb-2"
                                                          style={{ color: "#7A7F94" }}
                                                        >
                                                        Key hiring norms
                                          </p>
                                          <ul className="space-y-1.5">
                                            {country.keyNorms.map((norm, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm">
                                                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#636DF5]" />
                                                        <span style={{ color: "#3D4255" }}>{norm}</span>
                                      </li>
                                    ))}
                                          </ul>
                              </div>
                    
                      {/* Cover letter style */}
                              <div>
                                          <p
                                                          className="text-xs font-semibold uppercase tracking-wider mb-2"
                                                          style={{ color: "#7A7F94" }}
                                                        >
                                                        Cover letter style
                                          </p>
                                          <p className="text-sm" style={{ color: "#3D4255" }}>
                                            {country.coverLetterStyle}
                                          </p>
                              </div>
                    
                      {/* Top tip */}
                              <div
                                            className="rounded-xl p-4 border"
                                            style={{
                                                            background: "#EEEFFE",
                                                            borderColor: "#C7CBFA",
                                            }}
                                          >
                                          <p className="text-sm font-semibold mb-1" style={{ color: "#636DF5" }}>
                                                        Top tip
                                          </p>
                                          <p className="text-sm" style={{ color: "#3D4255" }}>
                                            {country.topTip}
                                          </p>
                              </div>
                    </div>
                )}
          </div>
        );
}

/* ── Main page ────────────────────────────────────────────── */
export default function CountryIntelPage() {
    const [openCode, setOpenCode] = useState<string | null>(null);
    const [search, setSearch] = useState("");
  
    const filtered = COUNTRY_INTELLIGENCE.filter(
          (c) =>
                  c.name.toLowerCase().includes(search.toLowerCase()) ||
                  c.code.toLowerCase().includes(search.toLowerCase())
              );
  
    return (
          <div
                  className=""
                  style={{ background: "#F8F8F6" }}
                >
            {/* Top bar */}
                <header className="bg-white border-b border-[#E2E1DC] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                        <div className="flex items-center gap-3">
                                  <Link
                                                href="/dashboard"
                                                className="p-1.5 rounded-lg hover:bg-[#F8F8F6] transition-colors"
                                                style={{ color: "#3D4255" }}
                                              >
                                              <svg
                                                              className="w-5 h-5"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              stroke="currentColor"
                                                            >
                                                            <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M15 19l-7-7 7-7"
                                                                            />
                                              </svg>
                                  </Link>
                                  <h1
                                                className="font-bold text-lg"
                                                style={{
                                                                fontFamily: "'Outfit', sans-serif",
                                                                color: "#0F1629",
                                                }}
                                              >
                                              Country Intelligence
                                  </h1>
                        </div>
                </header>
          
                <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
                  {/* Intro */}
                        <div className="mb-6 animate-fade-up">
                                  <div className="flex items-center gap-2 mb-1">
                                              <Image
                                                              src="/STAR.png"
                                                              alt=""
                                                              width={16}
                                                              height={16}
                                                              style={{ opacity: 0.5 }}
                                                            />
                                              <p
                                                              className="text-xs font-semibold uppercase tracking-wider"
                                                              style={{ color: "#7A7F94" }}
                                                            >
                                                            12 EU markets
                                              </p>
                                  </div>
                                  <h2
                                                className="text-2xl font-bold mb-2"
                                                style={{
                                                                fontFamily: "'Outfit', sans-serif",
                                                                color: "#0F1629",
                                                }}
                                              >
                                              Hiring norms by country
                                  </h2>
                                  <p className="text-sm" style={{ color: "#7A7F94" }}>
                                              Photo expectations, CV length, language conventions, formality
                                              level, and more — everything you need to tailor your application.
                                  </p>
                        </div>
                
                  {/* Search */}
                        <div className="mb-6">
                                  <input
                                                type="text"
                                                placeholder="Search countries…"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-[#E2E1DC] text-sm focus:outline-none focus:border-[#636DF5] focus:ring-2 focus:ring-[#636DF5]/20 transition-all"
                                                style={{ background: "#fff", color: "#0F1629" }}
                                              />
                        </div>
                
                  {/* Country cards */}
                        <div className="space-y-3">
                          {filtered.length === 0 && (
                              <div className="text-center py-12">
                                            <p className="text-sm" style={{ color: "#B0B4C5" }}>
                                                            No countries match your search.
                                            </p>
                              </div>
                                  )}
                          {filtered.map((country) => (
                              <CountryCard
                                              key={country.code}
                                              country={country}
                                              isOpen={openCode === country.code}
                                              onToggle={() =>
                                                                setOpenCode(openCode === country.code ? null : country.code)
                                              }
                                            />
                            ))}
                        </div>
                </main>
          </div>
        );
}
