import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/** Logo officiel (pastille ronde) suivi du nom, lisible même en petit. */
export function Logo({ size = 44, showName = true }: { size?: number; showName?: boolean }) {
  return (
    <Link href="/#accueil" className="inline-flex items-center gap-3" aria-label={`${site.name}, retour à l'accueil`}>
      {site.logo && (
        <Image src={site.logo} alt="" width={size} height={size} className="rounded-full" priority />
      )}
      {showName && (
        <span className="text-base leading-tight font-extrabold [font-stretch:120%]">
          {site.shortName}
        </span>
      )}
    </Link>
  );
}
