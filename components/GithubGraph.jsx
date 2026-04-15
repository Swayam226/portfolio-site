"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="text-sm text-info">Loading Contributions...</div>
    ),
  },
);

export default function GithubGraph() {
  return (
    <GitHubCalendar
      username="swayam226"
      year={2026}
      blockSize={10}
      blockMargin={3}
      fontSize={12}
      theme={{
        dark: ["#2a2a2a", "#ffffff"],
        light: ["#e4e4e7", "#18181b"],
      }}
    />
  );
}
