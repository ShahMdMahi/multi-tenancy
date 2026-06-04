import type { Metadata } from "next";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "%s - Workspace Authentication",
    default: "Workspace Authentication",
  },
  description: "Secure authentication for your workspace environment.",
};

export default function WorkspaceAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex w-full min-h-svh flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background p-0">
      <div className="absolute right-4 top-4 md:right-8 md:top-8 z-50">
        <ThemeToggle />
      </div>

      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground mr-3 shadow-md">
            <Briefcase className="size-4" />
          </div>
          Acme Corp Workspace
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Welcome to your workspace. Connect, collaborate, and create
              with unparalleled efficiency and security.&rdquo;
            </p>
            <footer className="text-sm font-medium text-zinc-400">
              Workspace Environment
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8 flex items-center justify-center h-full">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-8 lg:px-0">
          <div className="flex flex-col space-y-2 text-center lg:hidden mb-4">
            <div className="mx-auto flex aspect-square size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md mb-2">
              <Briefcase className="size-6" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Acme Corp</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
