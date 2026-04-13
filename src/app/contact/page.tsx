import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { WA, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title:"Contact TechnoExcel | Book a Free Strategy Call",
  description:"Book a free 30-minute data strategy call. +91 88019 12200 | connect@technoexcel.in | Trimulgherry, Hyderabad — 500015.",
  alternates:{canonical:"https://technoexcel.in/contact"},
};

const INK="#13293C",RED="#EE2354",BG="#0d1f2d",CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{label:"TechnoExcel",href:"/"},{label:"Contact"}]} h1="Let's talk about" h1red="your data." sub="Free 30-minute strategy call. No obligation. We identify your top 3 data opportunities and tell you exactly what to do next." />

      <section id="te-contactpage" style={{background:CREAM,padding:"64px 52px"}}>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
          #te-contactpage .cg{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1fr 1.35fr;gap:64px;align-items:flex-start}
          #te-contactpage .cib{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}
          @media(max-width:1024px){#te-contactpage .cg{grid-template-columns:1fr!important;gap:36px}}
          @media(max-width:768px){#te-contactpage .cib{flex-direction:column} #te-contactpage .cib a{justify-content:center;text-align:center}}
        `}} />
        <div className="cg">
          {/* Left: contact details */}
          <div>
            <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(22px,3vw,36px)",letterSpacing:"-0.04em",color:INK,lineHeight:1.0,marginBottom:28}}>
              Easy to reach.<br/><span style={{color:RED}}>Easy to start.</span>
            </h2>

            {[
              {icon:"📞",label:"Phone / WhatsApp",val:SITE.phoneDisplay,href:`tel:${SITE.phone}`},
              {icon:"✉️",label:"Email",val:SITE.email,href:`mailto:${SITE.email}`},
              {icon:"📍",label:"Office",val:SITE.addressFull,href:SITE.mapUrl},
            ].map(({icon,label,val,href})=>(
              <div key={label} style={{display:"flex",alignItems:"flex-start",gap:14,padding:"18px 0",borderBottom:"1px solid rgba(19,41,60,.08)"}}>
                <div style={{width:40,height:40,borderRadius:10,background:"rgba(238,35,84,.09)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18}}>{icon}</div>
                <div>
                  <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.50)",marginBottom:4}}>{label}</div>
                  {href
                    ?<a href={href} target={label==="Office"?"_blank":undefined} rel={label==="Office"?"noopener noreferrer":undefined} style={{fontSize:15,fontWeight:600,color:INK,textDecoration:"none",lineHeight:1.65}}>{val}</a>
                    :<div style={{fontSize:15,fontWeight:600,color:INK,lineHeight:1.65}}>{val}</div>}
                </div>
              </div>
            ))}

            <div className="cib">
              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px 22px",borderRadius:12,textDecoration:"none"}}>WhatsApp Us</a>
              <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px 22px",borderRadius:12,textDecoration:"none"}}>Get Directions →</a>
            </div>

            <div style={{background:BG,borderRadius:14,padding:"22px 24px",marginTop:28}}>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.50)",marginBottom:14}}>What to expect</div>
              {["Book via form or WhatsApp — we respond within 2 hours","Free 30-min call where we review your current setup","We identify your top 3 data opportunities with priorities","You receive a proposal or course recommendation — your call"].map((s,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:12,fontSize:13,color:"rgba(255,255,255,.72)",lineHeight:1.65}}>
                  <span style={{fontFamily:MONO,fontSize:11,color:RED,fontWeight:700,flexShrink:0,minWidth:20}}>{i+1}.</span>{s}
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div style={{background:"#fff",border:"1px solid rgba(19,41,60,.08)",borderRadius:16,overflow:"hidden",marginTop:28}}>
              <div style={{padding:"16px 20px 12px",borderBottom:"1px solid rgba(19,41,60,.07)"}}>
                <div style={{fontFamily:SANS,fontWeight:700,fontSize:16,color:INK,marginBottom:4}}>Visit the office</div>
                <div style={{fontSize:13,color:"rgba(19,41,60,.60)"}}>TechnoExcel · Trimulgherry, Hyderabad</div>
              </div>
              <iframe src={SITE.embedUrl} width="100%" height="260" style={{border:0,display:"block"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="TechnoExcel office location" />
              <div style={{padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
                <div style={{fontSize:12,color:"rgba(19,41,60,.58)",lineHeight:1.65,maxWidth:380}}>{SITE.addressFull}</div>
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",background:"#4a67d6",color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:13,padding:"10px 18px",borderRadius:10,textDecoration:"none",flexShrink:0}}>Open in Maps</a>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div style={{background:"#fff",borderRadius:16,padding:36,border:"1px solid rgba(19,41,60,.08)"}}>
            <h3 style={{fontFamily:SANS,fontWeight:700,fontSize:20,color:INK,marginBottom:6}}>Send us a message</h3>
            <p style={{fontSize:14,color:"rgba(19,41,60,.60)",marginBottom:24,lineHeight:1.7}}>We will get back to you.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
