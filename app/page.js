import Link from "next/link";
import { Sun } from "lucide-react";
import Image from "next/image";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { EnvelopeIcon, ReadCvLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import SocialLogo from "@/components/SocialLogo";
import GithubGraph from "@/components/GithubGraph";
import ProjectTile from "@/components/ProjectTile";
import SkillTablet from "@/components/SkillTablet";
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql, SiNodedotjs, SiJavascript, SiPostman, SiMysql, SiShadcnui, SiCplusplus, SiBun, SiPython, SiGnubash, SiLinux, SiGit, SiGithub, SiFigma, SiVercel } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import KeyboardKeyWrapper from "@/components/KeyboardKeyWrapper";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <KeyboardKeyWrapper />
      <div className="min-h-screen flex justify-center">
        <div className="flex w-full max-w-4xl">

          {/* left pattern div */}
          <div className="hidden md:block w-14 border-style bg-dot-grid"></div>

          {/* central div starts here */}
          <div className="flex-1 w-full md:max-w-3xl flex flex-col">

            {/* navbar code starts here */}
            <nav className="sticky top-0 w-full z-50 py-5 backdrop-blur-sm">
              <div className="px-4 md:px-8 mx-auto h-9">
                <div className="flex text-body items-center justify-between h-full">
                  <div className="h-full flex gap-3 md:gap-5 items-center text-xs md:text-sm">
                    <Link className="text-shadow-2xs" href="#tldr"><span className="hidden sm:inline">[ t ] </span>tldr.</Link>
                    <Link className="text-shadow-2xs" href="#projects"><span className="hidden sm:inline">[ p ] </span>Projects</Link>
                    <Link className="text-shadow-2xs" href="#skills"><span className="hidden sm:inline">[ s ] </span>Skills</Link>
                    <Link className="text-shadow-2xs" href="#connect"><span className="hidden sm:inline">[ c ] </span>Connect</Link>
                  </div>
                  <div className="h-full flex gap-5 items-center cursor-pointer">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex flex-col">
              <main className="px-4 md:px-8 pt-10 pb-4 flex flex-col gap-4 min-h-screen">

                {/* name + image + headings */}
                <div className="flex flex-col sm:flex-row justify-start gap-6 md:gap-8 items-start md:items-start border-b border-style pb-6">
                  <div className="rounded-full h-24 w-24 md:h-34 md:w-34 shrink-0 relative overflow-hidden">
                    <Image
                      src="/silver_surfer.jpg"
                      alt="image of silver surfer - display picture of mine"
                      fill
                      sizes="136px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col gap-2">
                      <h1 className="font-heading text-heading text-2xl md:text-4xl italic">Swayam Kumar</h1>
                      <div className="font-body text-body text-sm md:text-md">21 · Front-End Engineer · Developer</div>
                      <div className="font-body text-foreground text-sm">
                        <a
                          href="https://drive.google.com/file/d/1Upi1RJG9Ae8saBYFlg9p9eBtaWc4qps2/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-30 button-border shadow-md rounded-sm flex flex-row justify-center items-center gap-2"
                        >
                          <ReadCvLogoIcon size={18} className="text-foreground" />
                          Resume / CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* intro + tldr */}
                <div id="tldr" className="scroll-mt-20 flex flex-col gap-2 justify-start pb-5.5 border-b border-style">
                  <h1 className="font-heading text-heading text-3xl pb-2">tldr.</h1>
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
                <div className="flex flex-col gap-2 justify-start pb-5.5 border-b border-style">
                  <h1 className="font-heading text-heading text-3xl pb-4">GitHub Activities</h1>
                  <GithubGraph />
                </div>


                {/* projects */}
                <div id="projects" className="scroll-mt-20 flex flex-col gap-2 justify-start pb-5.5 border-b border-style">
                  <h1 className="font-heading text-heading text-3xl pb-4">Proof of Work</h1>
                  <div className="py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <ProjectTile
                        bgColor="bg-tile"
                        text="Landing for a fictional therapist's site"
                        src="/proj-1-cover.webp"
                        alt="Landing Page of a fictional therapist's profile site"
                        langtext="Next.js · Tailwind CSS · Motion"
                        livelink="https://dr-maya-therapist.vercel.app/"
                        repolink="https://github.com/Swayam226/therapist-profile"
                      />
                      <ProjectTile
                        bgColor="bg-tile"
                        text="Blog Haven - Full Stack CRUD App"
                        src="/blog-cover.png"
                        alt="Blog Haven - Full Stack CRUD App"
                        langtext="Next.js · MongoDB · Tailwind CSS · Motion"
                        livelink="https://blog-haven-sk.vercel.app/"
                        repolink="https://github.com/Swayam226/crud-blog"
                      />
                      <ProjectTile
                        bgColor="bg-tile"
                        text="Beware of Assembly - Word Guessing Game"
                        src="/assembly-cover.png"
                        alt="Beware of Assembly - Word Guessing Game"
                        langtext="React.js · Tailwind CSS"
                        livelink="https://assemby-endgame.vercel.app/"
                        repolink="https://github.com/Swayam226/assembly-endgame"
                      />
                      <ProjectTile
                        bgColor="bg-tile"
                        text="AI Recipe Generator"
                        src="/recipe-cover.png"
                        alt="AI Recipe Generator website"
                        langtext="React.js · Tailwind CSS · Gemini API"
                        livelink="https://recipe-generator-zenith.vercel.app/"
                        repolink="https://github.com/Swayam226/recipe-generator"
                      />
                    </div>
                  </div>
                </div>

                {/*skills tablets*/}
                <div id="skills" className="scroll-mt-20 flex flex-col gap-2 justify-start pb-5.5 border-b border-style">
                  <h1 className="font-heading text-heading text-3xl pb-4">Tech I Work With</h1>
                  <div className="flex flex-wrap gap-3 items-center justify-between">
                    <SkillTablet skillText="Next.js" logo={SiNextdotjs} />
                    <SkillTablet skillText="React.js" logo={SiReact} />
                    <SkillTablet skillText="MongoDB" logo={SiMongodb} />
                    <SkillTablet skillText="PostgreSQL" logo={SiPostgresql} />
                    <SkillTablet skillText="Firebase" logo={SiFirebase} />
                    <SkillTablet skillText="Node" logo={SiNodedotjs} />
                    <SkillTablet skillText="Bun" logo={SiBun} />
                    <SkillTablet skillText="Tailwind" logo={SiTailwindcss} />
                    <SkillTablet skillText="Javascript" logo={SiJavascript} />
                    <SkillTablet skillText="Postman" logo={SiPostman} />
                    <SkillTablet skillText="MySQL" logo={SiMysql} />
                    <SkillTablet skillText="Shadcn" logo={SiShadcnui} />
                    <SkillTablet skillText="C/C++" logo={SiCplusplus} />
                    <SkillTablet skillText="Java" logo={FaJava} />
                    <SkillTablet skillText="Python" logo={SiPython} />
                    <SkillTablet skillText="Linux" logo={SiLinux} />
                    <SkillTablet skillText="Bash" logo={SiGnubash} />
                    <SkillTablet skillText="Git" logo={SiGit} />
                    <SkillTablet skillText="GitHub" logo={SiGithub} />
                    <SkillTablet skillText="Figma" logo={SiFigma} />
                    {/* <SkillTablet skillText="Vercel" logo={SiVercel} /> */}
                  </div>
                </div>


                {/* socials */}
                <div id="connect" className="scroll-mt-20 flex flex-col gap-2 justify-start pb-5.5 border-b border-style">
                  <h1 className="font-heading text-heading text-3xl pb-2">Connect with Me</h1>
                  <div className="flex flex-row gap-4">
                    <SocialLogo href="https://github.com/Swayam226" text="GitHub" icon={GithubLogoIcon} />
                    <SocialLogo href="https://www.linkedin.com/in/swayamkumar226/" text="LinkedIn" icon={LinkedinLogoIcon} />
                    <SocialLogo href="https://x.com/SwayamXDev" text="Twitter" icon={XLogoIcon} />
                    <SocialLogo href="mailto:swayamkumar226@gmail.com" text="Mail" icon={EnvelopeIcon} />
                  </div>
                </div>

                <div>
                  <span className="text-sm text-info">© 2026 Swayam Kumar. All rights reserved.</span>
                </div>
              </main>
            </div>
          </div >

          {/* right pattern div */}
          < div className="hidden md:block w-14 border-style bg-dot-grid" ></div >
        </div >
      </div >
    </>
  );
}