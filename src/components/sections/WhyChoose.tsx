import Image from "next/image";
import { whyChoose } from "@/content/site";
import styles from "./WhyChoose.module.css";

export function WhyChoose() {
  return (
    <section
      id="por-que"
      className={`theme-dark section ${styles.why}`}
      data-observe
      aria-labelledby="why-title"
    >
      <div className={`container ${styles.head}`}>
        <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
          {whyChoose.kicker}
        </p>
        <h2 id="why-title" className={`display h-lg ${styles.title}`} data-reveal style={{ ["--i" as string]: 1 }}>
          Especialização de verdade, <em>atendimento de perto</em>.
        </h2>
      </div>

      <div className={`container ${styles.body}`}>
        <figure className={styles.figure} data-reveal="scale" style={{ ["--i" as string]: 2 }}>
          <div className={`img-reveal ${styles.frame}`}>
            <Image
              src="/images/luana-ribeiro-sofa.jpg"
              alt={whyChoose.photoAlt}
              fill
              quality={82}
              sizes="(max-width: 1023px) 92vw, 32vw"
              className={styles.img}
            />
          </div>
          <figcaption className={`mono ${styles.caption}`}>{whyChoose.photoCaption}</figcaption>
        </figure>

      <ol className={styles.ledger}>
        {whyChoose.reasons.map((r, i) => (
          <li key={r.title} className={styles.row} data-reveal style={{ ["--i" as string]: i + 2 }}>
            <span className={styles.rowLine} aria-hidden="true" />
            <span className={`mono ${styles.rowIndex}`}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={`display ${styles.rowTitle}`}>{r.title}</h3>
            <p className={styles.rowBody}>{r.body}</p>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
