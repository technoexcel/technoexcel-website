import React from "react";
import type { Metadata } from "next";
import AdvancedExcelTrainingPage from "@/components/ui/AdvancedExcelTrainingPage";

export const metadata: Metadata = {
  title: "Advanced Excel Training with Gen AI",
  description: "Advanced Excel training covering formulas, lookup, Pivot Tables, Power Query, dashboards, VBA basics and Gen AI tools for Excel productivity.",
  alternates: { canonical: "https://technoexcel.in/courses/advanced-excel-training" },
};

export default function Page() {
  return <AdvancedExcelTrainingPage slug="advanced-excel-training" />;
}
