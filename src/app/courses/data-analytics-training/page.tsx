import React from "react";
import type { Metadata } from "next";
import { CourseDetailPage } from "@/components/ui/CourseDetailPage";
export const metadata: Metadata = { title:"Data Analytics Training", description:"Complete data analytics course covering SQL, Python, Power BI, statistics and Advanced Excel. 4 months, live instructor-led with real business data.", alternates:{canonical:"https://technoexcel.in/courses/data-analytics-training"} };
export default function Page() {
  return <CourseDetailPage slug="data-analytics-training" title="Data Analytics" duration="4 months" tagline="Excel. SQL. Python. Power BI. All of it." description="The complete analyst toolkit in one structured program. Advanced Excel first, then SQL, Python, Power BI and statistics â€” all taught with real business datasets so you are job-ready from day one."
    outcomes={["Master Excel Power Query, XLOOKUP and automation basics","Write complex SQL queries to extract and join data","Analyse datasets with Python Pandas and NumPy","Build production Power BI dashboards","Apply descriptive and inferential statistics correctly","Build a portfolio of 3 real projects from your own data"]}
    whoFor={["Professionals looking to switch into analytics roles","Excel users who want to expand into SQL and Python","Engineers or graduates entering data-focused careers","Anyone who has tried to learn analytics online but needs structured guidance","Working professionals who need a practical, job-ready skillset"]}
    modules={[
      {title:"Module 1 â€” Advanced Excel",topics:["XLOOKUP, FILTER and dynamic arrays","Power Query for data consolidation","Pivot tables and calculated fields","VBA basics for automation","Data cleaning and preparation","Excel as an analytics foundation"]},
      {title:"Module 2 â€” SQL",topics:["SELECT, WHERE, GROUP BY","Joins: INNER, LEFT, FULL","Subqueries and CTEs","Window functions","Aggregation and filtering","Real business query practice"]},
      {title:"Module 3 â€” Python for Analytics",topics:["Python basics and data types","Pandas: read, clean, filter","NumPy for numerical work","Matplotlib and seaborn charts","Joining and reshaping DataFrames","Automating repetitive tasks"]},
      {title:"Module 4 â€” Statistics",topics:["Descriptive statistics","Distributions and central tendency","Hypothesis testing basics","Correlation and regression","A/B testing concepts","Interpreting results correctly"]},
      {title:"Module 5 â€” Power BI and Capstone",topics:["Power BI fundamentals","DAX basics","End-to-end dashboard build","Capstone project: full analysis","Presentation to stakeholders","Portfolio documentation"]},
    ]}
  />;
}

