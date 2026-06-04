import { Metadata } from "next";
import { ResetPasswordForm } from "@/components/workspace/auth/reset-password-form";
import Link from "next/link";
import { getWorkspaceLink } from "@/utils/links";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your workspace account",
};

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset Password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your new password below to reset your workspace account
          password.
        </p>
      </div>
      <ResetPasswordForm />
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
