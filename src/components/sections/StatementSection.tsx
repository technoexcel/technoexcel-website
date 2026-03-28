import React from "react";

const STATS = [
  { n:"10K+", l:"Professionals trained", r:false },
  { n:"500+", l:"Corporate programs",    r:false },
  { n:"50+",  l:"Dashboards delivered",  r:false },
  { n:"70%+", l:"Avg effort reduction",  r:true  },
  { n:"4.8★", l:"Google · 729 reviews",  r:true  },
];
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";
const tw=(o:number)=>`rgba(255,255,255,${o})`;

export default function StatementSection() {
  return (
    <section id="te-stmt" style={{ background:"#0d1f2d",padding:"80px 52px",position:"relative",overflow:"hidden" }}>
      <style>{`
        #te-stmt .stats-row{display:flex;flex-wrap:nowrap;gap:0;border-top:1px solid rgba(255,255,255,0.12);padding-top:28px}
        #te-stmt .stat-item{flex-shrink:0}
        @media(max-width:768px){
          #te-stmt .stats-row{display:grid;grid-template-columns:1fr 1fr!important;gap:20px 16px;border-top:1px solid rgba(255,255,255,0.12);padding-top:24px}
          #te-stmt .stat-item{flex-shrink:1;padding-left:0!important;padding-right:0!important;border-left:none!important;padding-top:16px;border-top:1px solid rgba(255,255,255,0.10)}
        }
      `}</style>
      <div style={{ position:"absolute",inset:0,background:"radial-gradient(circle at 30% 50%,rgba(238,35,84,.08),transparent 65%)",pointerEvents:"none" }} />
      <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
        <div style={{ fontFamily:SANS,fontWeight:800,fontSize:"clamp(36px,5.5vw,80px)",lineHeight:.95,letterSpacing:"-0.04em",marginBottom:20 }}>
          {/* Ghost text at .40 opacity — readable on dark bg */}
          <div style={{ color:tw(.40) }}>Most organisations</div>
          <div style={{ color:"#fff" }}>sit on data.</div>
          <div style={{ color:"#EE2354" }}>We make it work.</div>
        </div>
        <p style={{ fontFamily:SANS,fontSize:17,fontWeight:300,color:tw(.75),maxWidth:500,lineHeight:1.85,marginBottom:44 }}>
          Analysts spend 80% of their time preparing data and 20% analysing it. We flip that ratio — permanently.
        </p>
        <div className="stats-row">
          {STATS.map((s,i)=>(
            <div key={i} className="stat-item" style={{ flexShrink:0,paddingLeft:i>0?32:0,paddingRight:i<4?32:0,borderLeft:i>0?`1px solid ${tw(.12)}`:"none" }}>
              <div style={{ fontFamily:SANS,fontWeight:800,fontSize:"clamp(26px,3vw,38px)",lineHeight:1,letterSpacing:"-1px",marginBottom:6,color:s.r?"#EE2354":"#fff" }}>{s.n}</div>
              <div style={{ fontFamily:MONO,fontSize:11,color:tw(.55),letterSpacing:".5px",lineHeight:1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
