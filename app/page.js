import Link from "next/link";
import { Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto flex flex-col border-style">
      <nav className="sticky top-0 w-full z-50 py-5 backdrop-blur-sm">
        <div className="px-5 min-w-4xl mx-auto h-9">
          <div className="flex text-heading items-center justify-between h-full">
            <div className="h-full flex gap-5 items-center">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
            <div className="h-full flex gap-5 items-center cursor-pointer">
              <Sun size={18} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
