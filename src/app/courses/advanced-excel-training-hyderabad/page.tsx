import React from "react";
import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Advanced Excel Training Hyderabad | TechnoExcel",
  description: "Advanced Excel course covering Power Query, VBA, XLOOKUP, dynamic arrays and AI-powered Excel tools. Live instructor-led, real business data.",
  alternates: { canonical: "https://technoexcel.in/courses/advanced-excel-training-hyderabad" },
};

export default function Page() {
  return <CourseDetailPage slug="advanced-excel-training-hyderabad" title="Advanced Excel with AI" badge="Popular" duration="~1 month" tagline="From formulas to full automation." description="The most-requested course for working professionals. Covers everything from advanced formulas and Power Query to VBA automation and AI-powered Excel tools - taught with your real data files."
    outcomes={["Automate repetitive Excel tasks with VBA","Use Power Query to eliminate manual data consolidation","Write XLOOKUP, FILTER and dynamic array formulas","Build dashboards that update automatically","Use Microsoft Copilot and AI tools effectively in Excel","Reduce weekly reporting time from hours to minutes"]}
    whoFor={["Analysts who want to move beyond basic Excel","Finance and operations professionals building reports","MIS teams responsible for recurring dashboards","Team leads who want to upskill employees in Excel","Working professionals who need practical Excel skills, not theory"]}
    modules={[
      {title:"Module 1 - Advanced Formulas",topics:["XLOOKUP and lookup design","FILTER, SORT and UNIQUE","Dynamic array formulas","Named ranges and structured references","Error handling with IFERROR and IFNA","Text functions: TEXTJOIN, TRIM, CLEAN"]},
      {title:"Module 2 - Power Query",topics:["Connecting to files and folders","Combining multiple sheets","Cleaning and transforming data","Unpivoting and reshaping tables","Parameter queries","Refresh-ready reporting workflows"]},
      {title:"Module 3 - Pivot Tables and Dashboards",topics:["Pivot tables and pivot charts","Calculated fields and grouping","Dashboard layout principles","Interactive slicers and timelines","Dynamic charts and sparklines","Executive-ready reporting views"]},
      {title:"Module 4 - VBA and AI Tools",topics:["Recording and editing macros","Variables, loops and conditions","Automating reports end-to-end","Microsoft Copilot in Excel","ChatGPT for formula and VBA support","AI-assisted productivity workflows"]},
    ]}
  />;
}
