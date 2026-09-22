import Image from "next/image";
import { about } from "@/content/site";
import styles from "./AboutLawyer.module.css";

export function AboutLawyer() {
  return (
    <section
      id="escritorio"
      className={`theme-light section ${styles.about}`}
      data-observe
      aria-labelledby="about-title"
    >
      <div className={`container ${styles.grid}`}>
        <figure className={styles.figure}>
          <div className={`img-reveal ${styles.frame}`}>
            <Image
              src="/images/luana-ribeiro-escritorio.jpg"
              alt={about.photoAlt}
              fill
              quality={82}
              sizes="(max-width: 1023px) 92vw, 40vw"
              className={styles.img}
            />
          </div>
          <figcaption className={`display ${styles.quote}`} data-reveal style={{ ["--i" as string]: 3 }}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>
            {about.pullQuote}
          </figcaption>
        </figure>

        <div className={styles.text}>
          <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
            {about.kicker}
          </p>
          <h2 id="about-title" className={`display h-lg ${styles.title}`} data-reveal style={{ ["--i" as string]: 1 }}>
            Luana <em>Ribeiro</em>
          </h2>
          <div className={styles.paragraphs}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="body-copy" data-reveal style={{ ["--i" as string]: i + 2 }}>
                {p}
              </p>
            ))}
          </div>

          <dl className={styles.facts}>
            {about.facts.map((f, i) => (
              <div key={f.label} className={styles.fact} data-reveal style={{ ["--i" as string]: i + 4 }}>
                <dt className={`mono ${styles.factLabel}`}>{f.label}</dt>
                <dd className={`display ${styles.factValue}`}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
