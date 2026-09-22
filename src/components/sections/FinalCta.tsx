import Image from "next/image";
import { cta, finalCta, firm, links } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className={`section ${styles.cta}`}
      data-observe
      aria-labelledby="cta-title"
    >
      <div className={`glow ${styles.glow}`} aria-hidden="true" />
      <div className={styles.photo}>
        <Image
          src="/images/luana-ribeiro-mesa.jpg"
          alt={finalCta.photoAlt}
          fill
          quality={82}
          sizes="(max-width: 1023px) 100vw, 44vw"
          className={styles.photoImg}
        />
      </div>
      <div className={`container ${styles.inner}`}>
        <h2 id="cta-title" className={`display ${styles.title}`} data-reveal style={{ ["--i" as string]: 0 }}>
          Sua renda e seus direitos <em>não podem esperar</em>.
        </h2>
        <p className={`lede ${styles.body}`} data-reveal style={{ ["--i" as string]: 1 }}>
          {finalCta.body}
        </p>
        <div className={styles.actions} data-reveal style={{ ["--i" as string]: 2 }}>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-lg ${styles.button}`}
          >
            <WhatsAppIcon className="btn-icon" style={{ width: 22, height: 22 }} />
            {cta.primary}
          </a>
          <a href={links.phone} className={`mono ${styles.phone}`}>
            ou ligue: {firm.phoneDisplay}
          </a>
        </div>
        <p className={`mono ${styles.hint}`} data-reveal="fade" style={{ ["--i" as string]: 3 }}>
          {finalCta.whatsappHint}
        </p>
      </div>
    </section>
  );
}
