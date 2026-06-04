"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  profileUpdateRequestSchema,
  type ProfileUpdateInput,
} from "@/schemas/shared/account/profile";

export function SystemProfileUpdateForm() {
  const form = useForm<ProfileUpdateInput>({
    resolver: zodResolver(profileUpdateRequestSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: ProfileUpdateInput) {
    console.log("System Profile Update:", data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="text"
              placeholder="Your name"
              aria-invalid={fieldState.invalid}
              autoComplete="name"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}
