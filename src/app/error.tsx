"use client";
import { useEffect } from "react";

const BG = "#0d1f2d", RED = "#EE2354";
const SANS = "'Plus Jakarta Sans',system-ui,sans-serif";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section style={{ background:BG, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"52px", textAlign:"center" }}>
      <div>
        <div style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(60px,10vw,100px)", lineHeight:1, color:RED, letterSpacing:"-0.05em", marginBottom:16 }}>Oops.</div>
        <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(18px,2.5vw,28px)", color:"#fff", letterSpacing:"-0.04em", marginBottom:12 }}>Something went wrong.</h2>
        <p style={{ fontSize:15, color:"rgba(255,255,255,.45)", lineHeight:1.7, maxWidth:400, margin:"0 auto 32px" }}>
          We hit an unexpected error. Try again or go back to the homepage.
        </p>
        <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
          <button onClick={reset} style={{ display:"inline-flex", alignItems:"center", background:RED, color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"13px 26px", borderRadius:12, border:"none", cursor:"pointer" }}>
            Try Again
          </button>
          <a href="/" style={{ display:"inline-flex", alignItems:"center", border:"1.5px solid rgba(255,255,255,.2)", color:"rgba(255,255,255,.65)", fontFamily:SANS, fontWeight:600, fontSize:14, padding:"12px 22px", borderRadius:12, textDecoration:"none" }}>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
