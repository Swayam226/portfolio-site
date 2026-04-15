"use client";

import { useEffect } from "react";

export default function useKeyboardNav() {
  useEffect(() => {
    function handleKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      if (e.key === "t") {
        document.getElementById("tldr")?.scrollIntoView({
          behavior: "smooth",
        });
      }

      if (e.key === "p") {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      }
      if (e.key === "s") {
        document.getElementById("skills")?.scrollIntoView({
          behavior: "smooth",
        });
      }
      if (e.key === "c") {
        document.getElementById("connect")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
}
