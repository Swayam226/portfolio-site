import Image from "next/image";
import ProjButton from "./ProjButton";

export default function ProjectTile({
  bgColor,
  height,
  width,
  text,
  src,
  alt,
  langtext,
  livelink,
  repolink,
}) {
  return (
    <div
      className={`${bgColor} group w-full rounded-md p-2 border transition-all duration-300 hover:-translate-y-1 shadow-md`}
      style={{ borderColor: "var(--border-strong)" }}
    >
      <div className="w-full h-60 md:h-52 rounded-lg p-2 relative">
        <Image
          src={src}
          alt={alt}
          className="object-cover
          transition-transform duration-300
          group-hover:scale-102 rounded-md"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 transition duration-300 rounded-md"
          style={{ backgroundColor: "var(--hover-overlay)" }}
        />
      </div>
      <div className="w-full rounded-lg flex flex-col gap-1">
        <h1 className="text-heading text-md font-medium pt-2">{text}</h1>
        <span className="text-info text-xs">{langtext}</span>
        <ProjButton livelink={livelink} repolink={repolink} />
      </div>
    </div>
  );
}
