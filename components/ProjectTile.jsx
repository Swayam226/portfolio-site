import Image from "next/image";
import ProjButton from "./ProjButton";

export default function ProjectTile({
  bgColor,
  height,
  width,
  text,
  src,
  alt,
}) {
  return (
    <div
      className={`${bgColor} ${height} ${width} rounded-md p-2 border-2 border-[#3f3f3f]`}
    >
      <div className="w-full h-6/9 rounded-lg p-2 relative">
        <Image src={src} alt={alt} className="object-cover" fill />
      </div>
      <div className="w-full h-3/9 rounded-lg flex flex-col gap-2 p-2s">
        <h1 className="text-heading pt-4 text-md">{text}</h1>
        <span className="text-info text-xs">
          Next.js · Tailwind CSS · Motion
        </span>
        <ProjButton />
      </div>
    </div>
  );
}
