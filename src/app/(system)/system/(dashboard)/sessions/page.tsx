import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Sessions",
    default: "Sessions",
  },
  description: "Manage your sessions for multi tenancy system.",
};

export default function SystemSessionsPage() {
  return <div>Sessions</div>;
}
