import React from "react";
import type { Metadata } from "next";
import TrustedClientGlobe from "@/components/ui/TrustedClientGlobe";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Corporate Training Programs",
  description:"Custom Excel, Power BI and data analytics training for corporate teams. On-site or virtual. Across India, Southeast Asia, Middle East, UK and USA. Built around your actual data.",
  alternates:{canonical:"https://technoexcel.in/corporate"},
};

const TESTIMONIALS=[
  {quote:"Excellent and Excellence in Excel — Ravi is an outstanding trainer who makes complex topics simple.",name:"Rama Murthy (RAM)",role:"Head of Human Resources · Amararaja Batteries"},
  {quote:"Fantabulous Trainer! The sessions were engaging, practical and directly relevant to our work.",name:"Training Coordinator",role:"Times Group"},
  {quote:"Quality of reports has improved significantly across the team after the training.",name:"Shishir Saxena",role:"Business Head · UPL"},
  {quote:"The training mapped directly to our actual workflows. Every session had something we could implement the same week.",name:"Analytics Manager",role:"Manufacturing Company"},
];
const TTRACK=[...TESTIMONIALS,...TESTIMONIALS];

const TRACKS=[
  {num:"TRACK 01",title:"Excel Mastery",desc:"L1 Essentials · L2 Analyst · L3 Automation",body:"1–2 days per level. Our most-requested program. Covers formulas, Power Query, pivot tables, VBA basics and AI-powered Excel tools. Every session uses the client organisation's actual data files."},
  {num:"TRACK 02",title:"Analytics & BI",desc:"Data Thinking · Power BI · Storytelling",body:"Designed for MIS teams and business managers. Covers how to think with data, how to build and read Power BI dashboards, and how to present findings to leadership clearly and persuasively."},
  {num:"TRACK 03",title:"Power Platform",desc:"Power Automate · Power Apps · SharePoint",body:"Enables teams to build their own automation and no-code applications on Microsoft's Power Platform. Covers workflow automation, form-based apps and integration with Teams and SharePoint."},
  {num:"TRACK 04",title:"Copilot & AI Tools",desc:"Microsoft Copilot · ChatGPT · Gen AI Workflows",body:"Equips teams to work smarter with AI — using Microsoft 365 Copilot, ChatGPT and Gen AI tools in their daily workflows. Covers prompt engineering, AI-assisted reporting, document generation and responsible AI use in business contexts."},
];
const REGIONS=[
  {name:"India",flag:"🇮🇳",markets:"Hyderabad · Mumbai · Bangalore · Delhi · Pune · Chennai",note:"On-site and virtual delivery"},
  {name:"Southeast Asia",flag:"🌏",markets:"Singapore · Malaysia · Thailand · Philippines · Indonesia",note:"On-site and virtual delivery"},
  {name:"Middle East · Europe · USA",flag:"🌍",markets:"UAE · Saudi Arabia · UK · USA · Australia",note:"Virtual delivery, select on-site"},
];

const INK="#13293C",RED="#EE2354",BG="#0d1f2d",CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

const SANS2="'Plus Jakarta Sans',system-ui,sans-serif";

export default function CorporatePage() {
  return (
    <>
      {/* Custom two-column hero: text left, animated trusted-client globe right */}
      <section style={{ background:"#0d1f2d", padding:"100px 52px 56px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none" }} />
        <div style={{ position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(238,35,84,.12),transparent 60%)",top:-100,right:-80,pointerEvents:"none" }} />
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          .te-corp-hero-grid{max-width:1280px;margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) 460px;gap:64px;align-items:center}
          @media(max-width:1024px){.te-corp-hero-grid{grid-template-columns:1fr!important;gap:36px}.te-corp-hero-visual{max-width:520px;margin:0 auto;width:100%}}
        `}} />
        <div className="te-corp-hero-grid">
          <div>
            <nav style={{ display:"flex",alignItems:"center",gap:8,fontFamily:"'Space Mono',monospace",fontSize:11,color:"rgba(255,255,255,0.55)",marginBottom:24,flexWrap:"wrap" }}>
              <a href="/" style={{ color:"rgba(255,255,255,0.55)",textDecoration:"none" }}>TechnoExcel</a>
              <span style={{ color:"rgba(255,255,255,0.30)" }}>/</span>
              <span style={{ color:"#fff",fontWeight:600 }}>Corporate</span>
            </nav>
            <h1 style={{ fontFamily:SANS2,fontWeight:800,fontSize:"clamp(28px,4.5vw,60px)",lineHeight:.96,letterSpacing:"-0.04em",color:"#fff",marginBottom:16 }}>
              Train your team once.<br/><span style={{ color:"#EE2354" }}>Change how they work forever.</span>
            </h1>
            <p style={{ fontFamily:SANS2,fontWeight:300,fontSize:17,color:"rgba(255,255,255,0.72)",maxWidth:540,lineHeight:1.75 }}>
              Custom programs delivered on-site, virtually or hybrid. Always built around your actual data and KPIs — never generic slides.
            </p>
          </div>
          <div className="te-corp-hero-visual">
            <TrustedClientGlobe />
          </div>
        </div>
      </section>

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
            <div style={{background:BG,borderRadius:14,padding:"24px 26px",marginBottom:24,overflow:"hidden",position:"relative",height:260}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.50)",marginBottom:16}}>What our clients say</div>
              {/* top/bottom fade */}
              <div style={{position:"absolute",left:0,right:0,top:48,height:32,background:"linear-gradient(to bottom,#0d1f2d,transparent)",zIndex:2,pointerEvents:"none"}}/>
              <div style={{position:"absolute",left:0,right:0,bottom:0,height:40,background:"linear-gradient(to top,#0d1f2d,transparent)",zIndex:2,pointerEvents:"none"}}/>
              <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
                @keyframes te-tscroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
                .te-ttrack{display:flex;flex-direction:column;gap:20px;animation:te-tscroll 22s linear infinite}
                .te-ttrack:hover{animation-play-state:paused}
                .te-tcard{border-left:2px solid #EE2354;padding:0 0 0 12px;flex-shrink:0}
              `}}/>
              <div style={{overflow:"hidden",height:196}}>
                <div className="te-ttrack">
                  {TTRACK.map((t,i)=>(
                    <div key={i} className="te-tcard">
                      <p style={{fontFamily:SANS,fontSize:13,color:"rgba(255,255,255,.82)",lineHeight:1.7,fontStyle:"italic",marginBottom:6}}>&ldquo;{t.quote}&rdquo;</p>
                      <div style={{fontFamily:SANS,fontSize:11,fontWeight:700,color:"rgba(255,255,255,.55)"}}>{t.name} · {t.role}</div>
                      <div style={{display:"flex",gap:2,marginTop:4}}>{[...Array(5)].map((_,j)=><span key={j} style={{color:"#fbbf24",fontSize:11}}>★</span>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href={WA.corporate} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:15,padding:"15px 28px",borderRadius:12,textDecoration:"none"}}>Request a Proposal →</a>
          </div>
        </div>
      </section>
    </>
  );
}
