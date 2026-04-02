import Link from "next/link";
import { Sun } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-full max-w-4xl">

        {/* left pattern div */}
        <div className="w-18 border-style"></div>

        {/* central div starts here */}
        <div className="flex-1 max-w-3xl flex flex-col">

          {/* navbar code starts here */}
          <nav className="sticky top-0 w-full z-50 py-5 backdrop-blur-sm">
            <div className="px-6 min-w-3xl mx-auto h-9">
              <div className="flex text-body items-center justify-between h-full">
                <div className="h-full flex gap-5 items-center text-sm">
                  <Link href="/">Home</Link>
                  <Link href="/projects">Projects</Link>
                  <Link href="/blogs">Blogs</Link>
                </div>
                <div className="h-full flex gap-5 items-center cursor-pointer">
                  <Sun size={16} />
                </div>
              </div>
            </div>
          </nav>

          <div className="flex flex-col">
            <main className="px-6 py-10 flex flex-col min-h-screen">
              <div className="h-40 flex flex-row justify-start gap-8 items-center">
                <div className="rounded-full h-34 w-34 relative overflow-hidden">
                  <Image
                    src="/silver_surfer.jpg"
                    alt="image of silver surfer - display picture of mine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-heading text-heading text-4xl italic">Swayam Kumar</h1>
                  <span className="font-body text-body text-sm">21 · Front-End Engineer · Developer</span>
                </div>
              </div>
            </main>
          </div>
        </div>


        {/* right pattern div */}
        <div className="w-18 border-style"></div>

      </div>
    </div>
  );
}
