import Link from "next/link";
import { Sun } from "lucide-react";
import Image from "next/image";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { EnvelopeIcon, PaperclipIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-full max-w-4xl">

        {/* left pattern div */}
        <div className="w-18 border-style bg-dot-grid"></div>

        {/* central div starts here */}
        <div className="flex-1 max-w-3xl flex flex-col">

          {/* navbar code starts here */}
          <nav className="sticky top-0 w-full z-50 py-5 backdrop-blur-sm">
            <div className="px-8 min-w-3xl mx-auto h-9">
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
            <main className="px-8 py-10 flex flex-col min-h-screen">
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
                  <div className="font-body text-body text-sm">21 · Front-End Engineer · Developer</div>
                  <div className="flex flex-row gap-2">

                    {/* each social container */}
                    <div className="relative group w-fit">
                      <div className="h-7 w-7 flex items-center justify-start ">
                        <a
                          href="https://github.com/Swayam226"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubLogoIcon size={18} className="text-info" />

                        </a>
                      </div>
                      {/* Tooltip */}
                      <span
                        className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2
    text-xs px-2 py-1 rounded-md
    bg-background border border-neutral-700
    text-info
    opacity-0 group-hover:opacity-100
    transition duration-200
    pointer-events-none
    whitespace-nowrap
  "
                      >
                        GitHub
                      </span>
                    </div>


                    {/* each social container */}
                    <div className="relative group w-fit">
                      <div className="h-7 w-7 flex items-center justify-start ">
                        <a
                          href="https://github.com/Swayam226"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinLogoIcon size={18} className="text-info" />

                        </a>
                      </div>
                      {/* Tooltip */}
                      <span
                        className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2
    text-xs px-2 py-1 rounded-md
    bg-background border border-neutral-700
    text-info
    opacity-0 group-hover:opacity-100
    transition duration-200
    pointer-events-none
    whitespace-nowrap
  "
                      >
                        LinkedIn
                      </span>
                    </div>
                    {/* each social container */}
                    <div className="relative group w-fit">
                      <div className="h-7 w-7 flex items-center justify-start ">
                        <a
                          href="https://github.com/Swayam226"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <XLogoIcon size={18} className="text-info" />

                        </a>
                      </div>
                      {/* Tooltip */}
                      <span
                        className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2
    text-xs px-2 py-1 rounded-md
    bg-background border border-neutral-700
    text-info
    opacity-0 group-hover:opacity-100
    transition duration-200
    pointer-events-none
    whitespace-nowrap
  "
                      >
                        Twitter
                      </span>
                    </div>
                    {/* each social container */}
                    <div className="relative group w-fit">
                      <div className="h-7 w-7 flex items-center justify-start ">
                        <a
                          href="https://github.com/Swayam226"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <EnvelopeIcon size={18} className="text-info" />

                        </a>
                      </div>
                      {/* Tooltip */}
                      <span
                        className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2
    text-xs px-2 py-1 rounded-md
    bg-background border border-neutral-700
    text-info
    opacity-0 group-hover:opacity-100
    transition duration-200
    pointer-events-none
    whitespace-nowrap
  "
                      >
                        Mail
                      </span>
                    </div>
                    {/* each social container */}
                    <div className="relative group w-fit">
                      <div className="h-7 w-7 flex items-center justify-start ">
                        <a
                          href="https://github.com/Swayam226"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PaperclipIcon size={18} className="text-info" />

                        </a>
                      </div>
                      {/* Tooltip */}
                      <span
                        className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2
    text-xs px-2 py-1 rounded-md
    bg-background border border-neutral-700
    text-info
    opacity-0 group-hover:opacity-90
    transition duration-400
    pointer-events-none
    whitespace-nowrap
  "
                      >
                        Resume
                      </span>
                    </div>
                  </div>
                  <span className="font-body text-body text-sm">I build beautiful web experiences using <span className="text-heading">react.js</span>, <span className="text-heading">next.js</span>, <span className="text-heading">tailwind css</span></span>
                </div>
              </div>
            </main>
          </div>
        </div>


        {/* right pattern div */}
        <div className="w-18 border-style bg-dot-grid"></div>

      </div>
    </div>
  );
}
