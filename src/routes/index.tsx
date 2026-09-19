import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/site/IntroSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ProofOfWork } from "@/components/site/ProofOfWork";
import { WebsiteExamples } from "@/components/site/WebsiteExamples";
import { FounderSection } from "@/components/site/FounderSection";
import { TechnologySection } from "@/components/site/TechnologySection";
import { PricingSection } from "@/components/site/PricingSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { RevisionSection } from "@/components/site/RevisionSection";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <FeatureGrid />
        <ProofOfWork />
        <WebsiteExamples />
        <FounderSection />
        <TechnologySection />
        <PricingSection />
        <ProcessTimeline />
        <RevisionSection />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
