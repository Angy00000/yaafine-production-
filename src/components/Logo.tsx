import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/** Affiche le logo officiel s'il est configuré, sinon le nom en texte. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/#accueil" className={`inline-flex items-center ${className}`} aria-label={`${site.name}, retour à l'accueil`}>
      {site.logo ? (
        <Image src={site.logo} alt={site.name} width={160} height={48} className="h-10 w-auto" priority />
      ) : (
        <span className="text-lg leading-none font-extrabold tracking-tight [font-stretch:125%]">
          {site.shortName}
        </span>
      )}
    </Link>
  );
}
