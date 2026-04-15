"use client";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-info">Hang on! Loading Contributions...</div>
    ),
  },
);

export default function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="swayam226"
        year={2026}
        blockSize={10}
        blockMargin={3}
        fontSize={12}
        colorScheme={mounted ? resolvedTheme : "dark"}
        theme={{
          dark: ["#2a2a2a", "#404040", "#737373", "#a3a3a3", "#ffffff"],
          light: ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#52525b", "#18181b"],
        }}
      />
    </div>
  );
}
