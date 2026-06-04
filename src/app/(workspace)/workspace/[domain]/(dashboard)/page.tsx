import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Dashboard",
    default: "Dashboard",
  },
  description: "Dashboard for your workspace environment.",
};

export default function WorkspaceDashboardPage() {
  return <div>Workspace Dashboard</div>;
}
