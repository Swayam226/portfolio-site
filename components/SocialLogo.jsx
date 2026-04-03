// import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function SocialLogo({ href, text, icon: Icon }) {
  return (
    <>
      {/* each social container */}
      <div className="relative group w-fit">
        <div className="h-7 w-7 flex items-center justify-start ">
          <a href={href} target="_blank" rel="noopener noreferrer">
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
              {text}
            </span>
            <Icon size={22} className="text-info" />
          </a>
        </div>
      </div>
    </>
  );
}
