import React from "react";
import type { Metadata } from "next";
import ExcelCoursePage from "@/components/ui/ExcelCoursePage";

export const metadata: Metadata = {
  title: "Advanced Excel Training Hyderabad | TechnoExcel",
  description: "Advanced Excel course covering Power Query, VBA, XLOOKUP, dynamic arrays and AI-powered Excel tools. Live instructor-led, real business data.",
  alternates: { canonical: "https://technoexcel.in/courses/advanced-excel-training-hyderabad" },
};

export default function Page() {
  return <ExcelCoursePage />;
}
