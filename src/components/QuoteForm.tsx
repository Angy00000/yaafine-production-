"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

type Fields = {
  name: string;
  phone: string;
  service: string;
  date: string;
  place: string;
  budget: string;
  details: string;
};

const empty: Fields = { name: "", phone: "", service: "", date: "", place: "", budget: "", details: "" };

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) errors.name = "Indiquez votre nom.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) errors.phone = "Indiquez un numéro valide, par exemple 77 123 45 67.";
  if (!f.service) errors.service = "Choisissez une prestation.";
  if (f.details.trim().length < 10) errors.details = "Décrivez votre demande en quelques mots (10 caractères minimum).";
  return errors;
}

function buildMessage(f: Fields) {
  const fmtDate = f.date ? new Date(f.date + "T12:00:00").toLocaleDateString("fr-FR", { dateStyle: "long" }) : "";
  return [
    "Bonjour Yaafiné Production, je souhaite un devis.",
    "",
    `Nom : ${f.name.trim()}`,
    `Téléphone : ${f.phone.trim()}`,
    `Prestation : ${f.service}`,
    fmtDate ? `Date de l'événement : ${fmtDate}` : null,
    f.place.trim() ? `Lieu : ${f.place.trim()}` : null,
    f.budget.trim() ? `Budget indicatif : ${f.budget.trim()}` : null,
    "",
    f.details.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`f-${firstError}`)?.focus();
      return;
    }
    const url = whatsappLink(buildMessage(fields));
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const input =
    "mt-1.5 block w-full rounded-md border border-white/20 bg-ink px-3.5 py-3 text-paper placeholder:text-mist/60 focus:border-electric-2 focus:outline-none aria-[invalid=true]:border-rec";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Nom complet" error={errors.name}>
        <input id="f-name" autoComplete="name" value={fields.name} onChange={set("name")} className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
      </Field>
      <Field id="phone" label="Téléphone (WhatsApp de préférence)" error={errors.phone}>
        <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="77 123 45 67" value={fields.phone} onChange={set("phone")} className={input} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
      </Field>
      <Field id="service" label="Type de prestation" error={errors.service}>
        <select id="f-service" value={fields.service} onChange={set("service")} className={input} aria-invalid={!!errors.service} aria-describedby={errors.service ? "e-service" : undefined}>
          <option value="">Choisir…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Autre / plusieurs prestations">Autre / plusieurs prestations</option>
        </select>
      </Field>
      <Field id="date" label="Date de l'événement" optional>
        <input id="f-date" type="date" value={fields.date} onChange={set("date")} className={`${input} [color-scheme:dark]`} />
      </Field>
      <Field id="place" label="Lieu" optional>
        <input id="f-place" placeholder="Ex. Keur Massar, Dakar" value={fields.place} onChange={set("place")} className={input} />
      </Field>
      <Field id="budget" label="Budget indicatif" optional>
        <input id="f-budget" placeholder="Ex. 150 000 FCFA" value={fields.budget} onChange={set("budget")} className={input} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="details" label="Votre demande" error={errors.details}>
          <textarea id="f-details" rows={5} placeholder="Type d'événement, nombre d'invités, durée, ce que vous attendez…" value={fields.details} onChange={set("details")} className={input} aria-invalid={!!errors.details} aria-describedby={errors.details ? "e-details" : undefined} />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-6 py-4 font-semibold text-white transition-colors hover:bg-electric-2 sm:w-auto"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Envoyer ma demande sur WhatsApp
        </button>
        <p className="mt-3 text-sm text-mist">
          Votre demande s&apos;ouvre dans WhatsApp, déjà rédigée. Il vous reste à appuyer sur Envoyer.
        </p>

        <div aria-live="polite">
          {sentUrl && (
            <p className="mt-5 rounded-md border border-electric/50 bg-electric/10 p-4 text-sm">
              WhatsApp devrait s&apos;être ouvert avec votre demande. Si rien ne s&apos;est passé,{" "}
              <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-electric-2 underline underline-offset-4">
                ouvrez WhatsApp ici
              </a>{" "}
              ou écrivez-nous à{" "}
              <a
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Demande de devis")}&body=${encodeURIComponent(buildMessage(fields))}`}
                className="font-semibold text-electric-2 underline underline-offset-4"
              >
                {site.contact.email}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`f-${id}`} className="text-sm font-semibold">
        {label}
        {optional && <span className="font-normal text-mist"> (facultatif)</span>}
      </label>
      {children}
      {error && (
        <p id={`e-${id}`} className="mt-1.5 text-sm text-[#ff8080]">
          {error}
        </p>
      )}
    </div>
  );
}
