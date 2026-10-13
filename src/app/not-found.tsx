import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-40 pb-32 text-center">
      <h1 className="display text-5xl">Page introuvable</h1>
      <p className="mt-4 text-mist">Cette page n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-electric px-6 py-3 font-semibold text-white">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
