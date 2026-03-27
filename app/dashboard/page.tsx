"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import type { User } from "@supabase/supabase-js";

interface Stats {
  applications: number;
  interviews: number;
  offers: number;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({ applications: 0, interviews: 0, offers: 0 });
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/auth/login");
      } else {
        setUser(session.user);
        loadStats();
      }
    });
  }, [router]);

  const loadStats = async () => {
    const { data } = await supabase.from("applications").select("status");
    if (data) {
      setStats({
        applications: data.length,
        interviews: data.filter((a) => a.status === "interview").length,
        offers: data.filter((a) => a.status === "offer").length,
      });
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold text-xl">★ EuroCareer AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/applications" className="text-sm text-muted-foreground hover:text-gray-900 transition-colors hidden sm:block">
            Applications
          </Link>
          <Link href="/profile" className="text-sm text-muted-foreground hover:text-gray-900 transition-colors hidden sm:block">
            Profile
          </Link>
          <span className="text-sm text-muted-foreground hidden sm:block">·</span>
          <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back 👋</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s your EuroCareer AI dashboard</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Applications", value: stats.applications, icon: "📋", href: "/applications" },
            { label: "Interviews", value: stats.interviews, icon: "🎤", href: "/applications" },
            { label: "Offers", value: stats.offers, icon: "🎯", href: "/applications" },
          ].map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-xl border p-6 flex items-center gap-4 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Get started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "Track applications",
                desc: "Kanban board + list view",
                emoji: "📋",
                href: "/applications",
              },
              {
                label: "Browse EU jobs",
                desc: "Explore 30+ European countries",
                emoji: "🌍",
                href: "#",
              },
              {
                label: "Build your AI CV",
                desc: "Create a EU-standard CV in minutes",
                emoji: "✍️",
                href: "/profile",
              },
              {
                label: "Generate cover letter",
                desc: "AI-crafted in seconds",
                emoji: "💌",
                href: "/applications",
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-2xl">{action.emoji}</span>
                <div>
                  <p className="font-medium text-sm group-hover:text-blue-700">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
