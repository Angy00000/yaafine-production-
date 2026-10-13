import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Timecode } from "./Timecode";

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="px-3 pt-19 pb-3 sm:px-5 sm:pb-5">
      <div className="viewfinder isolate flex min-h-[calc(100svh-5.5rem)] flex-col overflow-hidden">
        <span className="vf-corners" aria-hidden />

        {/* Fond : image du client ou ambiance sombre en attendant */}
        <div className="absolute inset-0 -z-10">
          {site.heroImage ? (
            <Image src={site.heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_70%_20%,#16357f_0%,#0a1a44_40%,#040a1c_80%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        </div>

        {/* Bandeau caméra */}
        <div className="flex items-center justify-between px-5 pt-5 text-xs text-mist sm:px-8 sm:pt-7 sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="rec-dot h-2.5 w-2.5 rounded-full bg-rec" aria-hidden />
            <span className="font-semibold text-paper">REC</span>
            <Timecode />
          </span>
          <span>{site.city}, {site.region}</span>
        </div>

        <div className="mt-auto px-5 pb-8 sm:px-8 sm:pb-12">
          <h1 id="hero-title" className="display max-w-4xl text-[clamp(2.6rem,9vw,6.5rem)]">
            Nous capturons vos plus beaux moments
          </h1>
          <p className="mt-5 max-w-xl text-base text-mist sm:text-lg">
            {site.name} filme et photographie vos événements, et réalise vos vidéos, à Keur Massar et à Dakar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-electric px-6 py-3.5 font-semibold text-white transition-colors hover:bg-electric-2"
            >
              Demander un devis
            </Link>
            <Link
              href="/realisations"
              className="rounded-full border border-white/30 px-6 py-3.5 font-semibold transition-colors hover:border-white hover:bg-white/5"
            >
              Découvrir nos réalisations
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-sm text-mist">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/#${s.slug}`} className="hover:text-paper">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
