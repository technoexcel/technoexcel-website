import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Corporate Training Programs | TechnoExcel Hyderabad",
  description:"Custom Excel, Power BI and data analytics training for corporate teams. On-site or virtual. Across India, Southeast Asia, Middle East, UK and USA. Built around your actual data.",
  alternates:{canonical:"https://technoexcel.in/corporate"},
};

const TRACKS=[
  {num:"TRACK 01",title:"Excel Mastery",desc:"L1 Essentials · L2 Analyst · L3 Automation",body:"1–2 days per level. Our most-requested program. Covers formulas, Power Query, pivot tables, VBA basics and AI-powered Excel tools. Every session uses the client organisation's actual data files."},
  {num:"TRACK 02",title:"Analytics & BI",desc:"Data Thinking · Power BI · Storytelling",body:"Designed for MIS teams and business managers. Covers how to think with data, how to build and read Power BI dashboards, and how to present findings to leadership clearly and persuasively."},
  {num:"TRACK 03",title:"Power Platform",desc:"Power Automate · Power Apps · SharePoint",body:"Enables teams to build their own automation and no-code applications on Microsoft's Power Platform. Covers workflow automation, form-based apps and integration with Teams and SharePoint."},
];
const REGIONS=[
  {name:"India",flag:"🇮🇳",markets:"Hyderabad · Mumbai · Bangalore · Delhi · Pune · Chennai",note:"On-site and virtual delivery"},
  {name:"Southeast Asia",flag:"🌏",markets:"Singapore · Malaysia · Thailand · Philippines · Indonesia",note:"On-site and virtual delivery"},
  {name:"Middle East · Europe · USA",flag:"🌍",markets:"UAE · Saudi Arabia · UK · USA · Australia",note:"Virtual delivery, select on-site"},
];

const INK="#13293C",RED="#EE2354",BG="#0d1f2d",CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function CorporatePage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Corporate"}]} h1="Train your team once." h1red="Change how they work forever." sub="Custom programs delivered on-site, virtually or hybrid. Always built around your actual data and KPIs — never generic slides." />

      <section id="te-corppage" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-corppage .cg{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px}
          #te-corppage .trow{padding:20px 0;border-bottom:1px solid rgba(19,41,60,.08)}
          #te-corppage .incl{display:flex;align-items:flex-start;gap:10px;font-size:15px;color:rgba(19,41,60,.72);margin-bottom:13px}
          @media(max-width:1024px){#te-corppage .cg{grid-template-columns:1fr!important;gap:40px}}
        `}} />
        <div className="cg">
          <div>
            <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,3vw,36px)",letterSpacing:"-0.04em",color:INK,lineHeight:1.0,marginBottom:24}}>Every program includes</h2>
            {["Needs assessment and requirements workshop before any content is designed","Training built around your organisation's actual data files and workflows","Post-training 30-day support — our trainers remain available for questions","Completion certificates for all participants","Delivery available across India, SE Asia, Middle East, UK and USA"].map(s=>(
              <div key={s} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:15,color:"rgba(19,41,60,.72)",marginBottom:14}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:RED,flexShrink:0,marginTop:6}}/>
                {s}
              </div>
            ))}
            <div style={{background:"#fff",border:"1px solid rgba(19,41,60,.08)",borderRadius:14,padding:"20px 24px",margin:"28px 0"}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:12}}>Training tracks</div>
              {TRACKS.map(t=>(
                <div key={t.num} className="trow">
                  <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:6}}>
                    <span style={{fontFamily:MONO,fontSize:10,color:RED,fontWeight:700,letterSpacing:"1.5px"}}>{t.num}</span>
                    <span style={{fontFamily:SANS,fontWeight:700,fontSize:16,color:INK}}>{t.title}</span>
                    <span style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.50)"}}>{t.desc}</span>
                  </div>
                  <p style={{fontSize:13,color:"rgba(19,41,60,.65)",lineHeight:1.65,paddingLeft:0}}>{t.body}</p>
                </div>
              ))}
            </div>
            <a href={WA.corporate} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:15,padding:"15px 28px",borderRadius:12,textDecoration:"none"}}>Request a Proposal →</a>
          </div>

          <div>
            <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,3vw,36px)",letterSpacing:"-0.04em",color:INK,lineHeight:1.0,marginBottom:24}}>
              Global reach.<br/><span style={{color:RED}}>3 regions.</span>
            </h2>
            <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>
              {REGIONS.map(r=>(
                <div key={r.name} style={{background:"#fff",borderRadius:12,padding:"20px 22px",border:"1px solid rgba(19,41,60,.08)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                    <span style={{fontSize:20}}>{r.flag}</span>
                    <span style={{fontFamily:SANS,fontWeight:700,fontSize:15,color:INK}}>{r.name}</span>
                  </div>
                  <div style={{fontSize:13,color:"rgba(19,41,60,.65)",marginBottom:4}}>{r.markets}</div>
                  <div style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.45)"}}>{r.note}</div>
                </div>
              ))}
            </div>
            <div style={{background:BG,borderRadius:14,padding:"24px 26px"}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.50)",marginBottom:16}}>What our clients say</div>
              <p style={{fontFamily:SANS,fontSize:15,color:"rgba(255,255,255,.78)",lineHeight:1.85,fontStyle:"italic",marginBottom:16}}>&ldquo;The training mapped directly to our actual workflows. Every session had something we could implement the same week.&rdquo;</p>
              <div style={{fontFamily:SANS,fontSize:13,fontWeight:700,color:"rgba(255,255,255,.65)"}}>Analytics Manager · Manufacturing Company</div>
              <div style={{display:"flex",gap:2,marginTop:8}}>{[...Array(5)].map((_,i)=><span key={i} style={{color:"#fbbf24",fontSize:14}}>★</span>)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
