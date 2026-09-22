"use client";

import { useId, useState } from "react";
import { PlusIcon } from "./Icons";
import styles from "./Accordion.module.css";

type Item = { title: string; body: string };

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: readonly Item[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={item.title} className={styles.item} data-open={isOpen}>
            <h4 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={`mono ${styles.index}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  <PlusIcon />
                </span>
              </button>
            </h4>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <div className={styles.panelInner}>
                <p className={styles.body}>{item.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
