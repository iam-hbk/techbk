"use client";

import * as React from "react";
import { toast } from "sonner";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { site } from "@/lib/site";

type Errors = { name?: string; email?: string; message?: string };

/**
 * Contact form. No backend: validates, then composes a pre-filled email
 * to info@techbk.dev through the visitor's mail client.
 */
export function ContactForm() {
  const [errors, setErrors] = React.useState<Errors>({});
  const [consent, setConsent] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "We need an email address to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email address does not look complete.";
    if (!message) next.message = "Tell us a little about the project.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("A few details are missing.", {
        description: "Check the highlighted fields and try again.",
      });
      return;
    }

    const subject = encodeURIComponent(
      `New project inquiry — ${organization || name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "—"}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client.", {
      description: `Your message is addressed to ${site.email}.`,
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl">
      <FieldGroup>
        <Field data-invalid={Boolean(errors.name) || undefined}>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <FieldDescription id="name-error" role="alert">
              {errors.name}
            </FieldDescription>
          ) : null}
        </Field>

        <Field data-invalid={Boolean(errors.email) || undefined}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email) || undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <FieldDescription id="email-error" role="alert">
              {errors.email}
            </FieldDescription>
          ) : null}
        </Field>

        <Field>
          <FieldLabel htmlFor="organization">Organization (optional)</FieldLabel>
          <Input id="organization" name="organization" autoComplete="organization" />
        </Field>

        <Field data-invalid={Boolean(errors.message) || undefined}>
          <FieldLabel htmlFor="message">
            What are you trying to build?
          </FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={6}
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
          />
          {errors.message ? (
            <FieldDescription id="message-error" role="alert">
              {errors.message}
            </FieldDescription>
          ) : (
            <FieldDescription id="message-hint">
              What is planned, what is not working, or where your current
              software needs help.
            </FieldDescription>
          )}
        </Field>

        <Field orientation="horizontal">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(v) => setConsent(v === true)}
          />
          <FieldLabel htmlFor="consent" className="font-normal">
            TecHBK may reply to me about this inquiry.
          </FieldLabel>
        </Field>

        <div>
          <Button type="submit" size="lg">
            Send by email
            <IconArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
