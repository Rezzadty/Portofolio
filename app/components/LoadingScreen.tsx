"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ width: 50, height: 50, animation: "loader-orbit 2s ease-in-out infinite" }}>
          <div className="loading-spinner"></div>
        </div>
        <p className="text-gray-400 text-lg font-medium">Loading Portfolio...</p>
      </div>
    </div>
  );
}
