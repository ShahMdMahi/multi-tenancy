import { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/workspace/auth/forgot-password-form";
import Link from "next/link";
import { getWorkspaceLink } from "@/utils/links";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your workspace password",
};

export default async function ForgotPasswordPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Forgot Password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
      </div>
      <ForgotPasswordForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Remember your password?{" "}
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
