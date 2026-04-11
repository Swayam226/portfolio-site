import Link from "next/link";

export default function ProjButton(props) {
  return (
    <div className="flex flex-row gap-2 pt-1">
      <button className="w-16 h-7 border-2 border-[#373737] rounded-2xl text-xs text-green-500 flex flex-row items-center justify-center">
        <Link href={props.livelink}>
          <span className="dot-live"></span>Live
        </Link>
      </button>
      <button className="w-28 h-7 border-2 border-[#373737] rounded-2xl text-xs text-info flex items-center justify-center hover:bg-[#2e2d2d] transition:bg-color 0.3s">
        <Link href={props.repolink}>GitHub Repo</Link>
      </button>
    </div>
  );
}
