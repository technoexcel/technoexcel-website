import React from "react";
import type { Metadata } from "next";
import PowerBICoursePage from "@/components/ui/PowerBICoursePage";

export const metadata: Metadata = {
  title: "Power BI Training Hyderabad | TechnoExcel",
  description: "Power BI course covering DAX, data modeling, row-level security and Power BI Service. Taught by a trainer who has built and deployed 50+ live production dashboards.",
  alternates: { canonical: "https://technoexcel.in/courses/power-bi-training-hyderabad" },
};

export default function Page() {
  return <PowerBICoursePage />;
}
