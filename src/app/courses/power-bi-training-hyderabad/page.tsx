import React from "react";
import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/ui/CourseDetailPage";
export const metadata: Metadata = { title:"Power BI Training Hyderabad | TechnoExcel", description:"Power BI course covering DAX, data modeling, row-level security and Power BI Service. Taught by a trainer who has built and deployed 50+ live production dashboards.", alternates:{canonical:"https://technoexcel.in/courses/power-bi-training-hyderabad"} };
export default function Page() {
  return <CourseDetailPage slug="power-bi-training-hyderabad" title="Power BI Mastery" duration="~1 month" tagline="Build dashboards that drive decisions." description="DAX, data modeling, row-level security and Power BI Service deployment. Taught by a trainer who has built 50+ live dashboards in production at companies like Tata Power, General Mills and Genpact."
    outcomes={["Build live dashboards connected to real data sources","Write DAX measures for complex business calculations","Implement row-level security for multi-team reports","Deploy reports to Power BI Service with scheduled refresh","Design dashboards that management actually uses","Connect to SQL Server, SharePoint and Excel sources"]}
    whoFor={["Excel users ready to move to Power BI","Analysts building monthly or weekly management reports","MIS and BI teams needing structured Power BI training","Anyone who has tried Power BI but struggles with DAX","Teams that need live dashboards rather than static reports"]}
    modules={[
      {title:"Module 1 — Power BI Fundamentals",topics:["Desktop vs Service vs Mobile","Connecting to data sources","Basic transformations in Power Query","Loading data to the model","Creating your first report","Publishing to Power BI Service"]},
      {title:"Module 2 — Data Modeling",topics:["Star schema design","Relationships and cardinality","Calculated columns vs measures","Filter context and row context","Many-to-many relationships","Date table best practices"]},
      {title:"Module 3 — DAX",topics:["SUM, CALCULATE and FILTER","Time intelligence functions","RELATED and RELATEDTABLE","Variables in DAX","RANKX and TOPN","Advanced context transition"]},
      {title:"Module 4 — Deployment and Security",topics:["Row-level security","Power BI Service workspaces","Scheduled refresh configuration","Sharing and permissions","Paginated reports overview","Mobile layout design"]},
    ]}
  />;
}
