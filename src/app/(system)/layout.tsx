import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - System Management",
    default: "System Management",
  },
  description: "System Management for Multi Tenancy",
};

export default function SystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
