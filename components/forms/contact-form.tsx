"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { need: undefined, budget: undefined },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-lg border border-copper-200 bg-copper-50 p-6 text-ink-800"
      >
        <CheckCircle2 className="mt-0.5 size-5 text-copper-600" aria-hidden />
        <div>
          <p className="font-serif text-lg">Thanks — that landed.</p>
          <p className="mt-1 text-sm text-ink-600">
            Parham will reply within two business days. If it&apos;s urgent, email
            parham@rethinkcnergy.com directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5"
      aria-describedby={status === "error" ? "form-error" : undefined}
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("website")}
        className="sr-only"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" autoComplete="organization" {...register("company")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="need">What do you need help with?</Label>
          <Select
            onValueChange={(v) =>
              setValue("need", v as ContactInput["need"], { shouldValidate: true })
            }
            value={watch("need")}
          >
            <SelectTrigger id="need" aria-invalid={!!errors.need}>
              <SelectValue placeholder="Pick one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strategy">AI Strategy &amp; Advisory</SelectItem>
              <SelectItem value="geo">GEO / AEO Readiness</SelectItem>
              <SelectItem value="build">Custom AI Build</SelectItem>
              <SelectItem value="speaking">Speaking or Workshop</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
          {errors.need && <p className="text-xs text-destructive">{errors.need.message}</p>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="budget">Budget range (optional)</Label>
          <Select
            onValueChange={(v) =>
              setValue("budget", v as ContactInput["budget"], { shouldValidate: true })
            }
            value={watch("budget") ?? undefined}
          >
            <SelectTrigger id="budget">
              <SelectValue placeholder="Pick one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-10k">Under $10,000</SelectItem>
              <SelectItem value="10-25k">$10,000 – $25,000</SelectItem>
              <SelectItem value="25-50k">$25,000 – $50,000</SelectItem>
              <SelectItem value="50k-plus">$50,000+</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Current situation, what you&rsquo;re trying to achieve, any constraints we should know about."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div
          id="form-error"
          role="alert"
          className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>{errorMessage ?? "Please try again in a moment."}</span>
        </div>
      )}

      <div>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            "Send"
          )}
        </Button>
      </div>
    </form>
  );
}
