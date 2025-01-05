import { Announcement } from "@/components/header/Announcement";
import { HeroTitle } from "@/components/header/HeroTitle";
import { ProblemSection } from "@/components/header/ProblemSection";
import { SolutionSection } from "@/components/solutions/SolutionSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CTASection } from "@/components/cta/CTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 px-4">
        <div className="flex flex-col items-center">
          <Announcement />
          <HeroTitle />
          <a className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 text-lg rounded-lg">
            Get Your AI Proof Concept Here
          </a>
          <ProblemSection />
        </div>
      </section>
      <SolutionSection />
      <ServicesSection />
      <WorkflowSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}