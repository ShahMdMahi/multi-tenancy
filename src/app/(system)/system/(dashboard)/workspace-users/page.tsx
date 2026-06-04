import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Workspace Users",
    default: "Workspace Users",
  },
  description: "Manage workspace users for multi tenancy system.",
};

export default function SystemWorkspaceUsersPage() {
  return <div>Workspace Users</div>;
}
