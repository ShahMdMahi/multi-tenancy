import { Metadata } from "next";
import { VerifyAccountForm } from "@/components/workspace/auth/verify-account-form";
import Link from "next/link";
import { getWorkspaceLink } from "@/utils/links";

export const metadata: Metadata = {
  title: "Verify Account",
  description:
    "Verify your account by entering the token sent to your email address.",
};

export default async function VerifyAccountPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Verify Account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your verification token and set a new password.
        </p>
      </div>
      <VerifyAccountForm />
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
