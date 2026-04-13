import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Client Work & Case Studies | TechnoExcel",
  description:"Real case studies: ₹31L in supply chain savings, 94% invoice processing time reduction, 11-day dashboard deployment. Every number is live in production today.",
  alternates:{canonical:"https://technoexcel.in/work"},
};

const CASES=[
  {num:"01",sector:"Industrial Manufacturing",tech:"Power BI",title:"4-Hour Monday Reports — Automated to a Live Dashboard",
   challenge:"A 3-plant manufacturing company ran weekly performance reporting entirely manually every Monday. Four analysts spent 4+ hours pulling data from SQL Server, formatting in Excel and emailing static slides to the management team. The slides were often out of date before they were read.",
   built:"A live Power BI dashboard connected directly to SQL Server with row-level security by plant. Scheduled refresh runs at 6am daily. Every meeting now opens with live data on screen — nobody waits for the Monday report because it no longer exists.",
   tools:["Power BI","SQL Server","DAX","Row-Level Security","Scheduled Refresh"],
   metrics:[["0 min","manual reporting time (was 4 hrs every Monday)"],["₹22L+","annual savings in analyst time alone"],["11 days","from kickoff to full deployment and sign-off"]]},
  {num:"02",sector:"FMCG Finance",tech:"Excel VBA",title:"200 Vendor Invoices Per Week — From 6 Hours to 22 Minutes",
   challenge:"Finance team at an FMCG company spent every Friday afternoon reconciling 200+ vendor invoices across three separate Excel files: one from the ERP, one from the vendor and one internal tracker. Manual matching, constant errors, frequent re-work, and overtime every single week.",
   built:"Excel VBA automation that opens all three source files, normalises invoice formats, runs three-way matching logic, flags exceptions by category, and generates a formatted exception report. One button, 22 minutes, zero manual copying.",
   tools:["Excel VBA","Power Query","SharePoint","Data Validation"],
   metrics:[["22 min","full reconciliation (was 6 hours every Friday)"],["94%","reduction in time spent on reconciliation"],["500+","staff-hours recovered per year"]]},
  {num:"03",sector:"Manufacturing · Supply Chain",tech:"Power Automate",title:"40 Vendors, Fragmented Files — One Live Supply Chain Command Centre",
   challenge:"Supply chain team managed 40+ vendors through separate Excel files and email threads. No consolidated view. Stockouts happened frequently because nobody saw the combined picture. The PO approval cycle took 9 working days from request to release.",
   built:"A Power BI supply chain dashboard pulling from a consolidated SQL database, with automated PO triggers via Power Automate. When any item drops below minimum stock threshold, a Teams alert fires and a pre-formatted draft PO is auto-generated for one-click approval.",
   tools:["Power BI","Power Automate","Microsoft Teams","SQL Server","SharePoint"],
   metrics:[["₹31L","emergency procurement costs avoided in 6 months"],["68%","reduction in stockout incidents year-on-year"],["3 days","PO cycle time (was 9 working days)"]]},
];

const INK="#13293C",RED="#EE2354",BG="#0d1f2d";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function WorkPage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Work"}]} h1="Real problems." h1red="Measurable outcomes." sub="Three anonymised case studies from live engagements. Every number is real and in production today." />

      <section id="te-work" style={{background:"#fff",padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-work .wi{max-width:1280px;margin:0 auto}
          #te-work .cr{display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:flex-start;padding:52px 0;border-bottom:1px solid rgba(19,41,60,.08)}
          #te-work .mp{background:#0d1f2d;border-radius:14px;padding:28px}
          @media(max-width:1024px){#te-work .cr{grid-template-columns:1fr 240px!important;gap:32px}}
          @media(max-width:768px){#te-work .cr{grid-template-columns:1fr!important;gap:24px;padding:36px 0} #te-work .mp{margin-top:4px}}
        `}} />
        <div className="wi">
          {CASES.map(c=>(
            <div key={c.num} className="cr">
              <div>
                <div style={{display:"flex",gap:10,marginBottom:16,alignItems:"center",flexWrap:"wrap"}}>
                  <span style={{fontFamily:MONO,fontSize:11,color:RED,letterSpacing:"2px",fontWeight:700}}>{c.num}</span>
                  <span style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.50)",letterSpacing:"1px",textTransform:"uppercase"}}>{c.sector}</span>
                  <span style={{fontFamily:MONO,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:4,background:RED,color:"#fff"}}>{c.tech}</span>
                </div>
                <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(18px,2.5vw,22px)",color:INK,letterSpacing:"-0.3px",marginBottom:20,lineHeight:1.25}}>{c.title}</h2>
                <div style={{fontFamily:SANS,fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:10}}>The Challenge</div>
                <p style={{fontSize:15,color:"rgba(19,41,60,.70)",lineHeight:1.85,marginBottom:20}}>{c.challenge}</p>
                <div style={{fontFamily:SANS,fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:10}}>What We Built</div>
                <p style={{fontSize:15,color:"rgba(19,41,60,.70)",lineHeight:1.85,marginBottom:20}}>{c.built}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                  {c.tools.map(t=><span key={t} style={{fontFamily:MONO,fontSize:10,padding:"3px 10px",borderRadius:4,background:"rgba(19,41,60,.06)",color:"rgba(19,41,60,.65)"}}>{t}</span>)}
                </div>
              </div>
              <div className="mp">
                <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.52)",marginBottom:20}}>Outcomes</div>
                {c.metrics.map(([v,l],mi)=>(
                  <div key={v} style={{paddingBottom:mi<c.metrics.length-1?18:0,marginBottom:mi<c.metrics.length-1?18:0,borderBottom:mi<c.metrics.length-1?"1px solid rgba(255,255,255,.08)":"none"}}>
                    <div style={{fontFamily:SANS,fontWeight:800,fontSize:26,color:RED,letterSpacing:"-1px",lineHeight:1,marginBottom:5}}>{v}</div>
                    <div style={{fontFamily:SANS,fontSize:12,color:"rgba(255,255,255,.68)",lineHeight:1.5,fontWeight:300}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="te-work-cta" style={{background:BG,padding:"80px 52px",textAlign:"center"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-work-cta .cb{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:28px}
          @media(max-width:768px){#te-work-cta{padding:52px 20px!important} #te-work-cta .cb{flex-direction:column;align-items:stretch;padding:0 16px} #te-work-cta .cb a{justify-content:center;text-align:center}}
        `}} />
        <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4vw,48px)",color:"#fff",letterSpacing:"-0.04em",lineHeight:0.96,marginBottom:16}}>Want results like these<br/>for your organisation?</h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,.72)",lineHeight:1.8,maxWidth:460,margin:"0 auto"}}>Free 30-minute strategy call. We identify your 3 highest-ROI data opportunities.</p>
        <div className="cb">
          <a href="/contact" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:15,padding:"15px 30px",borderRadius:12,textDecoration:"none"}}>Book Strategy Call →</a>
          <a href={WA.strategy} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",border:"1.5px solid rgba(255,255,255,.22)",color:"rgba(255,255,255,.78)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"14px 24px",borderRadius:12,textDecoration:"none"}}>WhatsApp Us</a>
        </div>
      </section>
    </>
  );
}
