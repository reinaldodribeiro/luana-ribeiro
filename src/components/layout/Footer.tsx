import { cta, firm, footer, links, nav } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`theme-dark ${styles.footer}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={`display ${styles.name}`}>
            Luana <em>Ribeiro</em>
          </p>
          <p className={styles.tagline}>{footer.tagline}</p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <WhatsAppIcon className="btn-icon" style={{ width: 18, height: 18 }} />
            {cta.short}
          </a>
        </div>

        <nav className={styles.col} aria-label="Navegação do rodapé">
          <p className={`mono ${styles.colTitle}`}>Navegação</p>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-line">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={`mono ${styles.colTitle}`}>Contato</p>
          <ul className={styles.list}>
            <li>
              <a href={links.phone} className="link-line">
                {firm.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={links.email} className={`link-line ${styles.email}`}>
                {firm.email}
              </a>
            </li>
            <li>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.address}
              >
                {firm.address.street}
                <br />
                {firm.address.neighborhood}
                <br />
                {firm.address.city}, {firm.address.state}. CEP {firm.address.postalCode}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={`mono ${styles.legal}`}>
          © {year} {footer.legal}
        </p>
        <p className={styles.notice}>{footer.notice}</p>
      </div>
    </footer>
  );
}
