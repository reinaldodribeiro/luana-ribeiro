import Image from "next/image";
import { manifesto } from "@/content/site";
import styles from "./Manifesto.module.css";

export function Manifesto() {
  return (
    <section className={`theme-dark section ${styles.manifesto}`} data-observe aria-labelledby="manifesto-title">
      <div className="container">
        <div className={styles.head}>
          <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
            Quem defendemos
          </p>
        </div>

        <h2 id="manifesto-title" className={`display ${styles.line}`} data-reveal style={{ ["--i" as string]: 1 }}>
          Defendemos quem <em>sustenta o país</em> com o próprio trabalho.
        </h2>

        <ul className={styles.triptych}>
          {manifesto.portraits.map((p, i) => (
            <li key={p.src} className={styles.panel} data-reveal="scale" style={{ ["--i" as string]: i + 2 }}>
              <div className={`img-reveal ${styles.frame}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={70}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 30vw, 420px"
                  className={styles.img}
                />
                <span className={styles.tint} aria-hidden="true" />
              </div>
              <p className={styles.panelLabel}>
                <span className={`mono ${styles.panelIndex}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`display ${styles.panelTitle}`}>{p.label}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className={`draw-line ${styles.rule}`} aria-hidden="true" />

        <ul className={styles.audiences}>
          {manifesto.audiences.map((a, i) => (
            <li key={a} data-reveal style={{ ["--i" as string]: i + 5 }}>
              <span className={`mono ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.audience}>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
