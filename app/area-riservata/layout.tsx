import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import DashboardSidebar from "@/components/DashboardSidebar";

export default async function AreaRiservataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/accesso");

  const { data: profile } = await supabase
    .from("profiles")
    .select("nome, cognome, role")
    .eq("id", user.id)
    .single();

  const displayName = profile
    ? `${profile.nome} ${profile.cognome}`
    : user.email?.split("@")[0] ?? "Utente";

  return (
    <div style={{ background: "var(--bg-alt)", minHeight: "calc(100vh - 68px)" }}>
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div className="dashboard-grid">
          <DashboardSidebar
            user={{ email: user.email!, displayName, role: profile?.role }}
          />
          <main className="dashboard-main" style={{ padding: 0 }}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
