import { about } from "@/content/about";
import { site } from "@/content/site";
import { MediaFrame } from "./MediaFrame";

export function About() {
  const hasBio = about.founderBio.length > 0;

  return (
    <section id="a-propos" aria-labelledby="about-title" className="bg-navy/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 id="about-title" className="section-title text-4xl sm:text-5xl">
            Le regard derrière la caméra
          </h2>
          <p className="mt-6 text-lg leading-relaxed">{about.intro}</p>
          <p className="mt-4 leading-relaxed text-mist">{about.activities}</p>
          <p className="mt-4 leading-relaxed text-mist">{about.approach}</p>

          <div className="mt-10">
            <h3 className="text-xl font-bold [font-stretch:112%]">{site.founder}</h3>
            <p className="text-sm text-mist">Fondateur de {site.name}</p>
            {hasBio ? (
              about.founderBio.map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 leading-relaxed text-mist">
                  {para}
                </p>
              ))
            ) : (
              <p className="mt-4 rounded-sm border border-dashed border-white/25 p-4 text-sm text-mist">
                Biographie à compléter : parcours, débuts et spécialités du fondateur, fournis par le client.
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="viewfinder p-2">
            <span className="vf-corners" aria-hidden />
            <MediaFrame
              src={about.founderPhoto ?? "/media/photos/foot-finale-7e-edition.webp"}
              alt={about.founderPhoto ? `Portrait de ${site.founder}` : "L'équipe Yaafiné Production lors de la finale de son tournoi de football"}
              position="58% 50%"
              ratio="4/5"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
