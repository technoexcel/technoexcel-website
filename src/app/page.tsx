import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogosStrip from "@/components/sections/ClientLogosStrip";
import StatementSection from "@/components/sections/StatementSection";
import AudienceSection from "@/components/sections/AudienceSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import CorporateSection from "@/components/sections/CorporateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:"TechnoExcel — Data Solutions, Automation & Corporate Training | Hyderabad",
  description:"Premier data solutions firm in Hyderabad. Custom Power BI dashboards, Excel automation, data analytics training and corporate upskilling. 10,000+ trained. 4.8★ Google rated.",
  alternates:{ canonical:"https://technoexcel.in" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosStrip />
      <StatementSection />
      <AudienceSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <CoursesSection />
      <CorporateSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
