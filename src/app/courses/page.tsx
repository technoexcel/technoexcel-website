import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { COURSES, WA } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Data Analytics, Excel & Power BI Courses | 10 Programs",
  description:"10 professional courses: Advanced Excel, Power BI, Data Analytics, Data Science, AI Prompt Engineering, VBA, Python, SQL, Power Platform and Data Storytelling. Live instructor-led with real business data.",
  alternates:{canonical:"https://technoexcel.in/courses"},
};

const INK="#13293C",RED="#EE2354",CREAM="#F4F2EE";
const SANS="'Plus Jakarta Sans',system-ui,sans-serif";
const MONO="'Space Mono',monospace";

// CSS defined outside component to prevent hydration mismatch from quote encoding
const PAGE_CSS = `
  #te-cp .ci{max-width:1280px;margin:0 auto}
  #te-cp .sb{display:flex;gap:32px;margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid rgba(19,41,60,.10);flex-wrap:wrap}
  #te-cp .cr{display:grid;grid-template-columns:44px 1fr auto;gap:20px;align-items:center;padding:20px 0;border-bottom:1px solid rgba(19,41,60,.07);cursor:pointer;transition:background .15s,padding-left .2s;text-decoration:none}
  #te-cp .cr:hover{padding-left:8px;background:rgba(238,35,84,.02)}
  #te-cp .cright{display:flex;align-items:center;gap:16px;flex-shrink:0}
  #te-cp .cdur{font-family:'Space Mono',monospace;font-size:11px;color:rgba(19,41,60,.50)}
  #te-cp .bc{margin-top:40px;padding:28px 32px;background:#0d1f2d;border-radius:16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px}
  #te-cp .bcb{display:flex;gap:12px;flex-wrap:wrap}
  @media(max-width:768px){
    #te-cp .cr{grid-template-columns:32px 1fr!important;padding:16px 0}
    #te-cp .cr:hover{padding-left:0}
    #te-cp .cright{display:none!important}
    #te-cp .bc{flex-direction:column}
    #te-cp .bcb{flex-direction:column;width:100%}
    #te-cp .bcb a{justify-content:center;text-align:center}
  }
`;

const DESCS: Record<string,string>={
  "advanced-excel-training":"From formulas and Power Query to VBA automation and AI-powered Excel tools. The most-requested course for working professionals across every industry.",
  "power-bi-training":"DAX, data modeling, row-level security, Power BI Service publishing. Taught by a trainer who has built and deployed 50+ live production dashboards.",
  "data-analytics-training-hyderabad":"Advanced Excel + SQL + Python + Power BI + statistics in one structured 4-month program. The complete toolkit for an analyst role — nothing left out.",
  "data-science-course":"Python, machine learning, deep learning, NLP and model deployment. Our flagship career-switching program with project-based assessment.",
  "ai-prompt-engineering-business":"ChatGPT, Claude and Microsoft Copilot for Excel, Word, Teams and Outlook. No coding required. Practical productivity skills for 2026.",
  "vba-macros-excel":"Automate reports, build interactive tools and eliminate all manual repetition from Excel. Covers macro recording, VBA logic and real workflow automation.",
  "python-data-analytics":"Pandas, NumPy, Matplotlib and seaborn for business data analysis. Go beyond what Excel can handle — without becoming a full software developer.",
  "sql-for-business":"Write real SQL queries, join multiple tables and answer business questions directly from databases. Stop waiting for IT. MySQL & SQL Server covered.",
  "power-platform-training":"Build no-code business applications and automated workflows on Microsoft Power Apps and Power Automate. Integrated with Teams, SharePoint and M365.",
  "data-storytelling-course":"Chart design principles, dashboard UX, and how to present data to senior leadership. Turn correct analysis into persuasive communication.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Courses"}]} h1="10 courses." h1red="One goal: you decide faster." sub="From 2-week intensives to 6-month programs. Every course is live, instructor-led and taught with real business data — not recorded videos." />

      <section id="te-cp" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:PAGE_CSS}} />
        <div className="ci">
          <div className="sb">
            {[["10","Courses available"],["4.8★","Google rated · 729 reviews"],["10K+","Professionals trained"],["Live","All sessions instructor-led"]].map(([n,l])=>(
              <div key={n}>
                <div style={{fontFamily:SANS,fontWeight:800,fontSize:30,color:RED,letterSpacing:"-1px",lineHeight:1}}>{n}</div>
                <div style={{fontSize:12,color:"rgba(19,41,60,.60)",marginTop:4}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{borderTop:"1px solid rgba(19,41,60,.07)"}}>
            {COURSES.map((c,i)=>(
              <a key={c.slug} href={`/courses/${c.slug}`} className="cr">
                <div style={{fontFamily:MONO,fontSize:12,color:RED,letterSpacing:"1px",fontWeight:700}}>{String(i+1).padStart(2,"0")}</div>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:5,flexWrap:"wrap"}}>
                    <div style={{fontFamily:SANS,fontWeight:700,fontSize:17,color:INK,letterSpacing:"-0.3px"}}>{c.title}</div>
                    {c.badge&&<span style={{fontFamily:SANS,fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:20,background:c.badge==="Popular"||c.badge==="Flagship"?RED:"#13293C",color:"#fff",flexShrink:0}}>{c.badge}</span>}
                  </div>
                  <div style={{fontSize:13,color:"rgba(19,41,60,.62)"}}>{DESCS[c.slug]}</div>
                </div>
                <div className="cright">
                  <span className="cdur">{c.duration}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(19,41,60,.35)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </a>
            ))}
          </div>
          <div className="bc">
            <div>
              <div style={{fontFamily:SANS,fontWeight:700,fontSize:18,color:"#fff",marginBottom:6}}>Not sure which course is right for you?</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,.60)"}}>Free 15-minute call — we match you to the right course and batch.</div>
            </div>
            <div className="bcb">
              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:13,padding:"12px 22px",borderRadius:10,textDecoration:"none"}}>WhatsApp Us</a>
              <a href="/contact" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:13,padding:"12px 22px",borderRadius:10,textDecoration:"none"}}>Book a Call →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
