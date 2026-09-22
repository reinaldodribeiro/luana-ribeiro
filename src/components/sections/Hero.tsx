import Image from "next/image";
import { cta, firm, hero, links } from "@/content/site";
import { ArrowDownIcon, WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={`theme-dark ${styles.hero}`} data-observe>
      <div className={`glow ${styles.glow}`} aria-hidden="true" />

      <div className={styles.portrait}>
        <Image
          src="/images/luana-ribeiro-retrato.jpg"
          alt={hero.portraitAlt}
          fill
          loading="eager"
          fetchPriority="high"
          quality={82}
          sizes="(max-width: 1023px) 100vw, 46vw"
          className={styles.portraitImg}
        />
      </div>

      <div className={`container ${styles.content}`}>
        <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
          {hero.eyebrow}
        </p>

        <h1 className={`display ${styles.title}`}>
          <span className={styles.lineA} data-reveal style={{ ["--i" as string]: 1 }}>
            Seu{" "}
            <em className={styles.mark}>
              salário
              <svg
                className={styles.stroke}
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 9 C 50 3, 120 13, 197 6" pathLength="1" />
              </svg>
            </em>{" "}
            não pode ser engolido pelas dívidas.
          </span>
          <span className={styles.lineB} data-reveal style={{ ["--i" as string]: 2 }}>
            Seu trabalho tem <em>direitos</em> que não podem ser esquecidos.
          </span>
        </h1>

        <p className={`lede ${styles.sub}`} data-reveal style={{ ["--i" as string]: 3 }}>
          {hero.subtitle}
        </p>

        <div className={styles.ctas} data-reveal style={{ ["--i" as string]: 4 }}>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <WhatsAppIcon className="btn-icon" />
            {cta.primary}
          </a>
          <a href="#areas" className="btn btn-ghost btn-lg">
            {cta.secondary}
          </a>
        </div>
      </div>

      <div className={`container ${styles.foot}`} data-reveal="fade" style={{ ["--i" as string]: 6 }}>
        <a href="#escritorio" className={`mono ${styles.scrollHint}`}>
          <ArrowDownIcon className={styles.scrollIcon} />
          Conheça o escritório
        </a>
        <p className={`mono ${styles.place}`}>
          {firm.neighborhood} · {firm.city}, {firm.state}
        </p>
      </div>
    </section>
  );
}
