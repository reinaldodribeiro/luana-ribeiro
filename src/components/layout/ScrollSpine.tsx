"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollSpine.module.css";

/**
 * A linha: elemento-assinatura do site. Uma linha vertical fina, na calha
 * esquerda, que se desenha conforme o visitante avança pela página, com um
 * marcador por seção. Só em telas largas; usa transform e escreve no DOM
 * apenas quando o valor muda.
 */
export function ScrollSpine({
  sections,
}: {
  sections: readonly { id: string; label: string }[];
}) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const root = rootRef.current;
    if (!fill || !root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1180px)");
    let last = -1;
    let raf = 0;
    let armed = false;

    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const dots = Array.from(root.querySelectorAll<HTMLElement>("[data-dot]"));

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (Math.abs(p - last) > 0.002) {
        last = p;
        fill.style.transform = `scaleY(${p})`;
      }
      const mid = window.scrollY + window.innerHeight * 0.45;
      let activeIdx = 0;
      targets.forEach((el, i) => {
        if (el.offsetTop <= mid) activeIdx = i;
      });
      dots.forEach((d, i) => {
        const on = i <= activeIdx;
        if ((d.dataset.on === "true") !== on) d.dataset.on = String(on);
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const arm = () => {
      if (armed) return;
      armed = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();
    };
    const disarm = () => {
      if (!armed) return;
      armed = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const pin = () => {
      disarm();
      fill.style.transform = "scaleY(1)";
      dots.forEach((d) => (d.dataset.on = "true"));
    };

    const apply = () => {
      if (!wide.matches) {
        disarm();
        return;
      }
      if (reduce.matches) pin();
      else {
        last = -1;
        arm();
      }
    };
    apply();
    reduce.addEventListener("change", apply);
    wide.addEventListener("change", apply);

    return () => {
      disarm();
      reduce.removeEventListener("change", apply);
      wide.removeEventListener("change", apply);
    };
  }, [sections]);

  return (
    <div ref={rootRef} className={styles.spine} aria-hidden="true">
      <span className={styles.track}>
        <span ref={fillRef} className={styles.fill} />
      </span>
      <ol className={styles.dots}>
        {sections.map((s) => (
          <li key={s.id} data-dot data-on="false" className={styles.dot}>
            <a href={`#${s.id}`} tabIndex={-1} className={styles.dotLink}>
              <span className={styles.dotLabel}>{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
