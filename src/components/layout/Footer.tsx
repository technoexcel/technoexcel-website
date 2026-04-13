import React from "react";
import { NAV_LINKS, COURSES, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="te-footer" style={{ background:"#071420",padding:"52px 52px 28px",borderTop:"1px solid rgba(255,255,255,0.08)" }}>
      <style suppressHydrationWarning
      dangerouslySetInnerHTML={{
      __html: `
        #te-footer .f-grid{display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr;gap:36px;margin-bottom:44px}
        #te-footer .f-head{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.55);margin-bottom:16px}
        #te-footer .f-link{display:block;font-size:12px;color:rgba(255,255,255,0.72);margin-bottom:10px;line-height:1.5;transition:color .2s}
        #te-footer .f-link:hover{color:#EE2354}
        #te-footer .f-tagline{font-family:'Space Mono',monospace;font-size:12px;color:#fff;letter-spacing:.5px;margin-top:12px}
        #te-footer .f-bottom{border-top:1px solid rgba(255,255,255,0.89);padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
        @media(max-width:768px){
          #te-footer{padding:40px 20px 24px}
          #te-footer .f-grid{grid-template-columns:1fr 1fr!important;gap:28px}
          #te-footer .f-brand{grid-column:1 / -1}
          #te-footer .f-bottom{flex-direction:column;align-items:flex-start;gap:6px}
        }
      `,
      }}
      />
      <div style={{ maxWidth:1280,margin:"0 auto" }}>
        <div className="f-grid">
          <div className="f-brand">
            <a href="/" style={{ display:"inline-block",marginBottom:14,lineHeight:0 }}>
              <img src="/images/logo-dark.png" alt="TechnoExcel" style={{ height:40 ,width:"auto" }} />
            </a>
            <p style={{ fontSize:13,color:"rgba(255,255,255,0.68)",lineHeight:1.75,maxWidth:280,marginBottom:0 }}>
              Data solutions, automation and corporate training for organisations across India, Southeast Asia and beyond.
            </p>
            <div className="f-tagline">Learn Technology with Excellence.</div>
          </div>

          <div>
            <div className="f-head">Solutions</div>
            {["BI Dashboards","Process Automation","Power Platform","Data Consulting"].map(s=>(
              <a key={s} href="/solutions" className="f-link">{s}</a>
            ))}
          </div>

          <div>
            <div className="f-head">Courses</div>
            {COURSES.slice(0,6).map(c=>(
              <a key={c.slug} href={`/courses/${c.slug}`} className="f-link">{c.title}</a>
            ))}
            <a href="/courses" className="f-link" style={{ color:"rgba(238,35,84,0.8)" }}>View all 10 →</a>
          </div>

          <div>
            <div className="f-head">Company</div>
            {NAV_LINKS.map(l=>(
              <a key={l.href} href={l.href} className="f-link">{l.label}</a>
            ))}
            <a href={`tel:${SITE.phone}`} className="f-link" style={{ color:"rgba(238,35,84,0.75)",fontWeight:600,marginTop:8 }}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="f-link" style={{ color:"rgba(255,255,255,0.55)",fontSize:11 }}>{SITE.email}</a>
          </div>
        </div>

        <div className="f-bottom">
          <span style={{ fontSize:11,color:"rgba(255,255,255,0.56)" }}>© 2026 TechnoExcel. All rights reserved.</span>
          <span style={{ fontSize:11,color:"rgba(255, 255, 255, 0.56)" }}> Hyderabad · India</span>
        </div>
      </div>
    </footer>
  );
}
