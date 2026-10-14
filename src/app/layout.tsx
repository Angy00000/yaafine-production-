import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { BackgroundSlideshow } from "@/components/BackgroundSlideshow";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Vidéo, photo et couverture d'événements à Keur Massar et Dakar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "vidéaste Keur Massar",
    "vidéaste Dakar",
    "photographe Dakar",
    "photographe Keur Massar",
    "couverture événementielle Dakar",
    "décoration mariage Dakar",
    "décoration baptême Keur Massar",
    "réalisation vidéo Sénégal",
    "Yaafiné Production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Vidéo, photo et couverture d'événements`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#040a1c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.whatsappPrimaryLabel.replace(/\s/g, ""),
  founder: { "@type": "Person", name: site.founder, alternateName: "Moussa Yaafiné" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.district,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "SN",
  },
  areaServed: [site.city, site.region],
  ...(site.socials.length ? { sameAs: site.socials.map((s) => s.href) } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-md bg-paper px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <BackgroundSlideshow slides={site.heroSlides} />
        <Header />
        <main id="contenu" className="relative z-10 flex-1">
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
