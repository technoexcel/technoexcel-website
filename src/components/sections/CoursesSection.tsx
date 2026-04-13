"use client";
import React from "react";
import { COURSES, WA } from "@/lib/constants";

const INK = "#13293C", RED = "#EE2354";
const SANS = "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO = "var(--font-mono,'Space Mono',monospace)";

export default function CoursesSection() {
  return (
    <section id="te-courses-section" style={{ background:"#fff", padding:"80px 52px" }}>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        #te-courses-section .course-row{display:flex;align-items:center;justify-content:space-between;padding:18px 0;border-bottom:1px solid rgba(19,41,60,0.07);transition:padding-left 0.2s}
        #te-courses-section .course-row:hover{padding-left:10px}
        #te-courses-section .course-meta{display:flex;align-items:center;gap:16px;flex-shrink:0}
        #te-courses-section .course-duration{display:block}
        @media(max-width:768px){
          #te-courses-section .course-row{flex-direction:column;align-items:flex-start;gap:8px}
          #te-courses-section .course-row:hover{padding-left:0}
          #te-courses-section .course-meta{width:100%;justify-content:flex-end}
          #te-courses-section .course-duration{display:none}
        }
      `}} />
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start", marginBottom:40 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, fontFamily:MONO, fontSize:9, letterSpacing:"2.5px", textTransform:"uppercase", color:"rgba(19,41,60,0.60)", marginBottom:8 }}>
              <span style={{ width:14, height:1, background:"rgba(19,41,60,.3)", flexShrink:0, display:"inline-block" }} />Courses
            </div>
            <h2 style={{ fontFamily:SANS, fontWeight:800, fontSize:"clamp(28px,4vw,52px)", lineHeight:.96, letterSpacing:"-0.04em", color:INK }}>
              Skills that pay<br/><span style={{ color:RED }}>real dividends.</span>
            </h2>
          </div>
          <p style={{ fontFamily:SANS, fontSize:15, color:"rgba(19,41,60,0.70)", lineHeight:1.8, paddingTop:4 }}>
            10 courses from 2 weeks to 6 months. Every course taught with real business data, delivered live.
          </p>
        </div>
        <div style={{ borderTop:"1px solid rgba(19,41,60,.07)" }}>
          {COURSES.map((c, i) => (
            <a key={c.slug} href={`/courses/${c.slug}`} style={{ textDecoration:"none" }}>
              <div className="course-row">
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ fontFamily:MONO, fontSize:10, color:RED, letterSpacing:"1px", width:28, flexShrink:0 }}>{String(i+1).padStart(2,"0")}</div>
                  <div style={{ fontFamily:SANS, fontWeight:700, fontSize:17, color:INK, letterSpacing:"-0.3px" }}>{c.title}</div>
                  {c.badge && <span style={{ fontFamily:SANS, fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20, background:c.badge==="2025"?RED:INK, color:"#fff", flexShrink:0 }}>{c.badge}</span>}
                </div>
                <div className="course-meta">
                  <span className="course-duration" style={{ fontFamily:MONO, fontSize:10, color:"rgba(19,41,60,0.55)" }}>{c.duration}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(19,41,60,.3)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ display:"flex", gap:12, marginTop:28, flexWrap:"wrap" }}>
          <a href="/courses" style={{ display:"inline-flex", alignItems:"center", background:RED, color:"#fff", fontFamily:SANS, fontWeight:700, fontSize:14, padding:"13px 26px", borderRadius:12, textDecoration:"none" }}>View All 10 Courses →</a>
          <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", background:"transparent", color:"rgba(19,41,60,0.68)", fontFamily:SANS, fontWeight:600, fontSize:14, padding:"12px 22px", borderRadius:12, border:"1px solid rgba(19,41,60,.12)", textDecoration:"none" }}>Not sure? Ask us</a>
        </div>
      </div>
    </section>
  );
}
