"use client";
import React, { useState } from "react";
import { WA, SITE } from "@/lib/constants";

const S = "'Plus Jakarta Sans',system-ui,sans-serif";
const M = "'Space Mono',monospace";

interface Props { courseTitle:string; courseSlug:string }

export default function CourseEnrolForm({ courseTitle, courseSlug }: Props) {
  const [form, setForm] = useState({ name:"",email:"",phone:"",company:"",goal:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [state, setState] = useState<"idle"|"loading"|"done"|"error">("idle");

  const set = (k:string,v:string) => { setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:""})); };

  const validate = () => {
    const e:Record<string,string> = {};
    if (!form.name.trim()) e.name="Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Valid email required";
    if (!form.phone.trim()) e.phone="Phone required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async () => {
    if (!validate()) return;
    setState("loading");
    try {
      const res = await fetch("/api/contact",{ method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,courseTitle,source:`Course — ${courseTitle}`}) });
      setState(res.ok?"done":"error");
    } catch { setState("error"); }
  };

  const inp = (k:string): React.CSSProperties => ({ width:"100%",padding:"10px 12px",border:`1.5px solid ${errors[k]?"#EE2354":"rgba(19,41,60,.12)"}`,borderRadius:8,fontSize:13,fontFamily:S,color:"#13293C",background:"#fff",outline:"none" });

  if (state==="done") return (
    <div style={{ background:"#0d1f2d",borderRadius:16,padding:32,textAlign:"center" }}>
      <div style={{ fontSize:36,marginBottom:12 }}>✅</div>
      <div style={{ fontFamily:S,fontWeight:700,fontSize:18,color:"#fff",marginBottom:8 }}>Enquiry received!</div>
      <div style={{ fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.7,marginBottom:20 }}>We will call you within 2 hours to discuss the next batch.</div>
      <a href={WA.general} target="_blank" rel="noopener noreferrer"
        style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",fontFamily:S,fontWeight:700,fontSize:13,padding:"11px 22px",borderRadius:10 }}>
        WhatsApp for faster response
      </a>
    </div>
  );

  return (
    <div style={{ background:"#0d1f2d",borderRadius:16,padding:28 }}>
      <div style={{ fontFamily:M,fontSize:8,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.4)",marginBottom:6 }}>Enrol Now</div>
      <div style={{ fontFamily:S,fontWeight:700,fontSize:16,color:"#fff",marginBottom:4,lineHeight:1.3 }}>{courseTitle}</div>
      <div style={{ fontSize:11,color:"rgba(255,255,255,.4)",marginBottom:20 }}>Fill the form — we call within 2 hours.</div>
      <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
        <div><input type="text" placeholder="Full name *" value={form.name} onChange={e=>set("name",e.target.value)} style={inp("name")} />{errors.name&&<div style={{ fontSize:11,color:"#ff6b6b",marginTop:3 }}>{errors.name}</div>}</div>
        <div><input type="email" placeholder="Work / personal email *" value={form.email} onChange={e=>set("email",e.target.value)} style={inp("email")} />{errors.email&&<div style={{ fontSize:11,color:"#ff6b6b",marginTop:3 }}>{errors.email}</div>}</div>
        <div><input type="tel" placeholder="WhatsApp number *" value={form.phone} onChange={e=>set("phone",e.target.value)} style={inp("phone")} />{errors.phone&&<div style={{ fontSize:11,color:"#ff6b6b",marginTop:3 }}>{errors.phone}</div>}</div>
        <input type="text" placeholder="Company (optional)" value={form.company} onChange={e=>set("company",e.target.value)} style={inp("company")} />
        <textarea placeholder="What do you want to achieve? (optional)" value={form.goal} onChange={e=>set("goal",e.target.value)} style={{ ...inp("goal"),height:72,resize:"vertical" }} />
        <button onClick={submit} disabled={state==="loading"} style={{ width:"100%",background:state==="loading"?"rgba(238,35,84,.6)":"#EE2354",color:"#fff",fontFamily:S,fontWeight:700,fontSize:14,padding:13,borderRadius:10,border:"none",cursor:state==="loading"?"not-allowed":"pointer" }}>
          {state==="loading"?"Sending...":"Join Next Batch →"}
        </button>
        {state==="error"&&<div style={{ fontSize:12,color:"#ff6b6b",textAlign:"center" }}>Failed. WhatsApp us at {SITE.phoneDisplay}</div>}
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,.08)",marginTop:18,paddingTop:14 }}>
        {[["Duration","Live · Instructor-led"],["Certificate","Yes — on completion"],["Support","30-day post-training"]].map(([l,v])=>(
          <div key={l} style={{ display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:8 }}>
            <span style={{ color:"rgba(255,255,255,.35)",fontFamily:M,fontSize:9 }}>{l}</span>
            <span style={{ color:"rgba(255,255,255,.65)",fontWeight:600 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
