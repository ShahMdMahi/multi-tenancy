import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Workspaces",
    default: "Workspaces",
  },
  description: "Manage workspaces for multi tenancy system.",
};

export default function SystemWorkspacesPage() {
  return <div>Workspaces</div>;
}
