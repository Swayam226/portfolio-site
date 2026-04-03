import Link from "next/link";
import { Sun } from "lucide-react";
import Image from "next/image";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { EnvelopeIcon, ReadCvLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import SocialLogo from "@/components/SocialLogo";

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
            <main className="px-8 py-10 flex flex-col gap-4 min-h-screen">

              {/* name + image + headings */}
              <div className="h-50 flex flex-row justify-start gap-8 items-center border-b border-[#353535E6] pb-6">
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
                  <div className="font-body text-body text-md">21 · Front-End Engineer · Developer</div>
                  <div className="font-body text-white text-sm">
                    <a
                      href="https://drive.google.com/file/d/1Upi1RJG9Ae8saBYFlg9p9eBtaWc4qps2/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-30 button-border rounded-sm flex flex-row justify-center items-center gap-2"
                    >
                      <ReadCvLogoIcon size={18} className="text-white" />
                      Resume / CV
                    </a>
                  </div>
                </div>
              </div>

              {/* socials */}
              <div className="flex flex-col gap-2 justify-start pb-5.5 border-b border-[#353535E6]">
                <h1 className="font-heading text-heading text-3xl pb-2">Connect with Me</h1>
                <div className="flex flex-row gap-2">
                  <SocialLogo href="https://github.com/Swayam226" text="GitHub" icon={GithubLogoIcon} />
                  <SocialLogo href="https://www.linkedin.com/in/swayamkumar226/" text="LinkedIn" icon={LinkedinLogoIcon} />
                  <SocialLogo href="https://x.com/SwayamXDev" text="Twitter" icon={XLogoIcon} />
                  <SocialLogo href="mailto:swayamkumar226@gmail.com" text="Mail" icon={EnvelopeIcon} />
                </div>
              </div>

              {/* intro + tldr */}
              <div className="flex flex-col gap-2 justify-start pb-5.5 border-b border-[#353535E6]">
                <h1 className="font-heading text-heading text-3xl pb-2">Intro</h1>
                <span className="text-body text-md">
                  I&apos;m a <span className="text-heading">Front-End Developer</span> and <span className="text-heading">Designer</span> based in Bhubaneswar, Odisha.
                </span>
                <span className="font-body text-body text-md">
                  I build elegant and optimized web experiences using <span className="text-heading">react.js</span>, <span className="text-heading">next.js</span>, <span className="text-heading">tailwind css.</span>
                </span>
                <span>
                  highly invested in <span className="text-heading">science</span> and <span className="text-heading">tech</span> since childhood, along with Football.
                </span>
                <span>
                  a <span className="text-heading">computer</span> excites me and <span className="text-heading">programming</span> enables me.
                </span>
              </div>

              {/* github contri */}
              <div className="flex flex-col gap-2 justify-start pb-5.5 border-b border-[#353535E6]">

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