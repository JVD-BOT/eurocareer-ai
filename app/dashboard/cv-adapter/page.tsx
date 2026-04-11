import { redirect } from "next/navigation";

// Issue #6: Redirect /dashboard/cv-adapter to /applications with context message
// The CV Adapter lives inside each application card drawer.
export default function CVAdapterPage() {
  redirect("/applications?message=cv-adapter");
}
