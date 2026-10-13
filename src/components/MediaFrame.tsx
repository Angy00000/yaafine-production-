import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  /** ratio CSS, ex. "16/9" */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Image du site. Si aucune image n'est encore fournie, affiche un cadre
 * clairement marqué « à remplacer » au lieu d'une fausse photo.
 */
export function MediaFrame({ src, alt, ratio = "16/9", sizes = "100vw", priority, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-navy ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (image d'exemple à remplacer)`}
          className="absolute inset-0 flex items-end bg-[radial-gradient(circle_at_30%_25%,#1a3a8a_0%,#0a1a44_55%,#040a1c_100%)] p-3"
        >
          <span className="rounded-sm bg-black/50 px-2 py-1 text-xs text-mist">Exemple — à remplacer</span>
        </div>
      )}
    </div>
  );
}
