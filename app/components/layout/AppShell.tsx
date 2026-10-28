import type { ReactNode } from "react";
import { SiteFooter } from "~/components/layout/SiteFooter";
import { SiteHeader } from "~/components/layout/SiteHeader";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[var(--poster-max)] flex-1 px-[var(--poster-gutter)] pb-[var(--poster-section)]">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
