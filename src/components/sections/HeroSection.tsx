"use client";
import { useEffect, useRef, useState } from "react";
import { WA } from "@/lib/constants";

const WORDS = ["automated.", "visualised.", "decided."];
const BG = "#0d1f2d", RED = "#EE2354";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const SERIF = "var(--font-serif,'Instrument Serif',Georgia,serif)";
const MONO = "var(--font-mono,'Space Mono',monospace)";
const t = (o: number) => `rgba(255,255,255,${o})`;

const WA_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [wordH, setWordH] = useState(110);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordRef.current) setWordH(wordRef.current.offsetHeight || 110);
    const timer = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="te-hero" style={{ background:BG, minHeight:"92vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"72px 96px 52px", position:"relative", overflow:"hidden" }}>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        @media(max-width:1024px){
          #te-hero{ padding:80px 48px 52px !important; }
        }
        @media(max-width:768px){
          #te-hero{ padding:80px 24px 48px !important; min-height:unset !important; }
          #te-hero .hero-cols{ grid-template-columns:1fr !important; gap:32px; }
          #te-hero .hero-left{ padding-right:0 !important; border-right:none !important; padding-bottom:28px; border-bottom:1px solid rgba(255,255,255,0.07); }
          #te-hero .hero-proof{ display:none !important; }
          #te-hero .hero-btns{ flex-direction:column; gap:10px; }
          #te-hero .hero-btns a{ justify-content:center; }
          #te-hero .hero-label{ font-size:11px !important; }
          #te-hero .hero-tag{ font-size:11px !important; }
        }
        @media(max-width:420px){ #te-hero{ padding:72px 18px 40px !important; } }
      `}} />

      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize:"80px 80px" }} />
      <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:`radial-gradient(circle,rgba(238,35,84,.10),transparent 60%)`, top:-100, right:-80, pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:1280, width:"100%" }}>
        <div className="hero-tag" style={{ display:"flex", alignItems:"center", gap:12, fontFamily:MONO, fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:t(.75), marginBottom:24 }}>
          <div style={{ width:18, height:1, background:t(.3), flexShrink:0 }} />
          Data Solutions &amp; Corporate Training
        </div>

        <div style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(44px,8.5vw,130px)", lineHeight:1.0, color:"#fff", letterSpacing:"-0.05em" }}>
          Your data,
        </div>

        <div style={{ overflow:"hidden", height:`clamp(48px,9vw,138px)`, marginBottom:36 }}>
          <div style={{ display:"flex", flexDirection:"column", transform:`translateY(${-idx * wordH}px)`, transition:"transform 0.65s cubic-bezier(0.16,1,0.3,1)" }}>
            {WORDS.map((w, i) => (
              <div key={i} ref={i===0 ? wordRef : undefined} style={{ fontFamily:SERIF, fontStyle:"italic", fontSize:"clamp(44px,8.5vw,130px)", lineHeight:1.0, height:`clamp(48px,9vw,138px)`, color:RED, display:"flex", alignItems:"center", flexShrink:0 }}>
                {w}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cols" style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", borderTop:`1px solid ${t(.08)}`, paddingTop:32 }}>
          <div className="hero-left" style={{ paddingRight:56, borderRight:`1px solid ${t(.07)}` }}>
            <h1 style={{ fontFamily:SANS, fontWeight:700, fontSize:"clamp(18px,2.15vw,28px)", color:t(.88), lineHeight:1.18, letterSpacing:"-0.03em", marginBottom:12 }}>
              Data Analytics, Automation and Training for Professionals & Teams
            </h1>
            <p style={{ fontFamily:SANS, fontWeight:300, fontSize:15, color:t(.80), lineHeight:1.8, maxWidth:480, marginBottom:28 }}>
              Custom dashboards, automation and training built around your actual data and workflows, not textbook examples.
            </p>
            <div className="hero-btns" style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
              <a href="/contact" style={{ display:"inline-flex", alignItems:"center", background:RED, color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"14px 28px", borderRadius:12, textDecoration:"none" }}>
                Book Strategy Call →
              </a>
              <a href={WA.strategy} target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#25D366", color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"14px 22px", borderRadius:12, textDecoration:"none" }}
                dangerouslySetInnerHTML={{ __html: WA_SVG + " WhatsApp" }} />
              <a href="/work" style={{ display:"inline-flex", alignItems:"center", background:"transparent", color:t(.75), fontFamily:SANS, fontWeight:600, fontSize:14, padding:"13px 20px", borderRadius:12, border:`1px solid ${t(.15)}`, textDecoration:"none" }}>
                View Work
              </a>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
              <span className="hero-label" style={{ fontFamily:MONO, fontSize:9, letterSpacing:"1.5px", textTransform:"uppercase", color:t(.60), flexShrink:0 }}>Trusted by</span>
              {["Star India","Times Group","Tata Power","Genpact","Uber","General Mills"].map((c,i) => (
                <span key={c} style={{ fontFamily:SANS, fontSize:11, fontWeight:600, color:t(.70) }}>
                  {c}{i<5 ? <span style={{color:t(.30),margin:"0 4px"}}>·</span> : ""}
                </span>
              ))}
              <span style={{ fontFamily:SANS, fontSize:11, fontWeight:600, color:"rgba(238,35,84,.5)" }}>+14 more</span>
            </div>
          </div>

          <div className="hero-proof" style={{ paddingLeft:52, display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:"2px", textTransform:"uppercase", color:t(.80), marginBottom:20 }}>
              Proven client outcomes
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px 28px" }}>
              {[
                { val:"₹31L",    lbl:"Supply chain costs avoided",       co:"Manufacturing · Power BI" },
                { val:"94%",     lbl:"Invoice reconciliation time saved", co:"FMCG Finance · Excel VBA" },
                { val:"11 days", lbl:"Avg dashboard deployment time",     co:"Across 50+ projects" },
                { val:"10K+",    lbl:"Professionals trained",             co:"Across India" },
              ].map(({ val, lbl, co }) => (
                <div key={val} style={{ borderTop:`1px solid ${t(.07)}`, paddingTop:16 }}>
                  <div style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(26px,3vw,42px)", color:RED, letterSpacing:"-1.5px", lineHeight:1, marginBottom:6 }}>{val}</div>
                  <div style={{ fontFamily:SANS, fontSize:13, color:t(.7), marginBottom:3, lineHeight:1.3 }}>{lbl}</div>
                  <div style={{ fontFamily:MONO, fontSize:9, color:t(.70) }}>{co}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


