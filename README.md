# Luana Sociedade Individual de Advocacia — landing page

Landing page institucional em Next.js 16 (App Router, TypeScript, Tailwind v4), com todo o conteúdo em português do Brasil.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de produção e verificação:

```bash
npm run build
npm start
npx tsc --noEmit
npx eslint .
```

## Onde editar o conteúdo

Todo texto exibido ao visitante (título, áreas de atuação, diferenciais, contato, textos de SEO) fica em um único arquivo: `src/content/site.ts`. Os componentes só leem esse arquivo. Para trocar o número de WhatsApp, o e-mail, o endereço ou a mensagem pré-preenchida, edite `firm` e `whatsappMessage` nesse arquivo.

## URL pública

Canonical, Open Graph, sitemap e robots usam a variável `NEXT_PUBLIC_SITE_URL`. Copie `.env.example` para `.env` e ajuste antes do deploy. Sem a variável, o padrão é `https://www.luanaribeiro.adv.br` (a Vercel redireciona o domínio sem `www` para esse). A variável opcional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` recebe o token do Google Search Console e gera a tag `google-site-verification`.

## Estrutura

```
src/
  app/            layout, page, globals.css, icon.svg, sitemap.ts, robots.ts
  content/        site.ts (conteúdo institucional)
  components/
    layout/       Navbar, Footer, ScrollSpine (linha lateral), WhatsAppFloat
    sections/     Hero, Manifesto, AboutLawyer, PracticeAreas, Authority,
                  WhyChoose, FinalCta, Contact
    ui/           Accordion, Icons, MotionRuntime (revelação por scroll)
    seo/          JsonLd (Schema.org LegalService + WebSite)
public/
  images/         fotos otimizadas pelo next/image
  og.jpg          imagem de compartilhamento (1200x630)
```

## Decisões de design

- Paleta tirada das fotos: canvas escuro quente, seções em tom osso e acento verde-esmeralda (das joias do retrato), em vez do dourado e azul-marinho comuns em sites jurídicos.
- Tipografia: Instrument Serif (títulos), Manrope (texto) e IBM Plex Mono (rótulos), servidas pelo `next/font`.
- Elemento-assinatura: a "linha", que percorre a página lateralmente e vira o diagrama da margem consignável na seção "Por que a lei importa".
- Movimento: apenas `transform` e `opacity`, disparado por IntersectionObserver; `prefers-reduced-motion` mostra tudo no estado final e desliga as animações.
- Sem bibliotecas além do Next, React e Tailwind.
