"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  resendVerificationSchema,
  type ResendVerificationInput,
} from "@/schemas/shared/auth/resend-verification";

export function ResendVerificationForm() {
  const form = useForm<ResendVerificationInput>({
    resolver: zodResolver(resendVerificationSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: ResendVerificationInput) {
    console.log("Workspace Resend Verification:", data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              placeholder="m@example.com"
              aria-invalid={fieldState.invalid}
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit" className="w-full">
        Resend verification link
      </Button>
    </form>
  );
}
