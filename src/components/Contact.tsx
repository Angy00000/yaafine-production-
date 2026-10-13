import { site, whatsappLink } from "@/content/site";
import { QuoteForm } from "./QuoteForm";
import { MailIcon, WhatsAppIcon } from "./icons";

export function Contact() {
  const { contact } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="contact-title" className="section-title text-4xl sm:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-mist">
            Décrivez votre événement ou votre idée : nous vous répondons avec une proposition adaptée.
          </p>

          <a
            href={whatsappLink("Bonjour Yaafiné Production, je souhaite un renseignement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 rounded-md bg-electric p-4 text-white transition-colors hover:bg-electric-2"
          >
            <WhatsAppIcon className="h-7 w-7 shrink-0" />
            <span>
              <span className="block font-semibold">Écrire sur WhatsApp</span>
              <span className="text-sm text-white/85">{contact.whatsappPrimaryLabel}</span>
            </span>
          </a>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href={whatsappLink(undefined, contact.whatsappSecondary)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-electric-2"
              >
                <WhatsAppIcon className="h-5 w-5 text-mist" />
                <span>
                  <span className="block text-mist">Second numéro WhatsApp</span>
                  {contact.whatsappSecondaryLabel}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-electric-2">
                <MailIcon className="h-5 w-5 text-mist" />
                <span>
                  <span className="block text-mist">E-mail</span>
                  {contact.email}
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-mist">
            Basés à {site.city}, région de {site.region}, {site.country}.
          </p>
        </div>

        <div className="md:col-span-8">
          <h3 className="mb-6 text-xl font-bold [font-stretch:112%]">Demande de devis</h3>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
