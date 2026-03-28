import React from "react";
import { WA, SITE } from "@/lib/constants";

const BG = "#0d1f2d", RED = "#EE2354";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO = "var(--font-mono,'Space Mono',monospace)";
const t = (o: number) => `rgba(255,255,255,${o})`;

export default function CTASection() {
  return (
    <section id="te-cta" style={{ background:BG, padding:"96px 52px", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <style>{`
        #te-cta .cta-btns {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        @media (max-width: 768px) {
          #te-cta .cta-btns {
            flex-direction: column;
            align-items: stretch;
            padding: 0 16px;
          }
          #te-cta .cta-btns a {
            justify-content: center;
          }
        }
      `}</style>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 50% 50%,rgba(238,35,84,.08),transparent 65%)", pointerEvents:"none" }} />
      <div style={{ maxWidth:700, margin:"0 auto", position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, fontFamily:MONO, fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:t(.65), marginBottom:20 }}>
          <span style={{ width:24, height:1, background:t(.2), display:"inline-block" }} />Start Today<span style={{ width:24, height:1, background:t(.2), display:"inline-block" }} />
        </div>
        <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(32px,4.5vw,60px)", color:"#fff", lineHeight:.96, letterSpacing:"-0.04em", marginBottom:16 }}>
          Ready to turn your data<br/><span style={{ color:RED }}>into competitive advantage?</span>
        </h2>
        <p style={{ fontFamily:SANS, fontWeight:300, fontSize:17, color:t(.72), lineHeight:1.75, maxWidth:500, margin:"0 auto 36px" }}>
          Free 30-minute strategy call. No obligation. We identify your top 3 data opportunities.
        </p>
        <div className="cta-btns">
          <a href="/contact" style={{ display:"inline-flex", alignItems:"center", background:RED, color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:15, padding:"15px 32px", borderRadius:14, textDecoration:"none" }}>
            Book Strategy Call →
          </a>
          <a href={WA.strategy} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#25D366", color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"14px 24px", borderRadius:14, textDecoration:"none" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
          <a href={`tel:${SITE.phone}`} style={{ display:"inline-flex", alignItems:"center", border:`1.5px solid ${t(.2)}`, color:t(.80), fontFamily:SANS, fontWeight:600, fontSize:14, padding:"14px 22px", borderRadius:14, textDecoration:"none" }}>
            {SITE.phoneDisplay}
          </a>
        </div>
        <div style={{ fontSize:12, color:t(.3), fontFamily:MONO }}>{SITE.email} · Trimulgherry, Hyderabad</div>
      </div>
    </section>
  );
}
