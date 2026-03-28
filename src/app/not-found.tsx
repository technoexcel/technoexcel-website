import React from "react";

const BG="#0d1f2d",RED="#EE2354";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";

export default function NotFound() {
  return (
    <section style={{background:BG,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"52px",textAlign:"center"}}>
      <div>
        <div style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(80px,15vw,160px)",lineHeight:1,color:RED,letterSpacing:"-0.05em",marginBottom:16}}>404</div>
        <h1 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,3vw,36px)",color:"#fff",letterSpacing:"-0.04em",marginBottom:12}}>Page not found.</h1>
        <p style={{fontSize:15,color:"rgba(255,255,255,.45)",lineHeight:1.7,maxWidth:400,margin:"0 auto 32px"}}>The page you are looking for does not exist. Let us take you somewhere useful.</p>
        <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
          <a href="/" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px 26px",borderRadius:12,textDecoration:"none"}}>Back to Home</a>
          <a href="/courses" style={{display:"inline-flex",alignItems:"center",border:"1.5px solid rgba(255,255,255,.2)",color:"rgba(255,255,255,.65)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"12px 22px",borderRadius:12,textDecoration:"none"}}>Browse Courses</a>
        </div>
      </div>
    </section>
  );
}
