import React from "react";
import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/ui/CourseDetailPage";
export const metadata: Metadata = { title:"Advanced Excel Training Hyderabad | TechnoExcel", description:"Advanced Excel course covering Power Query, VBA, XLOOKUP, dynamic arrays and AI-powered Excel tools. Live instructor-led, real business data.", alternates:{canonical:"https://technoexcel.in/courses/advanced-excel-training-hyderabad"} };
export default function Page() {
  return <CourseDetailPage slug="advanced-excel-training-hyderabad" title="Advanced Excel with AI" badge="Popular" duration="~1 month" tagline="From formulas to full automation." description="The most-requested course for working professionals. Covers everything from advanced formulas and Power Query to VBA automation and AI-powered Excel tools — taught with your real data files."
    outcomes={["Automate your most repetitive Excel tasks with VBA","Use Power Query to eliminate manual data consolidation","Write complex XLOOKUP, FILTER and array formulas","Build dynamic dashboards that update automatically","Use Microsoft Copilot and AI tools effectively in Excel","Reduce weekly report time from hours to minutes"]}
    whoFor={["Analysts who want to move beyond basic Excel","Finance and operations professionals building monthly reports","Anyone spending 2+ hours per week on manual Excel work","Team leads who want to upskill their teams in data tools","Working professionals who need practical Excel skills, not theory"]}
    modules={[
      {title:"Module 1 — Advanced Formulas",topics:["XLOOKUP and array matching","FILTER, SORT and UNIQUE","Dynamic array formulas","Named ranges and structured references","Error handling with IFERROR and IFNA","Text functions: TEXTJOIN, TRIM, CLEAN"]},
      {title:"Module 2 — Power Query",topics:["Connecting to files and folders","Combining multiple sheets","Cleaning and transforming data","Unpivoting and reshaping tables","Parameter queries","Scheduled refresh setup"]},
      {title:"Module 3 — VBA and Automation",topics:["Recording and editing macros","Variables, loops and conditions","Working with ranges and worksheets","User forms and input validation","Automating reports end-to-end","Error handling in VBA"]},
      {title:"Module 4 — AI and Advanced Tools",topics:["Microsoft Copilot in Excel","ChatGPT for formula help","Dynamic charts and sparklines","Pivot calculated fields","Power Pivot basics","Building interactive dashboards"]},
    ]}
  />;
}
