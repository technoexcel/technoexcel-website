import React from "react";
import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/ui/CourseDetailPage";

export const metadata: Metadata = {
  title: "Power BI Training Hyderabad | TechnoExcel",
  description: "Power BI course covering DAX, data modeling, row-level security and Power BI Service. Taught by a trainer who has built and deployed 50+ live production dashboards.",
  alternates: { canonical: "https://technoexcel.in/courses/power-bi-training-hyderabad" },
};

export default function Page() {
  return <CourseDetailPage slug="power-bi-training-hyderabad" title="Power BI Mastery" duration="~1 month" tagline="Build dashboards that drive decisions." description="DAX, data modeling, row-level security and Power BI Service deployment. Taught by a trainer who has built 50+ live dashboards in production for business teams."
    outcomes={["Build live dashboards connected to real data sources","Write DAX measures for business calculations","Create clean data models using star schema principles","Deploy reports to Power BI Service with scheduled refresh","Design dashboards that managers actually use","Connect SQL Server, SharePoint and Excel data sources"]}
    whoFor={["Excel users ready to move into Power BI","Analysts building weekly or monthly management reports","MIS and BI teams needing structured Power BI training","Finance and operations teams that need live dashboards","Anyone who has tried Power BI but struggles with DAX"]}
    modules={[
      {title:"Module 1 - Power BI Fundamentals",topics:["Power BI Desktop, Service and Mobile","Connecting to Excel, SQL and SharePoint","Cleaning data in Power Query","Loading data to the model","Creating first visuals and report pages","Publishing to Power BI Service"]},
      {title:"Module 2 - Data Modeling",topics:["Star schema design","Relationships and cardinality","Calculated columns vs measures","Filter context and row context","Date table best practices","Model performance basics"]},
      {title:"Module 3 - DAX for Business Reporting",topics:["SUM, CALCULATE and FILTER","DIVIDE and safe calculations","Time intelligence functions","Variables in DAX","RANKX and TOPN patterns","Running totals and KPI measures"]},
      {title:"Module 4 - Deployment and Dashboard UX",topics:["Row-level security","Workspace permissions","Scheduled refresh configuration","Dashboard design principles","Mobile layout design","Sharing and governance basics"]},
    ]}
  />;
}
