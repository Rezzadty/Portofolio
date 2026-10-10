"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "fading" | "done";

export function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Resolves when the page (fonts, images, JS) has fully loaded
    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });

    // Safety net: never wait more than 4s for the load event
    const loadTimeout = new Promise<void>((resolve) => {
      timers.push(setTimeout(resolve, 4000));
    });

    // Always show the loader at least 1s so it never flashes by
    const minDisplay = new Promise<void>((resolve) => {
      timers.push(setTimeout(resolve, 1000));
    });

    Promise.all([minDisplay, Promise.race([pageLoaded, loadTimeout])]).then(() => {
      setPhase("fading"); // adds .hidden → CSS fade-out plays
      timers.push(setTimeout(() => setPhase("done"), 600)); // unmount after fade (0.5s + buffer)
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // Prevent scrolling while the loader is visible
  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`loading-screen ${phase === "fading" ? "hidden" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="loading-spinner" />
        <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}