import React from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionWorkflow from "@/components/SolutionWorkflow";
import FeatureShowcase from "@/components/FeatureShowcase";
import VideoDemoSection from "@/components/VideoDemoSection";
import OfflineFirstSection from "@/components/OfflineFirstSection";
import SecuritySection from "@/components/SecuritySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PricingSection from "@/components/PricingSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionWorkflow />
      <FeatureShowcase />
      <VideoDemoSection />
      <OfflineFirstSection />
      <SecuritySection />
      <BeforeAfterSection />
      <TargetAudienceSection />
      <PricingSection />
      <EarlyAccessSection />
      <FAQ />
      <TechStack />
    </div>
  );
}

