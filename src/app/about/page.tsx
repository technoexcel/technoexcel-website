import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:"About Ravi Saini — TechnoExcel Founder | 14 Years in Data",
  description:"TechnoExcel was founded by Ravi Saini with 14+ years in data solutions and training. 10,000+ professionals trained across India, Southeast Asia, Middle East, UK and USA.",
  alternates:{canonical:"https://technoexcel.in/about"},
};

const INK="#13293C", RED="#EE2354", BG="#0d1f2d", CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"About"}]} h1="14 years." h1red="One obsession." sub="Making data work for the people who use it — not the other way around." />

      <section id="te-about" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-about .ag{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:flex-start}
          #te-about .ab{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
          @media(max-width:1024px){#te-about .ag{grid-template-columns:1fr!important;gap:40px}}
          @media(max-width:768px){#te-about .ab{flex-direction:column} #te-about .ab a{justify-content:center;text-align:center}}
        `}} />
        <div className="ag">
          {/* Profile card */}
          <div style={{background:BG,borderRadius:20,padding:40,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <div style={{width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,.10)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,fontSize:44}}>👤</div>
            <div style={{fontFamily:"var(--font-serif,'Instrument Serif',serif)",fontSize:30,color:"#fff",marginBottom:6}}>Ravi Saini</div>
            <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(249, 247, 247, 0.75)",marginBottom:24}}>Founder & Lead Trainer</div>
            {["14+ years in data solutions & training","10,000+ professionals trained","200+ Reporting Solutions","India · SE Asia · Middle East · UK · USA"].map(s=>(
              <div key={s} style={{display:"flex",alignItems:"center",gap:10,fontSize:13,color:"rgba(255,255,255,.72)",marginBottom:10,textAlign:"left"}}>
                <span style={{width:5,height:5,borderRadius:"50%",background:"rgba(238,35,84,.60)",flexShrink:0}}/>
                {s}
              </div>
            ))}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:24,width:"100%"}}>
              <div style={{background:"rgba(238,35,84,.14)",borderRadius:10,padding:16,textAlign:"center"}}>
                <div style={{fontFamily:SANS,fontWeight:800,fontSize:24,color:RED,letterSpacing:"-1px"}}>4.8★</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,.58)",marginTop:3}}>Google · 729 reviews</div>
              </div>
              <div style={{background:"rgba(255,255,255,.06)",borderRadius:10,padding:16,textAlign:"center"}}>
                <div style={{fontFamily:SANS,fontWeight:800,fontSize:24,color:"#fff",letterSpacing:"-1px"}}>20+</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,.58)",marginTop:3}}>Companies trained</div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,fontFamily:MONO,fontSize:11,letterSpacing:"2.5px",textTransform:"uppercase",color:"rgba(19,41,60,.55)",marginBottom:10}}>
              <span style={{width:14,height:1,background:"rgba(19,41,60,.30)",flexShrink:0,display:"inline-block"}}/>The Story
            </div>
            <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(24px,3vw,40px)",letterSpacing:"-0.04em",color:INK,lineHeight:1.0,marginBottom:20}}>
              We started because<br/><span style={{color:RED}}>data was hard for everyone.</span>
            </h2>
            <p style={{fontSize:16,color:"rgba(19,41,60,.72)",lineHeight:1.85,marginBottom:18}}>
              TechnoExcel was founded in Hyderabad with a simple belief: the gap between data and decisions is a skills and systems problem — not a technology problem. Every organisation has enough data. Most don&apos;t have the tools, workflows or training to act on it.
            </p>
            <p style={{fontSize:16,color:"rgba(19,41,60,.72)",lineHeight:1.85,marginBottom:18}}>
              Over 14 years, we have trained more than 10,000+ professionals and built 100+ dashboards that are live in production today at companies like Star India, Tata Power, Genpact and Uber. Every engagement starts with your actual data — not textbook examples.
            </p>
            <p style={{fontSize:16,color:"rgba(19,41,60,.72)",lineHeight:1.85,marginBottom:28}}>
              The training side grew organically from the consulting work. Clients wanted their own teams to maintain and extend what we built. That led to structured programs that are now delivered across India and internationally — always with real data, live sessions, and outcomes you can measure.
            </p>
            <div style={{background:"#fff",border:"1px solid rgba(19,41,60,.08)",borderRadius:14,padding:"20px 24px",marginBottom:28}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:10}}>By the numbers</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
                {[["10K+","Professionals trained"],["500+","Corporate programs"],["50+","Live dashboards"]].map(([n,l])=>(
                  <div key={n}>
                    <div style={{fontFamily:SANS,fontWeight:800,fontSize:24,color:RED,letterSpacing:"-1px"}}>{n}</div>
                    <div style={{fontSize:12,color:"rgba(19,41,60,.58)",marginTop:3}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ab">
              <a href="/contact" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"14px 28px",borderRadius:12,textDecoration:"none"}}>Book Strategy Call →</a>
              <a href="/corporate" style={{display:"inline-flex",alignItems:"center",background:"transparent",color:"rgba(19,41,60,.65)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"13px 22px",borderRadius:12,border:"1px solid rgba(19,41,60,.15)",textDecoration:"none"}}>Corporate Training</a>
              <a href="/courses" style={{display:"inline-flex",alignItems:"center",background:"transparent",color:"rgba(19,41,60,.65)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"13px 22px",borderRadius:12,border:"1px solid rgba(19,41,60,.15)",textDecoration:"none"}}>Browse Courses</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
