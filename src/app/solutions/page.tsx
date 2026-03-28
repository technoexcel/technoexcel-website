import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Data Solutions — Power BI, Automation & Consulting | TechnoExcel",
  description:"Custom Power BI dashboards, Excel and Python automation, Power Platform apps and data consulting. Built around your data, your KPIs, your team. Hyderabad, India.",
  alternates:{canonical:"https://technoexcel.in/solutions"},
};

const SOLUTIONS=[
  {num:"01",title:"Custom BI Dashboards",body:"Power BI, Excel and Looker Studio dashboards connected directly to your SQL databases, SharePoint lists, ERP systems or live data feeds. We build row-level security, scheduled auto-refresh, and mobile-ready layouts so your team sees live data — not last month's export.",tools:["Power BI","DAX","SQL Server","SharePoint","Google Looker"],outcomes:[["0 min","manual reporting time"],["₹22L+","avg annual savings"],["11 days","avg deployment"]]},
  {num:"02",title:"Process Automation",body:"We automate your highest-cost manual processes — weekly reports, invoice reconciliation, approval workflows, data consolidation. Using Python, Excel VBA and Power Automate, we turn repeatable manual work into one-click or zero-click processes.",tools:["Python","Excel VBA","Power Automate","Power Query"],outcomes:[["70%+","avg effort reduction"],["94%","invoice processing time saved"]]},
  {num:"03",title:"Power Platform Applications",body:"No-code business applications built on Microsoft Power Apps — custom forms, field inspection tools, leave trackers, inventory systems and intranet portals. All integrated with Microsoft Teams, SharePoint and the rest of your M365 environment.",tools:["Power Apps","Power Automate","Teams","SharePoint","M365"],outcomes:[["68%","fewer stockout incidents"],["3 days","PO cycle (was 9 working days)"]]},
  {num:"04",title:"Data Consulting",body:"We audit your data infrastructure, map where value is being lost (manual effort, delayed decisions, unreliable reports), and deliver a concrete prioritised action plan — with full implementation support through to go-live.",tools:["Data Audit","Strategy Design","Implementation","Ongoing Retainer"],outcomes:[["3–5","high-ROI opportunities identified"],["2 weeks","typical audit duration"]]},
];

const INK="#13293C",RED="#EE2354";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Solutions"}]} h1="Four ways we turn your" h1red="data into decisions." sub="From a single dashboard to a full data transformation — every engagement starts with your actual data, not a template." />

      <section id="te-sol" style={{background:"#fff",padding:"64px 52px"}}>
        <style>{`
          #te-sol .sg{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:0}
          #te-sol .sc{padding:40px;border-bottom:1px solid rgba(19,41,60,.08)}
          #te-sol .sc:nth-child(odd){border-right:1px solid rgba(19,41,60,.08)}
          #te-sol .so{display:flex;gap:24px;flex-wrap:wrap}
          @media(max-width:1024px){#te-sol .sc{padding:28px 20px}}
          @media(max-width:768px){#te-sol .sg{grid-template-columns:1fr!important} #te-sol .sc:nth-child(odd){border-right:none} #te-sol .sc{padding:24px 0}}
        `}</style>
        <div className="sg">
          {SOLUTIONS.map(s=>(
            <div key={s.num} className="sc">
              <div style={{fontFamily:MONO,fontSize:11,color:RED,letterSpacing:"2px",marginBottom:14,fontWeight:700}}>{s.num}</div>
              <div style={{fontFamily:SANS,fontWeight:800,fontSize:22,color:INK,letterSpacing:"-0.3px",marginBottom:14,lineHeight:1.15}}>{s.title}</div>
              <p style={{fontSize:15,color:"rgba(19,41,60,.70)",lineHeight:1.85,marginBottom:18}}>{s.body}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:20}}>
                {s.tools.map(t=><span key={t} style={{fontFamily:MONO,fontSize:10,padding:"4px 10px",borderRadius:4,background:"rgba(19,41,60,.06)",color:"rgba(19,41,60,.65)"}}>{t}</span>)}
              </div>
              <div className="so">
                {s.outcomes.map(([v,l])=>(
                  <div key={v}>
                    <div style={{fontFamily:SANS,fontWeight:800,fontSize:22,color:RED,letterSpacing:"-0.5px"}}>{v}</div>
                    <div style={{fontSize:11,color:"rgba(19,41,60,.55)",marginTop:2,fontFamily:MONO}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="te-sol-cta" style={{background:"#0d1f2d",padding:"80px 52px",textAlign:"center"}}>
        <style>{`
          #te-sol-cta .cb{display:flex;justify-content:center;gap:12px;margin-top:28px;flex-wrap:wrap}
          @media(max-width:768px){#te-sol-cta{padding:52px 20px!important} #te-sol-cta .cb{flex-direction:column;align-items:stretch;padding:0 16px} #te-sol-cta .cb a{justify-content:center;text-align:center}}
        `}</style>
        <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4vw,48px)",color:"#fff",letterSpacing:"-0.04em",lineHeight:0.96,marginBottom:16}}>
          Ready to see what&apos;s possible<br/><span style={{color:RED}}>with your data?</span>
        </h2>
        <p style={{fontFamily:SANS,fontSize:17,color:"rgba(255,255,255,.72)",maxWidth:480,margin:"0 auto",lineHeight:1.8}}>Free 30-minute strategy call. No obligation.</p>
        <div className="cb">
          <a href="/contact" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:15,padding:"15px 30px",borderRadius:12,textDecoration:"none"}}>Book Strategy Call →</a>
          <a href={WA.strategy} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",border:"1.5px solid rgba(255,255,255,.22)",color:"rgba(255,255,255,.78)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"14px 24px",borderRadius:12,textDecoration:"none"}}>WhatsApp Us</a>
        </div>
      </section>
    </>
  );
}
