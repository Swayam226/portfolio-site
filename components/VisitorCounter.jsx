"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <span className="text-info text-sm">
      {count !== null ? `Visitors: ${count}` : "…"}
    </span>
  );
}
