import React from "react";

const PATHS = [
  { num:"01", tag:"For Organisations",  title:"Consulting & Automation", body:"Custom dashboards, automation pipelines and data consulting that delivers measurable ROI.",       cta:"Book Strategy Call", href:"/contact"   },
  { num:"02", tag:"For Corporate Teams", title:"Team Upskilling",          body:"Training built around your actual KPIs, data and workflows — not generic slides.",               cta:"Request Proposal",  href:"/corporate" },
  { num:"03", tag:"For Individuals",     title:"Career Courses",           body:"10 courses from 2 weeks to 6 months. Data Science, Analytics, AI, Excel, Power BI.",            cta:"Browse Courses",    href:"/courses"   },
];

const INK = "#13293C", RED = "#EE2354", CREAM = "#F4F2EE";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO = "var(--font-mono,'Space Mono',monospace)";

export default function AudienceSection() {
  return (
    <section id="te-audience" style={{ background:CREAM, padding:"80px 52px" }}>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        #te-audience .paths-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(19,41,60,0.1);border-radius:14px;overflow:hidden}
        #te-audience .path-card{background:#F4F2EE;padding:32px 26px;position:relative}
        @media(max-width:768px){
          #te-audience .paths-grid{grid-template-columns:1fr!important;gap:0;background:transparent;border-radius:0;overflow:visible}
          #te-audience .path-card{border:1px solid rgba(19,41,60,0.1);border-radius:12px;margin-bottom:12px;padding:24px 20px}
          #te-audience .path-card:last-child{margin-bottom:0}
        }
      `}} />
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, fontFamily:MONO, fontSize:9, letterSpacing:"2.5px", textTransform:"uppercase", color:"rgba(19,41,60,0.60)", marginBottom:8 }}>
          <span style={{ width:14, height:1, background:"rgba(19,41,60,.3)", flexShrink:0, display:"inline-block" }} />Who We Work With
        </div>
        <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(28px,4vw,52px)", lineHeight:.96, letterSpacing:"-0.04em", color:INK, marginBottom:32 }}>
          Find your path.<br/><span style={{ color:RED }}>Three ways in.</span>
        </h2>
        <div className="paths-grid">
          {PATHS.map((p, i) => (
            <div key={i} className="path-card">
              <div style={{ fontFamily:MONO, fontSize:9, color:RED, letterSpacing:"2px", marginBottom:14 }}>{p.num}</div>
              <div style={{ display:"inline-block", fontFamily:MONO, fontSize:8, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(19,41,60,0.62)", background:"rgba(19,41,60,.06)", padding:"3px 8px", borderRadius:4, marginBottom:10 }}>{p.tag}</div>
              <div style={{ fontFamily:SANS, fontWeight:700, fontSize:18, color:INK, letterSpacing:"-0.3px", marginBottom:8 }}>{p.title}</div>
              <p style={{ fontSize:13, color:"rgba(19,41,60,0.70)", lineHeight:1.65, marginBottom:16 }}>{p.body}</p>
              <a href={p.href} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:12, fontWeight:700, color:RED, textDecoration:"none", paddingTop:12, borderTop:"1px solid rgba(19,41,60,.08)" }}>
                {p.cta} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
