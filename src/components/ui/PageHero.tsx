import React from "react";

interface Crumb { label:string; href?:string }
interface Props  { crumbs:Crumb[]; h1:string; h1red?:string; sub?:string }

export default function PageHero({ crumbs, h1, h1red, sub }: Props) {
  return (
    <section id="te-page-hero" style={{ background:"#0d1f2d",padding:"100px 52px 56px",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none" }} />
      <div style={{ position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(238,35,84,.12),transparent 60%)",top:-100,right:-80,pointerEvents:"none" }} />
      <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
        <nav style={{ display:"flex",alignItems:"center",gap:8,fontFamily:"'Space Mono',monospace",fontSize:11,color:"rgba(255,255,255,0.55)",marginBottom:24,flexWrap:"wrap" }}>
          {crumbs.map((c,i)=>(
            <span key={i} style={{ display:"flex",alignItems:"center",gap:8 }}>
              {i>0 && <span style={{ color:"rgba(255,255,255,0.30)" }}>/</span>}
              {c.href
                ? <a href={c.href} style={{ color:"rgba(255,255,255,0.55)",textDecoration:"none" }}>{c.label}</a>
                : <span style={{ color:"#fff",fontWeight:600 }}>{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 style={{ fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",fontWeight:800,fontSize:"clamp(28px,4.5vw,60px)",lineHeight:.96,letterSpacing:"-0.04em",color:"#fff",marginBottom:16 }}>
          {h1}
        </h1>
        {h1red && <div style={{ fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",fontWeight:800,fontSize:"clamp(26px,4.2vw,56px)",lineHeight:1,letterSpacing:"-0.04em",color:"#EE2354",marginBottom:18 }}>{h1red}</div>}
        {sub && <p style={{ fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",fontWeight:300,fontSize:17,color:"rgba(255,255,255,0.72)",maxWidth:540,lineHeight:1.75 }}>{sub}</p>}
      </div>
    </section>
  );
}
