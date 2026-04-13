import React from "react";

const CASES = [
  { num:"01", title:"4-Hour Monday Reports — Automated to a Live Dashboard",          sector:"Industrial Manufacturing",    tech:"Power BI",       metrics:[["0 min","reporting time"],["₹22L+","saved/yr"],["11d","deployed"]] },
  { num:"02", title:"200 Vendor Invoices Per Week — 6 Hours to 22 Minutes",           sector:"FMCG Finance",                tech:"Excel VBA",      metrics:[["94%","time saved"],["~0%","errors"],["500+","hrs/yr"]] },
  { num:"03", title:"Fragmented Supplier Data — One Live Supply Chain Command Centre", sector:"Manufacturing · Supply Chain", tech:"Power Automate", metrics:[["₹31L","cost saved"],["68%","stockouts ↓"],["3 days","PO cycle"]] },
];

const MONO = "var(--font-mono,'Space Mono',monospace)";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";

export default function CaseStudiesSection() {
  return (
    <section id="te-cases" style={{ background:"#fff", padding:"80px 52px" }}>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        #te-cases .case-row{display:grid;grid-template-columns:60px 1fr auto;gap:16px;align-items:center;padding:22px 0;border-top:1px solid rgba(19,41,60,0.07);text-decoration:none;cursor:pointer}
        #te-cases .case-metrics{display:flex;gap:20px;flex-shrink:0}
        @media(max-width:768px){
          #te-cases .case-row{grid-template-columns:40px 1fr!important;gap:12px}
          #te-cases .case-metrics{grid-column:1/-1;display:grid!important;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:4px;padding-top:12px;border-top:1px solid rgba(19,41,60,0.05)}
          #te-cases .case-metric{text-align:left!important}
        }
      `}} />
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, fontFamily:MONO, fontSize:9, letterSpacing:"2.5px", textTransform:"uppercase", color:"rgba(19,41,60,0.62)", marginBottom:8 }}>
          <span style={{ width:14, height:1, background:"rgba(19,41,60,.3)", flexShrink:0, display:"inline-block" }} />Client Work
        </div>
        <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(28px,4vw,52px)", lineHeight:.96, letterSpacing:"-0.04em", color:"#13293C", marginBottom:0 }}>
          Real problems.<br/><span style={{ color:"#EE2354" }}>Measurable outcomes.</span>
        </h2>
        <div style={{ marginTop:24 }}>
          {CASES.map((c, i) => (
            <a key={i} href="/work" className="case-row">
              <div style={{ fontFamily:MONO, fontSize:11, color:"#EE2354", letterSpacing:"1px" }}>{c.num}</div>
              <div>
                <div style={{ fontFamily:SANS, fontWeight:700, fontSize:16, color:"#13293C", letterSpacing:"-0.3px", marginBottom:4, lineHeight:1.3 }}>{c.title}</div>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <span style={{ fontFamily:MONO, fontSize:8, color:"rgba(19,41,60,0.62)", textTransform:"uppercase", letterSpacing:"1px" }}>{c.sector}</span>
                  <span style={{ fontFamily:MONO, fontSize:8, fontWeight:700, padding:"1px 6px", borderRadius:4, background:"#EE2354", color:"#fff" }}>{c.tech}</span>
                </div>
              </div>
              <div className="case-metrics">
                {c.metrics.map(([v,l]) => (
                  <div key={v} className="case-metric" style={{ textAlign:"right" }}>
                    <div style={{ fontFamily:SANS, fontWeight:800, fontSize:20, color:"#EE2354", letterSpacing:"-0.5px", lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:9, color:"rgba(19,41,60,0.60)", marginTop:1, fontFamily:MONO }}>{l}</div>
                  </div>
                ))}
              </div>
            </a>
          ))}
          <div style={{ borderTop:"1px solid rgba(19,41,60,.07)", paddingTop:4 }} />
        </div>
      </div>
    </section>
  );
}
