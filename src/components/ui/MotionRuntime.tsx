"use client";

import { useEffect } from "react";

/**
 * Motor único de movimento da página, sem dependências:
 * - observa cada elemento [data-observe] e adiciona a classe `in` quando entra em cena;
 * - pausa todas as animações CSS quando a aba fica oculta;
 * - com `prefers-reduced-motion`, marca tudo como visível imediatamente.
 */
export function MotionRuntime() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-observe]"),
    );

    let observer: IntersectionObserver | null = null;

    const pinAll = () => {
      targets.forEach((el) => el.classList.add("in"));
      observer?.disconnect();
      observer = null;
    };

    const arm = () => {
      if (observer) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );
      targets.forEach((el) => {
        if (!el.classList.contains("in")) observer?.observe(el);
      });
    };

    if (reduce.matches) pinAll();
    else arm();

    const onReduceChange = (e: MediaQueryListEvent) => {
      if (e.matches) pinAll();
      else arm();
    };
    reduce.addEventListener("change", onReduceChange);

    const onVisibility = () => {
      document.body.classList.toggle("paused", document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer?.disconnect();
      reduce.removeEventListener("change", onReduceChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
