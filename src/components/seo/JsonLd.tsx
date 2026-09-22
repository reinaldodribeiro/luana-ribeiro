import { firm, practiceAreas, SITE_URL } from "@/content/site";

/**
 * Dados estruturados (Schema.org). Apenas informações reais e fornecidas
 * pelo escritório: sem avaliações, prêmios, horários ou coordenadas inventadas.
 */
export function JsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#escritorio`,
    name: firm.name,
    alternateName: firm.shortName,
    url: SITE_URL,
    image: `${SITE_URL}/images/luana-ribeiro-retrato.jpg`,
    logo: `${SITE_URL}/icon.svg`,
    telephone: firm.phoneE164,
    email: firm.email,
    taxID: firm.cnpj,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      addressRegion: firm.address.state,
      postalCode: firm.address.postalCode,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Goiânia",
      containedInPlace: { "@type": "State", name: "Goiás" },
    },
    founder: {
      "@type": "Person",
      name: firm.lawyer,
      jobTitle: "Advogada",
      worksFor: { "@id": `${SITE_URL}/#escritorio` },
    },
    knowsAbout: practiceAreas.map((a) => a.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de atuação",
      itemListElement: practiceAreas.map((a) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: a.title,
          description: a.body,
          url: `${SITE_URL}/#${a.id}`,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: firm.phoneE164,
        email: firm.email,
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: firm.name,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#escritorio` },
  };

  const payload = JSON.stringify([legalService, webSite]).replace(
    /</g,
    "\\u003c",
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}
