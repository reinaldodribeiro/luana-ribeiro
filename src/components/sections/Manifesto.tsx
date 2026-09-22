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

        <div className={`draw-line ${styles.rule}`} aria-hidden="true" />

        <ul className={styles.audiences}>
          {manifesto.audiences.map((a, i) => (
            <li key={a} data-reveal style={{ ["--i" as string]: i + 3 }}>
              <span className={`mono ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.audience}>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
