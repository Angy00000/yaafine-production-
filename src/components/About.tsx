import { about } from "@/content/about";
import { site } from "@/content/site";
import { MediaFrame } from "./MediaFrame";

export function About() {
  const { founder } = about;

  return (
    <section id="a-propos" aria-labelledby="about-title" className="bg-navy/80">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="about-title" className="section-title text-4xl sm:text-5xl">
              Le regard derrière la caméra
            </h2>
            <p className="mt-6 text-lg leading-relaxed">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-mist">{about.activities}</p>

            <div className="mt-12 border-l-2 border-electric pl-5">
              <h3 className="text-2xl font-bold [font-stretch:112%]">{founder.name}</h3>
              <p className="text-mist">
                Dit {founder.nickname}, {founder.role.charAt(0).toLowerCase() + founder.role.slice(1)}
              </p>
            </div>

            <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-paper/90">
              {about.bioVisible.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            <details className="group mt-4 max-w-prose">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Lire toute son histoire</span>
                <span className="hidden group-open:inline">Réduire</span>
                <span aria-hidden className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <div className="mt-6 space-y-4 leading-relaxed text-paper/90">
                {about.bioMore.map((p, i) => (
                  <div key={p.slice(0, 32)} className="space-y-4">
                    <p>{p}</p>
                    {about.stagePhoto && i === about.stagePhoto.afterParagraph && (
                      <figure className="py-4">
                        <div className="viewfinder p-2 sm:max-w-sm">
                          <span className="vf-corners" aria-hidden />
                          <MediaFrame src={about.stagePhoto.src} alt={about.stagePhoto.alt} ratio="4/5" position="50% 30%" sizes="(min-width: 640px) 384px, 100vw" />
                        </div>
                        <figcaption className="mt-2 text-xs text-mist">{about.stagePhoto.credit}</figcaption>
                      </figure>
                    )}
                  </div>
                ))}

                <h4 className="pt-4 text-lg font-bold [font-stretch:112%]">Sa mission</h4>
                <ul className="space-y-2 text-mist">
                  {about.mission.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-2" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="pt-2">{about.closing}</p>
              </div>
            </details>
          </div>

          <div className="md:col-span-5">
            <div className="viewfinder p-2 md:sticky md:top-24">
              <span className="vf-corners" aria-hidden />
              <MediaFrame
                src={founder.photo ?? "/media/photos/foot-finale-7e-edition.webp"}
                alt={founder.photo ? `Portrait de ${founder.name}` : "L'équipe Yaafiné Production lors de la finale du Tournoi de football Jeunesse de Malika"}
                position={founder.photo ? "50% 30%" : "58% 50%"}
                ratio="4/5"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>

        <figure className="mx-auto mt-20 max-w-4xl text-center">
          <blockquote className="display text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05]">
            « {about.quote} »
          </blockquote>
          <figcaption className="mt-5 text-mist">
            {founder.name}, {site.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
