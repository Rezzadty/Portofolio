"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
}: IntersectionObserverInit = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold, root, rootMargin });

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, root, rootMargin]);

  return { ref, isVisible };
}
