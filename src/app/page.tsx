import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section id="realisations" aria-labelledby="work-title" className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <h2 id="work-title" className="section-title mb-10 max-w-2xl text-4xl sm:text-5xl">
            Nos réalisations
          </h2>
          <Portfolio limit={3} showMoreLink />
        </div>
      </section>
      <About />
      <Contact />
    </>
  );
}
