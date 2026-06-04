import { Metadata } from "next";
import { ResendVerificationForm } from "@/components/workspace/auth/resend-verification-form";
import Link from "next/link";
import { getWorkspaceLink } from "@/utils/links";

export const metadata: Metadata = {
  title: "Resend Verification",
  description: "Resend your verification email",
};

export default async function ResendVerificationPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Resend Verification
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email address and we will send you a new verification link.
        </p>
      </div>
      <ResendVerificationForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Back to{" "}
        <Link
          href={getWorkspaceLink("/auth/sign-in", domain)}
          className="hover:text-primary underline underline-offset-4"
        >
          Sign In
        </Link>
      </p>
    </>
  );
}
