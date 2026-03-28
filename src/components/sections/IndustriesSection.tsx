import React from "react";
const INDUSTRIES = [
  { sector:"Manufacturing & Infra", count:"9 companies", clients:["Tata Power","Gabriel India","Amara Raja","Kirby Building","Jupiter","+4"] },
  { sector:"FMCG & Consumer",       count:"2 companies", clients:["General Mills","Diversey"] },
  { sector:"Media & Entertainment", count:"2 companies", clients:["Star India","Times Group"] },
  { sector:"Tech & Services",       count:"3 companies", clients:["Genpact","Uber","Nuance"] },
  { sector:"Pharma & Life Sciences",count:"1 company",   clients:["Aragen"] },
  { sector:"Agri & Chemicals",      count:"4 companies", clients:["Coromandel","UPL","HM Clause","SeedWorks"] },
];
const BG="#0d1f2d",RED="#EE2354";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";
const tw=(o:number)=>`rgba(255,255,255,${o})`;

export default function IndustriesSection() {
  return (
    <section id="te-industries" style={{ background:BG,padding:"80px 52px",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(238,35,84,.08),transparent 65%)",top:-200,right:-60,pointerEvents:"none" }} />
      <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
        <div style={{ display:"flex",alignItems:"center",gap:10,fontFamily:MONO,fontSize:11,letterSpacing:"2.5px",textTransform:"uppercase",color:tw(.55),marginBottom:8 }}>
          <span style={{ width:14,height:1,background:tw(.35),flexShrink:0,display:"inline-block" }} />Industries We Serve
        </div>
        <h2 style={{ fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4vw,52px)",lineHeight:.96,letterSpacing:"-0.04em",color:"#fff",marginBottom:28 }}>
          Across every sector<br/><span style={{ color:RED }}>that competes on data.</span>
        </h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10 }}>
          {INDUSTRIES.map((ind,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.07)",border:`1px solid ${tw(.12)}`,borderRadius:12,padding:"22px 24px" }}>
              <div style={{ fontFamily:MONO,fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:tw(.60),marginBottom:8 }}>{ind.sector}</div>
              <div style={{ fontFamily:SANS,fontSize:14,fontWeight:600,color:tw(.82),marginBottom:12 }}>{ind.count}</div>
              <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                {ind.clients.map(c=><span key={c} style={{ fontSize:11,padding:"3px 8px",background:"rgba(255,255,255,0.10)",borderRadius:4,color:tw(.68) }}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
