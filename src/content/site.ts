/**
 * Conteúdo institucional do site. Todo texto exibido ao visitante vive aqui,
 * para que a atualização seja feita em um único lugar, sem tocar nos componentes.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://luanaribeiro.adv.br";

export const firm = {
  name: "Luana Sociedade Individual de Advocacia",
  shortName: "Luana Ribeiro Advocacia",
  lawyer: "Luana Ribeiro",
  cnpj: "54.847.103/0001-10",
  city: "Goiânia",
  state: "GO",
  stateFull: "Goiás",
  neighborhood: "Setor Leste Universitário",
  address: {
    street: "Rua 261, Quadra 80 Lote 11",
    neighborhood: "Setor Leste Universitário",
    city: "Goiânia",
    state: "GO",
    postalCode: "74610-250",
  },
  phoneDisplay: "(62) 99558-9677",
  phoneE164: "+5562995589677",
  whatsappNumber: "5562995589677",
  email: "advocacia@luanaribeiro.adv.br",
  clientsClaim: "+4.000",
  clientsClaimLong: "Mais de 4.000 clientes com direitos garantidos",
} as const;

const whatsappMessage =
  "Olá! Vim pelo site da Luana Sociedade Individual de Advocacia e gostaria de falar com uma advogada sobre o meu caso.";

export const links = {
  whatsapp: `https://wa.me/${firm.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  phone: `tel:${firm.phoneE164}`,
  email: `mailto:${firm.email}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${firm.address.street}, ${firm.address.neighborhood}, ${firm.address.city} - ${firm.address.state}, ${firm.address.postalCode}`,
  )}`,
} as const;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Por que escolher", href: "#por-que" },
  { label: "Contato", href: "#contato" },
] as const;

export const cta = {
  primary: "Fale com uma advogada agora",
  short: "Fale com uma advogada",
  secondary: "Conhecer as áreas de atuação",
} as const;

export const hero = {
  eyebrow: "Advocacia em Goiânia",
  /** Duas frases, apresentadas como dois movimentos do mesmo título. */
  titleA: "Seu salário não pode ser engolido pelas dívidas.",
  titleB: "Seu trabalho tem direitos que não podem ser esquecidos.",
  subtitle:
    "Luana Sociedade Individual de Advocacia protege servidores públicos e trabalhadores em Goiânia, em todas as frentes: da defesa integral do servidor ao combate ao superendividamento, passando pelo direito trabalhista, acidente de trabalho e auxílio-acidente. Mais de 4.000 clientes com direitos garantidos.",
  portraitAlt:
    "Luana Ribeiro, advogada, em retrato de estúdio com blazer preto sobre fundo escuro.",
} as const;

export const manifesto = {
  line: "Defendemos quem sustenta o país com o próprio trabalho.",
  audiences: [
    "Servidores públicos",
    "Trabalhadores",
    "Quem sofreu acidente de trabalho",
    "Quem está superendividado",
    "Quem tem direito ao auxílio-acidente",
  ],
} as const;

export const about = {
  kicker: "Sobre a advogada",
  paragraphs: [
    "À frente do escritório, Luana Ribeiro conduz cada caso com especialização e compromisso. Sua atuação é movida por um propósito: garantir que servidores públicos e trabalhadores tenham os direitos que a lei assegura, seja para recuperar o equilíbrio financeiro, seja para defender a carreira pública em todas as suas frentes, seja para reparar danos sofridos no trabalho.",
    "Com mais de 4.000 clientes atendidos e direitos conquistados, Luana consolidou-se como referência em Goiânia nas áreas de defesa do servidor público, superendividamento, direito trabalhista, acidente de trabalho e auxílio-acidente.",
  ],
  pullQuote:
    "Garantir que servidores públicos e trabalhadores tenham os direitos que a lei assegura.",
  photoAlt:
    "Luana Ribeiro sentada em um sofá claro, com blazer preto, em ambiente de escritório.",
  facts: [
    { value: "+4.000", label: "clientes atendidos" },
    { value: "5", label: "frentes de atuação" },
    { value: "Goiânia", label: "Setor Leste Universitário" },
  ],
} as const;

