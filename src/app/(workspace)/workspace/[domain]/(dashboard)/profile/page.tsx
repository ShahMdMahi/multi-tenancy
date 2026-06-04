import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkspaceProfileUpdateForm } from "@/components/workspace/account/profile-update-form";
import { WorkspacePasswordUpdateForm } from "@/components/workspace/account/password-update-form";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your profile",
};

export default function WorkspaceProfilePage() {
  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent>
          <WorkspaceProfileUpdateForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WorkspacePasswordUpdateForm />
        </CardContent>
      </Card>
    </div>
  );
}
