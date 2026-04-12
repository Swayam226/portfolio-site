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
      className={`${bgColor} group w-full rounded-md p-2 border border-[#3f3f3f] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30`}
    >
      <div className="w-full h-6/9 rounded-lg p-2 relative">
        <Image
          src={src}
          alt={alt}
          className="object-cover
          transition-transform duration-300
          group-hover:scale-105"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
      </div>
      <div className="w-full h-3/9 rounded-lg flex flex-col gap-1">
        <h1 className="text-heading text-md font-medium pt-2">{text}</h1>
        <span className="text-info text-xs">{langtext}</span>
        <ProjButton livelink={livelink} repolink={repolink} />
      </div>
    </div>
  );
}
