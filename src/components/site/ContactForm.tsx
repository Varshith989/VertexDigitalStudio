import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { budgetOptions, websiteTypeOptions } from "@/lib/site-data";
import { Cta } from "./primitives";
import { cn } from "@/lib/utils";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{8,16}$/, "Please enter a valid WhatsApp number."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  websiteType: z.string().min(1, "Please select a website type."),
  budget: z.string().optional().or(z.literal("")),
  details: z.string().trim().min(20, "Please share a little more detail (at least 20 characters)."),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

/**
 * Submission handler. Swap this out later to send to an email service,
 * Lovable Cloud, a CRM or a webhook — the form UI does not need to change.
 */
async function submitEnquiry(values: EnquiryValues): Promise<void> {
  await new Promise((r) => setTimeout(r, 600));
  console.info("[Vertex] Project enquiry captured:", values);
}

const fieldClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-destructive";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
        {required ? <span className="text-brand"> *</span> : <span className="font-normal normal-case tracking-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { websiteType: "", budget: "" },
  });

  const onSubmit = async (values: EnquiryValues) => {
    try {
      await submitEnquiry(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="card-premium flex h-full min-h-80 flex-col items-center justify-center p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
        <p className="mt-6 font-display text-2xl font-bold">Thanks!</p>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your project enquiry has been received. We'll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-brand hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (k: keyof EnquiryValues) => errors[k]?.message;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card-premium grid gap-5 p-6 hover:translate-y-0 sm:grid-cols-2 sm:p-8"
      aria-describedby={status === "error" ? "form-error" : undefined}
    >
      <Field label="Full Name" htmlFor="fullName" required error={err("fullName")}>
        <input
          id="fullName"
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
      </Field>
      <Field label="Email" htmlFor="email" required error={err("email")}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </Field>
      <Field label="WhatsApp Number" htmlFor="whatsapp" required error={err("whatsapp")}>
        <input
          id="whatsapp"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.whatsapp}
          aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
          {...register("whatsapp")}
        />
      </Field>
      <Field label="Business / Company" htmlFor="company" error={err("company")}>
        <input
          id="company"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Business or brand name"
          {...register("company")}
        />
      </Field>
      <Field label="Website Type" htmlFor="websiteType" required error={err("websiteType")}>
        <select
          id="websiteType"
          className={cn(fieldClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a3a3a3%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
          aria-invalid={!!errors.websiteType}
          aria-describedby={errors.websiteType ? "websiteType-error" : undefined}
          {...register("websiteType")}
        >
          <option value="" disabled>
            Select a website type
          </option>
          {websiteTypeOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Budget" htmlFor="budget" error={err("budget")}>
        <select
          id="budget"
          className={cn(fieldClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a3a3a3%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
          {...register("budget")}
        >
          <option value="">Select a budget range</option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Project Details" htmlFor="details" required error={err("details")} className="sm:col-span-2">
        <textarea
          id="details"
          rows={6}
          className={cn(fieldClass, "min-h-40 resize-y")}
          placeholder="Tell us about your business, what you need and what you'd like your website to accomplish."
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? "details-error" : undefined}
          {...register("details")}
        />
      </Field>

      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Fields marked <span className="text-brand">*</span> are required.
        </p>
        <Cta type="submit" size="lg" disabled={isSubmitting} className="sm:min-w-56">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Project Enquiry <ArrowRight />
            </>
          )}
        </Cta>
      </div>
      {status === "error" && (
        <p id="form-error" role="alert" className="sm:col-span-2 text-sm text-destructive">
          Something went wrong. Please try again or reach out on WhatsApp.
        </p>
      )}
    </form>
  );
}
