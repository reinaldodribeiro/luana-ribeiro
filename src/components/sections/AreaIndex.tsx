"use client";

import { useEffect, useState } from "react";
import styles from "./PracticeAreas.module.css";

type Item = { id: string; index: string; title: string };

/** Índice lateral das áreas: fixo na rolagem em telas largas, destaca a área em cena. */
export function AreaIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const ratios = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.set(e.target.id, e.intersectionRatio);
        let best = "";
        let bestRatio = 0;
        for (const [id, r] of ratios) {
          if (r > bestRatio) {
            best = id;
            bestRatio = r;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className={styles.index} aria-label="Índice das áreas de atuação">
      <ol className={styles.indexList}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={styles.indexLink}
              data-active={active === item.id}
              aria-current={active === item.id ? "true" : undefined}
            >
              <span className={`mono ${styles.indexNum}`}>{item.index}</span>
              <span className={styles.indexTitle}>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
