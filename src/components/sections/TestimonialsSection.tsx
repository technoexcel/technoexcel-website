import React from "react";
const TESTIMONIALS = [
  { quote:"Practical approach every step. The training mapped directly to our actual workflows. Every session had something immediately usable.", name:"Analytics Manager", co:"Manufacturing Company" },
  { quote:"The Power BI dashboard went live in 11 days. Monday morning reporting that used to take 4 hours now takes zero minutes.", name:"Operations Director", co:"Industrial Manufacturing" },
  { quote:"The program is flexible and the team genuinely invests in every student. I recommend TechnoExcel to every colleague I speak to.", name:"Senior Data Analyst", co:"FMCG Company" },
];
const BG="#0d1f2d",RED="#EE2354";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";
const tw=(o:number)=>`rgba(255,255,255,${o})`;

export default function TestimonialsSection() {
  return (
    <section id="te-testimonials" style={{ background:BG,padding:"80px 52px",position:"relative" }}>
      <style>{`
        #te-testimonials .t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}
        #te-testimonials .t-card{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:24px}
        @media(max-width:1024px){#te-testimonials .t-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:768px){
          #te-testimonials .t-grid{grid-template-columns:1fr!important}
          #te-testimonials .t-card{padding:20px}
        }
      `}</style>
      <div style={{ position:"absolute",inset:0,background:"radial-gradient(circle at 50% 50%,rgba(238,35,84,.07),transparent 65%)",pointerEvents:"none" }} />
      <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
        <div style={{ display:"flex",alignItems:"center",gap:10,fontFamily:MONO,fontSize:11,letterSpacing:"2.5px",textTransform:"uppercase",color:tw(.55),marginBottom:8 }}>
          <span style={{ width:14,height:1,background:tw(.35),flexShrink:0,display:"inline-block" }} />Testimonials
        </div>
        <h2 style={{ fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4vw,52px)",lineHeight:.96,letterSpacing:"-0.04em",color:"#fff",marginBottom:36 }}>
          What our students<br/><span style={{ color:RED }}>and clients say.</span>
        </h2>
        <div className="t-grid">
          {TESTIMONIALS.map((t2,i)=>(
            <div key={i} className="t-card">
              <div style={{ fontSize:32,color:RED,lineHeight:1,marginBottom:14 }}>&ldquo;</div>
              <p style={{ fontFamily:SANS,fontSize:14,color:tw(.82),lineHeight:1.80,marginBottom:18,fontStyle:"italic" }}>{t2.quote}</p>
              <div style={{ fontFamily:SANS,fontSize:13,fontWeight:700,color:tw(.75) }}>{t2.name}</div>
              <div style={{ fontFamily:MONO,fontSize:11,color:tw(.50),marginTop:3 }}>{t2.co}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex",justifyContent:"center" }}>
          <div style={{ background:"rgba(238,35,84,.14)",border:"1px solid rgba(238,35,84,.30)",borderRadius:12,padding:"14px 28px",display:"flex",alignItems:"center",gap:16 }}>
            <div style={{ fontFamily:SANS,fontWeight:800,fontSize:28,color:RED,letterSpacing:"-1px" }}>4.8★</div>
            <div style={{ fontFamily:SANS,fontSize:13,color:tw(.72),lineHeight:1.6 }}>Google rated<br/><strong style={{ color:tw(.90) }}>729+ verified reviews</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
