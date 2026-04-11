import Link from "next/link";

export default function ProjButton() {
  return (
    <button className="w-20 h-26 border-2 border-[#373737] rounded-xl text-sm text-green-500 flex flex-row items-center justify-center">
      <Link href="https://dr-maya-therapist.vercel.app/">
        <span className="dot-live"></span>Live
      </Link>
    </button>
  );
}
