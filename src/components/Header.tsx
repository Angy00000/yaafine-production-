"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  // Ferme le menu mobile avec la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-mist">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Bonjour Yaafiné Production, je souhaite un renseignement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-electric-hover sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-3 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-paper transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-paper transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-white/10 bg-ink md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-semibold [font-stretch:115%]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a
                href={whatsappLink("Bonjour Yaafiné Production, je souhaite un renseignement.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-3 font-semibold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Écrire sur WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
