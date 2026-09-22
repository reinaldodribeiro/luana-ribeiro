import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollSpine } from "@/components/layout/ScrollSpine";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { AboutLawyer } from "@/components/sections/AboutLawyer";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Authority } from "@/components/sections/Authority";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

const spineSections = [
  { id: "inicio", label: "Início" },
  { id: "escritorio", label: "Escritório" },
  { id: "areas", label: "Áreas" },
  { id: "lei", label: "A lei" },
  { id: "por-que", label: "Por que" },
  { id: "contato", label: "Contato" },
] as const;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollSpine sections={spineSections} />
      <main id="main" tabIndex={-1} className="flex-1">
        <Hero />
        <Manifesto />
        <AboutLawyer />
        <PracticeAreas />
        <Authority />
        <WhyChoose />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
