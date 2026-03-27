"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Application, ApplicationStatus } from "@/lib/types";
import { KanbanBoard } from "@/components/applications/kanban-board";
import { ListView } from "@/components/applications/list-view";
import { AddApplicationModal } from "@/components/applications/add-application-modal";
import { ApplicationDetailSheet } from "@/components/applications/application-detail-sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, Plus } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/auth/login");
        return;
      }
      setUser(session.user);
      loadApplications();
    });
  }, [router]);

  const loadApplications = async () => {
    const { data } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setApplications(data as Application[]);
    setLoading(false);
  };

  const handleStatusChange = (
    id: string,
    newStatus: ApplicationStatus,
    oldStatus: ApplicationStatus
  ) => {
    // Optimistic update
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    // Persist, revert on failure
    supabase
      .from("applications")
      .update({ status: newStatus })
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          setApplications((prev) =>
            prev.map((app) => (app.id === id ? { ...app, status: oldStatus } : app))
          );
        }
      });
  };

  const handleAdd = (app: Application) => setApplications((prev) => [app, ...prev]);

  const handleUpdate = (updated: Application) => {
    setApplications((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
    setSelectedApp(updated);
  };

  const handleDelete = (id: string) => {
    setApplications((prev) => prev.filter((a) => a.id !== id));
    setSelectedApp(null);
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
      {/* Nav */}
      <nav className="bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-blue-600 font-bold text-lg">
            ★ EuroCareer AI
          </Link>
          <span className="text-sm font-semibold text-gray-900">Applications</span>
          <Link href="/profile" className="text-sm text-muted-foreground hover:text-gray-900 transition-colors hidden sm:block">
            Profile
          </Link>
          <Link href="/settings/billing" className="text-sm text-muted-foreground hover:text-gray-900 transition-colors hidden sm:block">
            Billing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </nav>

      {/* Main */}
      <main className="px-6 py-6">
        <Tabs defaultValue="kanban">
          {/* Top bar */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                {applications.length} total application{applications.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TabsList>
                <TabsTrigger value="kanban" className="gap-1.5 text-sm">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  Board
                </TabsTrigger>
                <TabsTrigger value="list" className="gap-1.5 text-sm">
                  <List className="h-3.5 w-3.5" />
                  List
                </TabsTrigger>
              </TabsList>
              <Button
                onClick={() => setShowAddModal(true)}
                className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white gap-1.5"
              >
                <Plus className="h-4 w-4" />
                Add Application
              </Button>
            </div>
          </div>

          <TabsContent value="kanban" className="mt-0">
            <KanbanBoard
              applications={applications}
              onStatusChange={handleStatusChange}
              onCardClick={setSelectedApp}
            />
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <ListView applications={applications} onRowClick={setSelectedApp} />
          </TabsContent>
        </Tabs>
      </main>

      {/* Modals */}
      {user && (
        <AddApplicationModal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
          userId={user.id}
        />
      )}

      <ApplicationDetailSheet
        application={selectedApp}
        open={!!selectedApp}
        onClose={() => setSelectedApp(null)}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}
