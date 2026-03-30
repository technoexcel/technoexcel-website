import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:"Excel, Power BI & Data Analytics Blog | TechnoExcel",
  description:"Practical 2026 guides on Excel automation, Power BI dashboards, analytics careers and data skills — from real consulting and training work at TechnoExcel.",
  alternates:{canonical:"https://technoexcel.in/blog"},
};

// ── INSIGHTS: Rich HTML data reports ─────────────────────────────────────────
export const INSIGHTS = [
  {
    slug:    "india-ev-battery-war.html",
    title:   "The Battery War: Can India Break China's EV Dominance?",
    cat:     "Energy & Strategy",
    date:    "Mar 2026",
    read:    "12 min",
    featured: true,
    excerpt: "A data-driven deep dive into India's EV battery strategy — BYD's cost dominance, critical mineral supply chains, Na-ion technology bets, and the 5 policy levers that could reshape India's energy security by 2035.",
    tags:    ["EV","Energy Security","Battery","India","Strategy"],
  },
  // Add more reports here as you create them
];

export const BLOG_POSTS=[
  {slug:"how-to-automate-weekly-reports-excel",title:"How to Automate Your Weekly Reports in Excel",cat:"Excel",date:"Mar 2026",read:"8 min",excerpt:"Stop spending 2+ hours every Friday rebuilding the same report. Power Query, pivot tables and a single macro can cut that to under 10 minutes — and keep it that way permanently without any manual effort.",tags:["Power Query","VBA","Pivot Tables"]},
  {slug:"power-bi-vs-excel-which-is-right",title:"Power BI vs Excel — Which Is Right for Your Team?",cat:"Power BI",date:"Mar 2026",read:"6 min",excerpt:"Most teams don't need to replace Excel — they need to know where it ends and where Power BI begins. A practical decision guide based on reporting frequency, audience size and refresh needs.",tags:["Power BI","Excel","Decision Guide"]},
  {slug:"top-5-excel-skills-every-analyst",title:"Top 5 Excel Skills Every Analyst Needs in 2026",cat:"Excel",date:"Feb 2026",read:"5 min",excerpt:"XLOOKUP, Power Query, dynamic arrays, pivot calculated fields and named ranges. These five skills separate analysts who spend 80% of their time on data prep from those who spend 20%.",tags:["XLOOKUP","Dynamic Arrays","Power Query"]},
  {slug:"what-is-data-analytics-plain-english",title:"What Is Data Analytics? A Plain-English Guide",cat:"Analytics",date:"Feb 2026",read:"5 min",excerpt:"No jargon. What data analytics actually means for a working professional in India in 2026, which tools are involved, what the jobs pay, and how to know if it is the right career move for you.",tags:["Career","Analytics","Beginners"]},
  {slug:"invoice-reconciliation-vba-case-study",title:"Invoice Reconciliation: From 6 Hours to 22 Minutes",cat:"Case Study",date:"Jan 2026",read:"7 min",excerpt:"Real case study from a FMCG finance team — the exact VBA automation built, how long it took, what it handles now, and what the ROI looked like after 3 months in production.",tags:["VBA","Automation","Finance"]},
  {slug:"microsoft-copilot-excel-practical-guide",title:"Microsoft Copilot in Excel: What It Can Actually Do in 2026",cat:"AI",date:"Jan 2026",read:"6 min",excerpt:"Where Copilot genuinely saves time, where it still fails, and how to use it without losing accuracy. Written for analysts and managers who want practical use — not hype.",tags:["Copilot","AI","Microsoft 365"]},
  {slug:"power-query-beginner-guide",title:"Power Query: Replace 80% of Your Copy-Paste Work",cat:"Excel",date:"Dec 2025",read:"9 min",excerpt:"Set it up once. Then never copy-paste between sheets again. A complete step-by-step guide for analysts who want reports that refresh automatically every week.",tags:["Power Query","Automation","Beginners"]},
  {slug:"power-bi-dashboard-design-principles",title:"5 Dashboard Design Principles That Make Reports Useful",cat:"Power BI",date:"Dec 2025",read:"7 min",excerpt:"The exact principles used in every TechnoExcel client dashboard. The difference between a report people open once and ignore versus one that drives decisions every Monday morning.",tags:["Dashboard Design","Power BI","UX"]},
  {slug:"data-analytics-career-india-2026",title:"Data Analytics as a Career in India — 2026 Guide",cat:"Career",date:"Mar 2026",read:"10 min",excerpt:"What roles are hiring, what skills companies actually need right now, realistic salary ranges by experience level, and which learning path makes sense depending on where you are starting from.",tags:["Career","India","Salary","2026"]},
];

