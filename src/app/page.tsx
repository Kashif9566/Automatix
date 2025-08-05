import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import OurMission from "@/components/OurMission";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <WhyUs />
      <OurMission />
      <WorksSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
