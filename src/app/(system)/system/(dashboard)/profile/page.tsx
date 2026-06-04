import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Profile",
    default: "Profile",
  },
  description: "Manage your profile for multi tenancy system.",
};

export default function SystemProfilePage() {
  return <div>Profile</div>;
}
