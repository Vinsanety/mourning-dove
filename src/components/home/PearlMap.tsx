import { siteConfig } from "@/data/site";

/** Real Google Map embed with a pin on Pearl Street, Boulder. */
export function PearlMap() {
  return (
    <div className="relative min-h-[480px] h-full w-full overflow-hidden bg-[#e8eee6]">
      <iframe
        title={`${siteConfig.name} on Pearl Street, Boulder`}
        src={siteConfig.mapsEmbedUrl}
        className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
