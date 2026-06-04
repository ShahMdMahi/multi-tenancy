import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Dashboard",
    default: "Dashboard",
  },
  description: "Dashboard for multi tenancy system management.",
};

export default function SystemDashboardPage() {
  return <div>Dashboard</div>;
}