export type PracticeArea = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  body: string;
  items?: { title: string; body: string }[];
  bullets?: string[];
  note?: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "servidores-publicos",
    index: "01",
    title: "Servidores Públicos",
    subtitle: "Defesa integral do servidor",
    body: "A defesa do servidor público não se restringe ao superendividamento: ela acompanha toda a vida funcional, do ingresso à aposentadoria, com ampla atuação administrativa e contenciosa. Atuamos para garantir cada direito que a lei reserva a quem serve o Estado.",
    items: [
      {
        title: "Superendividamento e crédito consignado",
        body: "Limitação dos descontos em folha à margem legal, suspensão de retenções que comprometem o mínimo existencial, revisão e repactuação de contratos de empréstimo.",
      },
      {
        title: "Isenção de Imposto de Renda",
        body: "Reconhecimento do direito à isenção para portadores de moléstias graves e demais hipóteses legais, com restituição dos valores retidos indevidamente.",
      },
      {
        title: "Licenças",
        body: "Licença médica e por motivo de saúde, licença-prêmio, licença sem vencimentos e todas as modalidades legais, inclusive quando negadas ou descontadas indevidamente.",
      },
      {
        title: "Férias indenizadas e não gozadas",
        body: "Cobrança de férias vencidas, não gozadas ou pagas a menor, inclusive na conversão em pecúnia e no pagamento da indenização correspondente.",
      },
      {
        title: "Indenizações",
        body: "Reparação por perdas e danos sofridos no exercício da função e verbas indenizatórias devidas ao servidor.",
      },
      {
        title: "Diferenças salariais",
        body: "Reajustes, progressões, promoções, enquadramentos e qualquer verba paga a menor que a lei assegure.",
      },
      {
        title: "Descontos indevidos em folha",
        body: "Identificação e restituição de valores descontados sem amparo legal.",
      },
      {
        title: "Atuação administrativa",
        body: "Requerimentos, recursos, defesas e acompanhamento de processos administrativos junto ao órgão de origem.",
      },
      {
        title: "Atuação contenciosa",
        body: "Ações judiciais para fazer valer cada um desses direitos, inclusive com medidas urgentes (liminares) para proteger salário e benefícios.",
      },
    ],
  },
  {
    id: "superendividamento",
    index: "02",
    title: "Superendividamento e alívio financeiro",
    body: "Viver com o salário inteiro comprometido não é normal, e a lei concorda. A Lei do Superendividamento (Lei 14.181/2021) criou mecanismos para quem, de boa-fé, não consegue mais pagar suas dívidas sem abrir mão do essencial.",
    bullets: [
      "Renegociar dívidas com condições reais de pagamento.",
      "Reduzir juros abusivos e encargos ilegais.",
      "Suspender cobranças e descontos que comprometem a subsistência.",
      "Garantir a preservação do mínimo existencial, o valor necessário para viver com dignidade.",
    ],
  },
  {
    id: "direito-trabalhista",
    index: "03",
    title: "Direito Trabalhista",
    body: "Horas extras não pagas, vínculo não reconhecido, demissão sem pagamento correto das verbas, assédio e condições degradantes de trabalho. Se você trabalhou, ou trabalha, e teve direitos desrespeitados, a lei garante cobrança e reparação. Atuamos na defesa integral dos interesses do trabalhador.",
  },
  {
    id: "acidente-de-trabalho",
    index: "04",
    title: "Acidente de Trabalho",
    body: "Doença ocupacional, acidente dentro ou fora do ambiente de trabalho, incapacidade parcial ou permanente. Quem sofre um acidente de trabalho tem direito a benefícios e indenizações, mas muitas vezes esbarra na recusa do INSS ou da empresa. Cuidamos de todo o processo para garantir o reconhecimento e a reparação do dano.",
  },
  {
    id: "auxilio-acidente",
    index: "05",
    title: "Auxílio-Acidente",
    body: "Se você sofreu um acidente e ficou com sequelas que reduzem sua capacidade de trabalho, pode ter direito ao auxílio-acidente: um benefício mensal de caráter indenizatório pago pelo INSS (art. 86 da Lei 8.213/91), que existe mesmo para quem continua trabalhando. Nossa equipe analisa seu caso, reúne as provas da sequela e atua desde o pedido administrativo até a via judicial, inclusive para revisar benefícios negados.",
  },
];

