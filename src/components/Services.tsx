import { services } from "@/content/services";
import { whatsappLink } from "@/content/site";
import { MediaFrame } from "./MediaFrame";
import { WhatsAppIcon } from "./icons";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-ink/75">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="max-w-2xl">
        <h2 id="services-title" className="section-title text-4xl sm:text-5xl">
          Trois métiers, une même exigence d&apos;image
        </h2>
        <p className="mt-4 text-mist sm:text-lg">
          Que vous organisiez une cérémonie, lanciez un produit ou ayez besoin de photos, nous nous occupons des images de bout en bout.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-20 sm:gap-28">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className="grid scroll-mt-24 items-center gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className={`viewfinder p-2 md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <span className="vf-corners" aria-hidden />
              <MediaFrame src={s.image} alt={s.imageAlt} ratio="3/2" sizes="(min-width: 768px) 55vw, 100vw" />
            </div>

            <div className="md:col-span-5">
              <h3 id={`${s.slug}-title`} className="section-title text-3xl sm:text-4xl">
                {s.title}
              </h3>
              <p className="mt-4 text-mist">{s.summary}</p>
              <ul className="mt-6 space-y-2 border-l-2 border-electric pl-4 text-sm">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Bonjour Yaafiné Production, je souhaite un devis pour : ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 font-semibold text-white transition-colors hover:bg-electric-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Demander un devis
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
