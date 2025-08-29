import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