export const authority = {
  kicker: "Por que a lei importa",
  title: "A lei desenha uma linha. Nós fazemos ela valer.",
  body: "A Lei nº 14.181/2021 mudou o jogo para quem está endividado: ela reconhece que nenhuma dívida pode destruir o mínimo necessário para se viver com dignidade, e criou um rito próprio de repactuação de dívidas, com audiência de conciliação entre devedor e credores. No caso do servidor público, isso se soma à proteção da margem consignável, que limita os descontos em folha. E a defesa do servidor vai além: férias não pagas, licenças negadas, descontos indevidos, salário pago a menor, imposto retido sem amparo legal. Cada direito exige atuação administrativa e judicial firme, do concurso à aposentadoria. Quem conhece a lei e sabe usá-la recupera o controle da própria vida financeira e funcional.",
  diagram: {
    caption: "Ilustração do mínimo existencial e da margem consignável.",
    salary: "Salário",
    limit: "Limite que a lei protege",
    debts: "Descontos e dívidas",
    essential: "Mínimo existencial",
  },
} as const;

export const whyChoose = {
  kicker: "Por que escolher o escritório",
  title: "Especialização de verdade, atendimento de perto.",
  photoAlt:
    "Luana Ribeiro sentada em um sofá claro, com blusa branca, ao lado de uma almofada amarela e plantas, em ambiente iluminado por luz natural.",
  photoCaption: "Luana Ribeiro, no escritório em Goiânia.",
  reasons: [
    {
      title: "Especialização real",
      body: "Atuação dedicada à defesa do servidor público, superendividamento, direito trabalhista e acidentes de trabalho.",
    },
    {
      title: "+4.000 clientes atendidos",
      body: "Uma trajetória de direitos conquistados em Goiânia e região.",
    },
    {
      title: "Defesa integral do servidor",
      body: "Da vida funcional ao bolso, na via administrativa e na contenciosa.",
    },
    {
      title: "Atendimento humano e próximo",
      body: "Você fala diretamente com quem conduz o seu caso.",
    },
    {
      title: "Estratégia e urgência",
      body: "Medidas liminares para proteger sua renda enquanto o processo andar.",
    },
    {
      title: "Solução de verdade",
      body: "Não prometemos milagres, construímos resultados com base na lei.",
    },
  ],
} as const;

export const finalCta = {
  title: "Sua renda e seus direitos não podem esperar.",
  body: "Se você é servidor público com direitos esquecidos, está com o salário comprometido, teve benefício negado ou sofreu acidente de trabalho, procure quem tem especialização e história de resultados.",
  whatsappHint: "Atendimento pelo WhatsApp, direto com o escritório.",
  photoAlt:
    "Luana Ribeiro sorrindo, sentada a uma mesa de madeira com notebook e uma xícara de café.",
} as const;

export const contact = {
  kicker: "Contato",
  title: "Fale com o escritório.",
  intro:
    "Escolha o canal que for mais fácil para você. A conversa começa pelo WhatsApp, pelo telefone ou pelo e-mail, e o atendimento presencial acontece em Goiânia.",
  photoAlt:
    "Luana Ribeiro segurando um celular, em atitude de atenção, no escritório.",
  channels: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: firm.phoneDisplay,
      href: links.whatsapp,
      action: "Abrir conversa",
      external: true,
    },
    {
      id: "phone",
      label: "Telefone",
      value: firm.phoneDisplay,
      href: links.phone,
      action: "Ligar agora",
      external: false,
    },
    {
      id: "email",
      label: "E-mail",
      value: firm.email,
      href: links.email,
      action: "Enviar e-mail",
      external: false,
    },
    {
      id: "address",
      label: "Endereço",
      value: `${firm.address.street}, ${firm.address.neighborhood}, ${firm.address.city}, ${firm.address.state}. CEP ${firm.address.postalCode}`,
      href: links.maps,
      action: "Ver no mapa",
      external: true,
    },
  ],
} as const;

export const footer = {
  tagline: "Defesa de servidores públicos e trabalhadores em Goiânia.",
  legal: `${firm.name}. CNPJ ${firm.cnpj}.`,
  notice:
    "Este site tem caráter informativo e institucional, em conformidade com o Código de Ética e Disciplina da OAB. Cada caso é analisado individualmente.",
} as const;

export const seo = {
  title: "Advocacia para Servidores Públicos e Trabalhadores em Goiânia",
  titleTemplate: `%s | ${firm.shortName}`,
  description:
    "Luana Sociedade Individual de Advocacia, em Goiânia: defesa integral do servidor público, superendividamento, direito trabalhista, acidente de trabalho e auxílio-acidente. Mais de 4.000 clientes atendidos.",
  keywords: [
    "advocacia em Goiânia",
    "advogada servidor público Goiânia",
    "superendividamento",
    "direito trabalhista Goiânia",
    "acidente de trabalho",
    "auxílio-acidente",
    "crédito consignado servidor",
    "Setor Leste Universitário",
  ],
} as const;
