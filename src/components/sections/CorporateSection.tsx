import React from "react";
import { WA } from "@/lib/constants";
import PhotoFan from "./PhotoFan";

const TRACKS = [
  { num:"TRACK 01", title:"Excel Mastery",    body:"L1 Essentials · L2 Analyst · L3 Automation. 1–2 days each. Most-requested program." },
  { num:"TRACK 02", title:"Analytics & BI",   body:"Data Thinking · Power BI · Storytelling with Data. For MIS and management teams." },
  { num:"TRACK 03", title:"Power Platform",   body:"Power Automate · Power Apps · SharePoint. Build workflows — no code needed." },
];
const CLIENTS_CORP = ["Star India","Times Group","Genpact","Uber","Tata Power","General Mills","Coromandel","UPL","Amara Raja","Nagarjuna","+10 more"];
const INK = "#13293C", RED = "#EE2354", CREAM = "#F4F2EE";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO = "var(--font-mono,'Space Mono',monospace)";

export default function CorporateSection() {
  return (
    <section id="te-corp" style={{ background:CREAM, padding:"80px 52px" }}>
      <style>{`
        #te-corp .corp-photo { display: block; }
        #te-corp .track-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(19,41,60,0.07);
        }
        #te-corp .corp-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          #te-corp .corp-photo { display: none !important; }
          #te-corp .track-grid {
            grid-template-columns: 70px 1fr !important;
          }
          #te-corp .corp-btns {
            flex-direction: column;
          }
          #te-corp .corp-btns a {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, fontFamily:MONO, fontSize:9, letterSpacing:"2.5px", textTransform:"uppercase", color:"rgba(19,41,60,0.60)", marginBottom:8 }}>
          <span style={{ width:14, height:1, background:"rgba(19,41,60,.3)", flexShrink:0, display:"inline-block" }} />Corporate Training
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"start", marginTop:8 }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(28px,4vw,52px)", lineHeight:.96, letterSpacing:"-0.04em", color:INK, marginBottom:16 }}>
              Upskill your team.<br/><span style={{ color:RED }}>Results by week 2.</span>
            </h2>
            <p style={{ fontFamily:SANS, fontSize:15, color:"rgba(19,41,60,0.70)", lineHeight:1.8, marginBottom:18 }}>
              Custom programs delivered on-site, virtually, or hybrid — across India, Middle East, Southeast Asia, UK, USA. Built around your actual data and KPIs.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:18 }}>
              {CLIENTS_CORP.map(c => (
                <span key={c} style={{ fontSize:11, fontWeight:600, padding:"4px 12px", border:"1px solid rgba(19,41,60,.1)", borderRadius:20, color:"rgba(19,41,60,0.68)" }}>{c}</span>
              ))}
            </div>
            <div className="corp-btns">
              <a href={WA.corporate} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, background:RED, color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"13px 24px", borderRadius:12, textDecoration:"none" }}>Request a Proposal →</a>
              <a href="/corporate" style={{ display:"inline-flex", alignItems:"center", background:"transparent", color:"rgba(19,41,60,0.68)", fontFamily:SANS, fontWeight:600, fontSize:14, padding:"12px 20px", borderRadius:12, border:"1px solid rgba(19,41,60,.12)", textDecoration:"none" }}>Learn more</a>
            </div>
            <div style={{ borderTop:"1px solid rgba(19,41,60,.1)" }}>
              {TRACKS.map(tr => (
                <div key={tr.num} className="track-grid">
                  <div style={{ fontFamily:MONO, fontSize:9, color:RED, letterSpacing:"2px", paddingTop:2 }}>{tr.num}</div>
                  <div>
                    <div style={{ fontFamily:SANS, fontWeight:700, fontSize:15, color:INK, marginBottom:4 }}>{tr.title}</div>
                    <div style={{ fontSize:12, color:"rgba(19,41,60,0.68)", lineHeight:1.55 }}>{tr.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo fan (hidden on mobile) */}
          <div className="corp-photo" style={{ background:"#fff", borderRadius:16, padding:"28px 24px 20px", boxShadow:"0 4px 40px rgba(19,41,60,.08)", border:"1px solid rgba(19,41,60,.07)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:MONO, fontSize:8, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(19,41,60,0.58)", marginBottom:20 }}>
              <span style={{ width:12, height:1, background:"rgba(19,41,60,.2)", flexShrink:0 }} />Real Training · Across Asia
            </div>
            <PhotoFan />
          </div>
        </div>
      </div>
    </section>
  );
}
