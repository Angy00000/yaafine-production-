import Link from "next/link";
import { nav, site, whatsappLink } from "@/content/site";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo size={88} showName={false} />
          <p className="mt-4 max-w-xs text-sm text-mist">
            {site.name}, label audiovisuel à {site.city}. Couverture événementielle, réalisation vidéo et photographie.
          </p>
        </div>

        <nav aria-label="Plan du site">
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2 text-sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block text-mist hover:text-paper">
            WhatsApp {site.contact.whatsappPrimaryLabel}
          </a>
          <a href={whatsappLink(undefined, site.contact.whatsappSecondary)} target="_blank" rel="noopener noreferrer" className="block text-mist hover:text-paper">
            WhatsApp {site.contact.whatsappSecondaryLabel}
          </a>
          <a href={`mailto:${site.contact.email}`} className="block text-mist hover:text-paper">
            {site.contact.email}
          </a>
          {site.socials.length > 0 && (
            <ul className="flex flex-wrap gap-4 pt-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-electric-2">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-6 text-center text-xs text-mist">
        © <Year /> {site.name}. Tous droits réservés.
      </p>
    </footer>
  );
}