const CAT_COLORS: Record<string,[string,string]>={
  "Excel":["rgba(238,35,84,.08)","#EE2354"],
  "Power BI":["rgba(37,99,235,.08)","#2563eb"],
  "Analytics":["rgba(5,150,105,.08)","#059669"],
  "AI":["rgba(217,119,6,.08)","#d97706"],
  "Case Study":["rgba(124,58,237,.08)","#7c3aed"],
  "Career":["rgba(20,184,166,.08)","#0d9488"],
  "Energy & Strategy":["rgba(15,34,68,.08)","#0F2244"],
};

const INK="#13293C",RED="#EE2354",CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function BlogPage(){
  const [feat,...rest]=BLOG_POSTS;
  return(
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Blog"}]} h1="Excel, Power BI" h1red="& Analytics guides." sub="Practical articles from real consulting and training work — written to help you learn faster and find the right next step." />

      {/* ── INSIGHTS / DATA REPORTS SECTION ── */}
      <section style={{background:"#081629",padding:"64px 52px"}}>
        <style suppressHydrationWarning>{`
          #te-insights .wrap{max-width:1280px;margin:0 auto}
          #te-insights .ig{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px;margin-top:28px}
          #te-insights .ic{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:28px;display:flex;flex-direction:column;text-decoration:none;transition:all .2s}
          #te-insights .ic:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);transform:translateY(-3px)}
          #te-insights .ic.feat-card{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center}
          @media(max-width:768px){#te-insights{padding:48px 20px!important} #te-insights .ic.feat-card{grid-template-columns:1fr!important;gap:20px}}
        `}</style>
        <div id="te-insights">
          <div className="wrap">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:20,flexWrap:"wrap",marginBottom:8}}>
              <div>
                <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:10}}>Data Insights · Reports</div>
                <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,3.5vw,38px)",letterSpacing:"-0.04em",color:"#fff",lineHeight:1}}>
                  Original research.<br/><span style={{color:"#14a8ad"}}>Data-driven reports.</span>
                </h2>
              </div>
              <p style={{fontSize:14,color:"rgba(255,255,255,.50)",lineHeight:1.8,maxWidth:360}}>Deep-dive reports with live charts and data visualisations — built the same way we build client dashboards.</p>
            </div>
            <div className="ig">
              {INSIGHTS.map(ins=>{
                return(
                  <a key={ins.slug} href={`/insights/${ins.slug}`} className={`ic${ins.featured?" feat-card":""}`} target="_blank" rel="noopener noreferrer">
                    {ins.featured&&(
                      <div style={{background:"rgba(13,115,119,.15)",border:"1px solid rgba(13,115,119,.3)",borderRadius:12,padding:"28px",display:"flex",alignItems:"center",justifyContent:"center",minHeight:200}}>
                        <div style={{textAlign:"center"}}>
                          <div style={{fontSize:40,marginBottom:12}}>⚡</div>
                          <div style={{fontFamily:SANS,fontWeight:800,fontSize:20,color:"#fff",lineHeight:1.3,maxWidth:260}}>{ins.title}</div>
                        </div>
                      </div>
                    )}
                    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                        <span style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:20,background:"rgba(20,168,173,.15)",color:"#14a8ad",display:"inline-block"}}>{ins.cat}</span>
                        {ins.featured&&<span style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:20,background:"rgba(238,35,84,.2)",color:"#ff6b8a",display:"inline-block"}}>Featured</span>}
                      </div>
                      <div style={{fontFamily:SANS,fontWeight:700,fontSize:ins.featured?22:16,color:"#fff",letterSpacing:"-0.3px",marginBottom:12,lineHeight:1.35}}>{ins.title}</div>
                      <p style={{fontSize:13,color:"rgba(255,255,255,.55)",lineHeight:1.8,flex:1,marginBottom:16}}>{ins.excerpt}</p>
                      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
                        {ins.tags.slice(0,4).map(t=><span key={t} style={{fontFamily:MONO,fontSize:10,padding:"2px 8px",borderRadius:4,background:"rgba(255,255,255,.07)",color:"rgba(255,255,255,.45)"}}>{t}</span>)}
                      </div>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:11,color:"rgba(255,255,255,.35)",fontFamily:MONO,borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:14}}>
                        <span>{ins.date} · {ins.read}</span>
                        <span style={{color:"#14a8ad",fontWeight:700}}>Open report →</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ARTICLES SECTION ── */}
      <section id="te-blog" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning>{`
          #te-blog .bi{max-width:1280px;margin:0 auto}
          #te-blog .feat{display:grid;grid-template-columns:1fr 1fr;gap:28px;padding:28px;background:#fff;border-radius:18px;border:1px solid rgba(19,41,60,.08);margin-bottom:32px;text-decoration:none;transition:box-shadow .2s}
          #te-blog .feat:hover{box-shadow:0 10px 36px rgba(19,41,60,.10)}
          #te-blog .fthumb{background:#0d1f2d;border-radius:12px;display:flex;align-items:center;justify-content:center;min-height:220px;padding:32px}
          #te-blog .cg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
          #te-blog .card{background:#fff;border-radius:14px;padding:24px;border:1px solid rgba(19,41,60,.08);display:flex;flex-direction:column;text-decoration:none;transition:box-shadow .2s,transform .2s}
          #te-blog .card:hover{box-shadow:0 8px 28px rgba(19,41,60,.09);transform:translateY(-3px)}
          @media(max-width:1024px){#te-blog .feat{grid-template-columns:1fr!important} #te-blog .fthumb{min-height:140px} #te-blog .cg{grid-template-columns:1fr 1fr!important}}
          @media(max-width:768px){#te-blog{padding:48px 20px!important} #te-blog .feat{padding:18px;gap:16px} #te-blog .fthumb{min-height:110px;padding:18px} #te-blog .cg{grid-template-columns:1fr!important;gap:12px} #te-blog .card{padding:18px}}
        `}</style>
        <div className="bi">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:20,flexWrap:"wrap",marginBottom:28}}>
            <div>
              <div style={{fontFamily:MONO,fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.50)",marginBottom:8}}>Knowledge hub · 2026</div>
              <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,4vw,42px)",letterSpacing:"-0.04em",color:INK,lineHeight:1}}>Read, learn, choose your next step.</h2>
            </div>
            <p style={{fontSize:14,color:"rgba(19,41,60,.62)",lineHeight:1.8,maxWidth:380}}>Every article answers a real business or career question and guides you toward the right course or solution.</p>
          </div>
          <a href={`/blog/${feat.slug}`} className="feat">
            <div className="fthumb">
              <div style={{textAlign:"center"}}>
                <span style={{fontSize:11,fontWeight:700,padding:"3px 12px",borderRadius:20,background:"rgba(238,35,84,.18)",color:RED,display:"inline-block",marginBottom:14}}>{feat.cat} · Featured · 2026</span>
                <div style={{fontFamily:SANS,fontWeight:700,fontSize:"clamp(17px,2.5vw,24px)",color:"#fff",lineHeight:1.35,maxWidth:380}}>{feat.title}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(18px,2.5vw,26px)",color:INK,letterSpacing:"-0.4px",marginBottom:14,lineHeight:1.2}}>{feat.title}</div>
              <p style={{fontSize:15,color:"rgba(19,41,60,.68)",lineHeight:1.85,marginBottom:18}}>{feat.excerpt}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:18}}>
                {feat.tags.map(t=><span key={t} style={{fontFamily:MONO,fontSize:10,padding:"3px 9px",borderRadius:4,background:"rgba(19,41,60,.06)",color:"rgba(19,41,60,.58)"}}>{t}</span>)}
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:11,color:"rgba(19,41,60,.50)",fontFamily:MONO,borderTop:"1px solid rgba(19,41,60,.07)",paddingTop:14}}>
                <span>{feat.date} · {feat.read}</span>
                <span style={{color:RED,fontWeight:700}}>Read article →</span>
              </div>
            </div>
          </a>
          <div className="cg">
            {rest.map(p=>{
              const [bg,tc]=CAT_COLORS[p.cat]||["rgba(19,41,60,.06)","rgba(19,41,60,.55)"];
              return(
                <a key={p.slug} href={`/blog/${p.slug}`} className="card">
                  <span style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:20,background:bg,color:tc,display:"inline-block",marginBottom:14}}>{p.cat}</span>
                  <div style={{fontFamily:SANS,fontWeight:700,fontSize:16,color:INK,letterSpacing:"-0.2px",marginBottom:12,lineHeight:1.4}}>{p.title}</div>
                  <p style={{fontSize:13,color:"rgba(19,41,60,.65)",lineHeight:1.8,flex:1}}>{p.excerpt}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:5,marginTop:14}}>
                    {p.tags.slice(0,2).map(t=><span key={t} style={{fontFamily:MONO,fontSize:10,padding:"2px 7px",borderRadius:4,background:"rgba(19,41,60,.05)",color:"rgba(19,41,60,.52)"}}>{t}</span>)}
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10,color:"rgba(19,41,60,.45)",fontFamily:MONO,borderTop:"1px solid rgba(19,41,60,.06)",paddingTop:12,marginTop:14}}>
                    <span>{p.date}</span><span>{p.read} →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
