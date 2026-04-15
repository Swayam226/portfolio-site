import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProjButton(props) {
  return (
    <div className="flex flex-row gap-2 pt-5">
      <Link
        href={props.livelink}
        target="_blank"
        className="w-16 h-7 border-2 rounded-2xl text-xs text-green-500 flex items-center justify-center transition"
        style={{ borderColor: "var(--border-strong)" }}
      >
        <span className="dot-live"></span>Visit
      </Link>
      <Link
        href={props.repolink}
        target="_blank"
        className="w-28 h-7 border-2 rounded-2xl text-xs text-info flex gap-2 items-center justify-center transition duration-300 hover:scale-105"
        style={{ borderColor: "var(--border-strong)" }}
      >
        GitHub Repo
        <ArrowUpRightIcon size={12} />
      </Link>
    </div>
  );
}
