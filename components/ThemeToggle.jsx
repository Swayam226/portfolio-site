"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return <div className="w-4 h-4" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      {resolvedTheme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
