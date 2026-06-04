import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - System Users",
    default: "System Users",
  },
  description: "Manage system users for multi tenancy system.",
};

export default function SystemUsersPage() {
  return <div>System Users</div>;
}
