"use client";

import { useEffect, useRef, useState } from "react";
import { cta, links } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./WhatsAppFloat.module.css";

/**
 * Botão flutuante de WhatsApp. Só aparece depois que o visitante passa do
 * hero (o hero já tem o CTA principal) e se recolhe enquanto a seção de
 * CTA final ou o contato estão na tela, para nunca cobrir um botão maior.
 */
export function WhatsAppFloat() {
  const [pastHero, setPastHero] = useState(false);
  const [suppressed, setSuppressed] = useState(false);
  const visibleBlockers = useRef(new Set<Element>());

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const blockers = ["cta-final", "contato"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const heroObs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (hero) heroObs.observe(hero);

    const blockObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visibleBlockers.current.add(e.target);
          else visibleBlockers.current.delete(e.target);
        }
        setSuppressed(visibleBlockers.current.size > 0);
      },
      // conta apenas o que entra nos 45% inferiores da tela, onde o botão fica
      { rootMargin: "-55% 0px 0px 0px", threshold: 0 },
    );
    blockers.forEach((el) => blockObs.observe(el));

    return () => {
      heroObs.disconnect();
      blockObs.disconnect();
    };
  }, []);

  const show = pastHero && !suppressed;

  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      data-show={show}
      aria-label={`${cta.short} pelo WhatsApp`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span className={styles.halo} aria-hidden="true" />
      <WhatsAppIcon className={styles.icon} />
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
}
