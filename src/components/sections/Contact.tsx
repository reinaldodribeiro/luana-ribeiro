import Image from "next/image";
import { contact, firm } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      id="contato"
      className={`theme-light section ${styles.contact}`}
      data-observe
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="kicker" data-reveal="fade" style={{ ["--i" as string]: 0 }}>
            {contact.kicker}
          </p>
          <h2 id="contact-title" className={`display h-lg ${styles.title}`} data-reveal style={{ ["--i" as string]: 1 }}>
            Fale com o <em>escritório</em>.
          </h2>
          <p className="lede" data-reveal style={{ ["--i" as string]: 2 }}>
            {contact.intro}
          </p>
          <p className={`mono ${styles.cnpj}`} data-reveal="fade" style={{ ["--i" as string]: 3 }}>
            {firm.name} · CNPJ {firm.cnpj}
          </p>
          <div className={`img-reveal ${styles.photo}`} data-reveal="fade" style={{ ["--i" as string]: 4 }}>
            <Image
              src="/images/luana-ribeiro-celular.jpg"
              alt={contact.photoAlt}
              fill
              quality={82}
              sizes="(max-width: 1023px) 92vw, 30vw"
              className={styles.photoImg}
            />
          </div>
        </div>

        <ul className={styles.channels}>
          {contact.channels.map((c, i) => (
            <li key={c.id} data-reveal style={{ ["--i" as string]: i + 2 }}>
              <a
                href={c.href}
                className={styles.channel}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={`mono ${styles.channelLabel}`}>{c.label}</span>
                <span className={styles.channelValue}>{c.value}</span>
                <span className={styles.channelAction}>
                  {c.action}
                  <ArrowRightIcon className={styles.arrow} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
