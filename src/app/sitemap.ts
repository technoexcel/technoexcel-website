// Place this file at: src/app/sitemap.ts
// Next.js will automatically serve it at: /sitemap.xml
// No route.ts needed.

import { MetadataRoute } from "next";

const BASE = "https://www.technoexcel.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}`,                                            changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/solutions`,                                  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/work`,                                       changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses`,                                    changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/corporate`,                                  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`,                                      changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,                                       changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contact`,                                    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/advanced-excel-training-hyderabad`,  changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/power-bi-training-hyderabad`,        changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/data-analytics-training-hyderabad`,  changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/data-science-course`,                changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/ai-prompt-engineering-business`,     changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/vba-macros-excel`,                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/python-data-analytics`,              changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/sql-for-business`,                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/power-platform-training`,            changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/data-storytelling-course`,           changeFrequency: "monthly", priority: 0.8 },
  ];
}
