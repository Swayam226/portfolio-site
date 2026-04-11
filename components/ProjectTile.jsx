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
}) {
  return (
    <div
      className={`${bgColor} ${height} ${width} rounded-md p-2 border border-[#3f3f3f]`}
    >
      <div className="w-full h-6/9 rounded-lg p-2 relative">
        <Image src={src} alt={alt} className="object-cover" fill />
      </div>
      <div className="w-full h-3/9 rounded-lg flex flex-col gap-2">
        <h1 className="text-heading pt-2 text-md">{text}</h1>
        <span className="text-info text-xs pt-1">{langtext}</span>
        <ProjButton
          livelink="https://dr-maya-therapist.vercel.app/"
          repolink="https://github.com/Swayam226/therapist-profile"
        />
      </div>
    </div>
  );
}
