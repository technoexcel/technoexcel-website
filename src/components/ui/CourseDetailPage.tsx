import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BrochureRequestForm from "@/components/sections/BrochureRequestForm";
import { WA, COURSES } from "@/lib/constants";

const INK="#13293C",RED="#EE2354",CREAM="#F4F2EE",BG="#0d1f2d";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

interface CourseDetailProps {
  slug: string;
  title: string;
  badge?: string;
  duration: string;
  tagline: string;
  description: string;
  outcomes: string[];
  modules: { title: string; topics: string[] }[];
  whoFor: string[];
  relatedSlug?: string;
  brochureHref?: string;
  brochureLabel?: string;
  brochureRequestTitle?: string;
  detailedOutline?: {
    week: string;
    module: string;
    topics: string[];
    application: string;
  }[];
}

export function CourseDetailPage({ slug, title, badge, duration, tagline, description, outcomes, modules, whoFor, relatedSlug, brochureHref, brochureLabel = "Download Course Outline", brochureRequestTitle, detailedOutline }: CourseDetailProps) {
  const relatedCourses = COURSES.filter(c => c.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Courses",href:"/courses"},{label:title}]} h1={title} h1red={tagline} sub={description} />

      <section id="te-course" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-course .cg{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 340px;gap:56px;align-items:flex-start}
          #te-course .mod{background:#fff;border:1px solid rgba(19,41,60,.08);border-radius:14px;padding:24px;margin-bottom:16px}
          #te-course .sidebar{position:sticky;top:92px}
          #te-course .sbox{background:#fff;border:1px solid rgba(19,41,60,.08);border-radius:16px;padding:28px;margin-bottom:16px}
          #te-course .rel{display:grid;grid-template-columns:1fr;gap:10px;margin-top:16px}
          #te-course .outline-card{background:#fff;border:1px solid rgba(19,41,60,.08);border-radius:14px;padding:24px;margin-bottom:16px}
          #te-course .outline-meta{font-family:${MONO};font-size:10px;letter-spacing:1.3px;text-transform:uppercase;color:rgba(19,41,60,.44);margin-bottom:8px}
          #te-course .outline-app{margin-top:16px;padding:14px 16px;background:rgba(19,41,60,.035);border-radius:10px;font-size:13px;line-height:1.65;color:rgba(19,41,60,.70)}
          #te-course .outline-app strong{color:${INK}}
          @media(max-width:1024px){#te-course .cg{grid-template-columns:1fr!important} #te-course .sidebar{position:static}}
          @media(max-width:768px){#te-course{padding:48px 20px!important}}
        `}} />
        <div className="cg">
          {/* Left: main content */}
          <div>
            {/* Stats row */}
            <div style={{display:"flex",gap:0,marginBottom:40,paddingBottom:32,borderBottom:"1px solid rgba(19,41,60,.08)",flexWrap:"wrap"}}>
              {[["Duration",duration],["Format","Live, Instructor-led"],["Level","All levels"],["Language","English / Hindi"]].map(([k,v])=>(
                <div key={k} style={{paddingRight:28,marginRight:28,borderRight:"1px solid rgba(19,41,60,.08)",marginBottom:12}}>
                  <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.48)",marginBottom:5}}>{k}</div>
                  <div style={{fontFamily:SANS,fontWeight:700,fontSize:15,color:INK}}>{v}</div>
                </div>
              ))}
            </div>

            {/* What you will achieve */}
            <h2 style={{fontFamily:SANS,fontWeight:700,fontSize:"clamp(20px,2.5vw,28px)",color:INK,letterSpacing:"-0.3px",marginBottom:20}}>What you will achieve</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:40}}>
              {outcomes.map((o,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"14px 16px",background:"#fff",border:"1px solid rgba(19,41,60,.07)",borderRadius:10}}>
                  <span style={{color:RED,fontWeight:700,fontSize:16,flexShrink:0,marginTop:1}}>✓</span>
                  <span style={{fontSize:14,color:"rgba(19,41,60,.72)",lineHeight:1.65}}>{o}</span>
                </div>
              ))}
            </div>

            {/* Who this is for */}
            <h2 style={{fontFamily:SANS,fontWeight:700,fontSize:"clamp(20px,2.5vw,28px)",color:INK,letterSpacing:"-0.3px",marginBottom:16}}>Who this is for</h2>
            <div style={{marginBottom:40}}>
              {whoFor.map((w,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:15,color:"rgba(19,41,60,.70)",marginBottom:12,lineHeight:1.7}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:RED,flexShrink:0,marginTop:8}}/>
                  {w}
                </div>
              ))}
            </div>

            {!detailedOutline && (
              <>
                {/* Curriculum */}
                <h2 style={{fontFamily:SANS,fontWeight:700,fontSize:"clamp(20px,2.5vw,28px)",color:INK,letterSpacing:"-0.3px",marginBottom:20}}>Curriculum</h2>
                {modules.map((m,i)=>(
                  <div key={i} className="mod">
                    <div style={{fontFamily:SANS,fontWeight:700,fontSize:16,color:INK,marginBottom:14}}>{m.title}</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                      {m.topics.map((t,j)=>(
                        <div key={j} style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"rgba(19,41,60,.68)"}}>
                          <span style={{width:5,height:5,borderRadius:"50%",background:"rgba(19,41,60,.25)",flexShrink:0}}/>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {detailedOutline && detailedOutline.length > 0 && (
              <>
                <h2 style={{fontFamily:SANS,fontWeight:700,fontSize:"clamp(20px,2.5vw,28px)",color:INK,letterSpacing:"-0.3px",marginTop:44,marginBottom:12}}>Complete 4-week outline</h2>
                <p style={{fontSize:15,color:"rgba(19,41,60,.68)",lineHeight:1.75,marginBottom:18,maxWidth:820}}>
                  This Advanced Excel with Gen AI syllabus is designed for working professionals and teams who want practical Excel reporting, automation, dashboarding and AI-assisted productivity skills.
                </p>
                {detailedOutline.map((item, i) => (
                  <div key={`${item.week}-${item.module}-${i}`} className="outline-card">
                    <div className="outline-meta">{item.week}</div>
                    <div style={{fontFamily:SANS,fontWeight:700,fontSize:16,color:INK,marginBottom:14}}>{item.module}</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                      {item.topics.map((topic, j) => (
                        <div key={j} style={{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,color:"rgba(19,41,60,.68)",lineHeight:1.55}}>
                          <span style={{width:5,height:5,borderRadius:"50%",background:"rgba(19,41,60,.25)",flexShrink:0,marginTop:8}}/>
                          {topic}
                        </div>
                      ))}
                    </div>
                    <div className="outline-app"><strong>Business application:</strong> {item.application}</div>
                  </div>
                ))}
                {brochureRequestTitle && <BrochureRequestForm courseTitle={brochureRequestTitle} />}
                {brochureHref && (
                  <a href={brochureHref} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px 18px",borderRadius:12,textDecoration:"none",marginBottom:36}}>
                    {brochureLabel}
                  </a>
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sbox">
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.48)",marginBottom:14}}>For teams and professionals</div>
              <div style={{fontFamily:SANS,fontWeight:800,fontSize:28,color:RED,letterSpacing:"-1px",marginBottom:4}}>{duration}</div>
              <div style={{fontFamily:SANS,fontSize:14,color:"rgba(19,41,60,.60)",marginBottom:24}}>Live, instructor-led sessions</div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <a href="/contact" style={{display:"flex",alignItems:"center",justifyContent:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:15,padding:"15px",borderRadius:12,textDecoration:"none"}}>Discuss Training Requirement</a>
                <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#25D366",color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px",borderRadius:12,textDecoration:"none"}}>Ask on WhatsApp</a>
                <a href="/courses" style={{display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",color:"rgba(19,41,60,.60)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"12px",borderRadius:12,border:"1px solid rgba(19,41,60,.14)",textDecoration:"none"}}>Browse All Courses</a>
              </div>
            </div>
            <div className="sbox" style={{background:BG}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.50)",marginBottom:14}}>Every course includes</div>
              {["Live sessions with a real trainer","Practice with realistic business data","30-day post-course support","Completion certificate"].map((f,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.72)",marginBottom:10}}>
                  <span style={{color:RED,fontWeight:700}}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
