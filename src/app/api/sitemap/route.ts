import { NextResponse } from "next/server";

const BASE = "https://technoexcel.in";
const URLS = [
  ["",                                          "weekly","1.0"],
  ["/solutions",                                "monthly","0.8"],
  ["/work",                                     "monthly","0.8"],
  ["/courses",                                  "weekly","0.9"],
  ["/corporate",                                "monthly","0.8"],
  ["/about",                                    "monthly","0.7"],
  ["/blog",                                     "weekly","0.7"],
  ["/contact",                                  "monthly","0.8"],
  ["/courses/advanced-excel-training",          "monthly","0.9"],
  ["/courses/power-bi-training",                "monthly","0.9"],
  ["/courses/data-analytics-training","monthly","0.9"],
  ["/courses/data-science-course",              "monthly","0.9"],
  ["/courses/ai-prompt-engineering-business",   "monthly","0.9"],
  ["/courses/vba-macros-excel",                 "monthly","0.8"],
  ["/courses/python-data-analytics",            "monthly","0.8"],
  ["/courses/sql-for-business",                 "monthly","0.8"],
  ["/courses/power-platform-training",          "monthly","0.8"],
  ["/courses/data-storytelling-course",         "monthly","0.8"],
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    URLS.map(([u,f,p])=>`  <url><loc>${BASE}${u}</loc><changefreq>${f}</changefreq><priority>${p}</priority></url>`).join("\n")
  }\n</urlset>`;
  return new NextResponse(xml, { headers:{"Content-Type":"application/xml"} });
}
