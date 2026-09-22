import { authority } from "@/content/site";
import styles from "./Authority.module.css";

/** Divide o parágrafo institucional em blocos legíveis sem alterar uma palavra. */
function splitParagraphs(text: string): string[] {
  const marks = [
    "No caso do servidor público",
    "E a defesa do servidor vai além",
    "Quem conhece a lei",
  ];
  const out: string[] = [];
  let rest = text;
  for (const m of marks) {
    const i = rest.indexOf(m);
    if (i > 0) {
      out.push(rest.slice(0, i).trim());
      rest = rest.slice(i);
    }
  }
  out.push(rest.trim());
  return out;
}

export function Authority() {
  const paragraphs = splitParagraphs(authority.body);
  const d = authority.diagram;

  return (
    <section
      id="lei"
      className={`theme-dark section ${styles.authority}`}
      data-observe
      aria-labelledby="authority-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
            {authority.kicker}
          </p>
          <h2 id="authority-title" className={`display h-lg ${styles.title}`} data-reveal style={{ ["--i" as string]: 1 }}>
            A lei desenha uma <em>linha</em>. Nós fazemos ela valer.
          </h2>
          <div className={styles.paragraphs}>
            {paragraphs.map((p, i) => (
              <p key={i} className="body-copy" data-reveal style={{ ["--i" as string]: i + 2 }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <figure className={styles.figure} data-reveal="scale" style={{ ["--i" as string]: 2 }}>
          <div className={styles.diagram} role="img" aria-label={`${d.caption} O salário aparece como uma coluna; os descontos e dívidas descem do topo e são contidos na linha que a lei protege, preservando o mínimo existencial na base.`}>
            <div className={styles.column}>
              <span className={`mono ${styles.labelTop}`}>{d.salary}</span>

              <div className={styles.debts}>
                <span className={`mono ${styles.labelDebts}`}>{d.debts}</span>
              </div>

              <div className={styles.limit}>
                <span className={styles.limitLine} />
                <span className={`mono ${styles.labelLimit}`}>{d.limit}</span>
              </div>

              <div className={styles.essential}>
                <span className={`mono ${styles.labelEssential}`}>{d.essential}</span>
              </div>
            </div>
          </div>
          <figcaption className={`mono ${styles.caption}`}>{d.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
