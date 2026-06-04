import { Metadata } from "next";
import { SignInForm } from "@/components/workspace/auth/sign-in-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your workspace account",
};

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to sign in to your workspace.
        </p>
      </div>
      <SignInForm />
      <div className="px-8 text-center text-sm text-muted-foreground flex flex-col space-y-2">
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/workspace/auth/sign-up"
            className="hover:text-primary underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
        <p>
          Need to verify your email?{" "}
          <Link
            href="/workspace/auth/resend-verification"
            className="hover:text-primary underline underline-offset-4"
          >
            Resend Verification
          </Link>
        </p>
      </div>
    </>
  );
}
