import { practiceAreas } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { AreaIndex } from "./AreaIndex";
import styles from "./PracticeAreas.module.css";

export function PracticeAreas() {
  return (
    <section
      id="areas"
      className={`theme-light section ${styles.areas}`}
      aria-labelledby="areas-title"
    >
      <div className={`container ${styles.head}`} data-observe>
        <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
          Áreas de atuação
        </p>
        <h2 id="areas-title" className={`display h-lg ${styles.title}`} data-reveal style={{ ["--i" as string]: 1 }}>
          Cinco frentes, <em>uma</em> defesa.
        </h2>
      </div>

      <div className={`container ${styles.grid}`}>
        <AreaIndex
          items={practiceAreas.map((a) => ({ id: a.id, index: a.index, title: a.title }))}
        />

        <div className={styles.list}>
          {practiceAreas.map((area) => (
            <article
              key={area.id}
              id={area.id}
              className={styles.area}
              data-observe
              data-area
              aria-labelledby={`${area.id}-title`}
            >
              <span className={`display ${styles.bigIndex}`} aria-hidden="true">
                {area.index}
              </span>
              <header className={styles.areaHead}>
                <p className={`mono ${styles.areaIndex}`} data-reveal="fade">
                  {area.index}
                  {area.subtitle ? <span className={styles.areaSub}> · {area.subtitle}</span> : null}
                </p>
                <h3 id={`${area.id}-title`} className={`display h-md ${styles.areaTitle}`} data-reveal style={{ ["--i" as string]: 1 }}>
                  {area.title}
                </h3>
              </header>
              <p className={`body-copy ${styles.areaBody}`} data-reveal style={{ ["--i" as string]: 2 }}>
                {area.body}
              </p>

              {area.items ? (
                <div className={styles.items} data-reveal style={{ ["--i" as string]: 3 }}>
                  <p className={`mono ${styles.itemsLabel}`}>Atuação</p>
                  <Accordion items={area.items} defaultOpen={0} />
                </div>
              ) : null}

              {area.bullets ? (
                <div className={styles.items} data-reveal style={{ ["--i" as string]: 3 }}>
                  <p className={`mono ${styles.itemsLabel}`}>Atuação</p>
                  <ul className={styles.bullets}>
                    {area.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
