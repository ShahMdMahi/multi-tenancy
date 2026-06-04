import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Workspace",
    default: "Workspace",
  },
  description: "Workspace for Multi Tenancy",
};

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
