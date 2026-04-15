export default function SkillTablet({ skillText, logo: Logo }) {
  return (
    <div
      className="
    inline-flex items-center gap-2
    px-3 py-1.5
    border
    rounded-xl
    text-xs
    transition-transform duration-200
    hover:scale-105
    cursor-pointer
    shadow-md
    hover:shadow-lg
  "
      style={{ borderColor: "var(--border-strong)" }}
    >
      <Logo className="w-4 h-4" />
      <span>{skillText}</span>
    </div>
  );
}
