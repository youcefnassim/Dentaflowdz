import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyDentaFlow from "@/components/WhyDentaFlow";
import FeatureShowcase from "@/components/FeatureShowcase";
import Gallery from "@/components/Gallery";
import AboutFounder from "@/components/AboutFounder";
import OfflineFirstSection from "@/components/OfflineFirstSection";
import SecuritySection from "@/components/SecuritySection";
import TechStack from "@/components/TechStack";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustStrip />
      <WhyDentaFlow />
      <FeatureShowcase />
      <Gallery />
      <AboutFounder />
      <OfflineFirstSection />
      <SecuritySection />
      <TechStack />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
