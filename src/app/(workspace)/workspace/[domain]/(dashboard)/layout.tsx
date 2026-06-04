import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { WorkspaceSidebar } from "@/components/workspace/dashboard/sidebar";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default async function WorkspaceDashboardLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}>) {
  const { domain } = await params;
  return (
    <SidebarProvider>
      <WorkspaceSidebar domain={domain} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 overflow-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
