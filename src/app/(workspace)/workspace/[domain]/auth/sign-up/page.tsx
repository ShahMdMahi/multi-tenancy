import { Metadata } from "next";
import { SignUpForm } from "@/components/workspace/auth/sign-up-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for a workspace account",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your workspace account.
        </p>
      </div>
      <SignUpForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/workspace/auth/sign-in"
          className="hover:text-primary underline underline-offset-4"
        >
          Sign In
        </Link>
      </p>
    </>
  );
}
