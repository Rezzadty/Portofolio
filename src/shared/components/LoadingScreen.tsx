"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${!isLoading ? "hidden" : ""}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="loading-spinner" />
        <p className="text-gray-400 text-sm font-medium tracking-wide">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
