import { NavHeader } from "@/components/blocks/NavHeader";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { TechMarquee, ClientMarquee } from "@/components/marketing/Marquee";
import { ServicesBlock } from "@/components/blocks/ServicesBlock";
import { MovingCards } from "@/components/marketing/MovingCards";
import { StatsBlock } from "@/components/blocks/StatsBlock";
import { GlobalReachBlock } from "@/components/marketing/Globe";
import { FeaturesListBlock } from "@/components/marketing/AnimatedList";
import { PortfolioBlock } from "@/components/blocks/PortfolioBlock";
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock";
import { ContactBlock } from "@/components/blocks/ContactBlock";
import { FooterBlock } from "@/components/blocks/FooterBlock";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavHeader />
      <HeroBlock />
      <TechMarquee />
      <section id="services">
        <ServicesBlock />
      </section>
      <MovingCards />
      <StatsBlock />
      <GlobalReachBlock />
      <FeaturesListBlock />
      <PortfolioBlock />
      <ClientMarquee />
      <TestimonialsBlock />
      <ContactBlock />
      <FooterBlock />
    </main>
  );
}
