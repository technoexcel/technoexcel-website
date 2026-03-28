"use client";
import React, { useState } from "react";
import { WA, SITE } from "@/lib/constants";

const SERVICES = ["Data Solutions / Automation","Corporate Training","Individual Course","Power BI Dashboard","Process Automation","General Enquiry"];
const S = "'Plus Jakarta Sans',system-ui,sans-serif";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",company:"",interest:"",message:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [state, setState] = useState<"idle"|"loading"|"done"|"error">("idle");

  const set = (k:string,v:string) => { setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:""})); };

  const validate = () => {
    const e:Record<string,string> = {};
    if (!form.name.trim()) e.name="Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Valid email required";
    if (!form.interest) e.interest="Please select a topic";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async () => {
    if (!validate()) return;
    setState("loading");
    try {
      const res = await fetch("/api/contact",{ method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,source:"Contact Page"}) });
      setState(res.ok?"done":"error");
    } catch { setState("error"); }
  };

  const inp = (k:string): React.CSSProperties => ({ width:"100%",padding:"11px 14px",border:`1.5px solid ${errors[k]?"#EE2354":"rgba(19,41,60,.12)"}`,borderRadius:10,fontSize:14,fontFamily:S,color:"#13293C",background:"#fff",outline:"none" });

  if (state==="done") return (
    <div style={{ textAlign:"center",padding:"32px 0" }}>
      <div style={{ fontSize:42,marginBottom:16 }}>✅</div>
      <h3 style={{ fontFamily:S,fontWeight:700,fontSize:20,color:"#13293C",marginBottom:10 }}>Message sent!</h3>
      <p style={{ fontSize:14,color:"rgba(19,41,60,.55)",lineHeight:1.7,marginBottom:20 }}>We reply within 2 hours. WhatsApp for faster response.</p>
      <a href={WA.strategy} target="_blank" rel="noopener noreferrer"
        style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"#fff",fontFamily:S,fontWeight:700,fontSize:14,padding:"12px 24px",borderRadius:10 }}>
        WhatsApp {SITE.phoneDisplay}
      </a>
    </div>
  );

  return (
    <>
      <h3 style={{ fontFamily:S,fontWeight:700,fontSize:18,color:"#13293C",marginBottom:22 }}>Book a Strategy Call</h3>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12 }}>
        <div><input type="text" placeholder="Your name" value={form.name} onChange={e=>set("name",e.target.value)} style={inp("name")}/>{errors.name&&<div style={{ fontSize:11,color:"#EE2354",marginTop:3 }}>{errors.name}</div>}</div>
        <input type="tel" placeholder="WhatsApp / Phone" value={form.phone} onChange={e=>set("phone",e.target.value)} style={inp("phone")}/>
      </div>
      <div style={{ marginBottom:12 }}><input type="email" placeholder="Work email" value={form.email} onChange={e=>set("email",e.target.value)} style={inp("email")}/>{errors.email&&<div style={{ fontSize:11,color:"#EE2354",marginTop:3 }}>{errors.email}</div>}</div>
      <div style={{ marginBottom:12 }}><input type="text" placeholder="Company (optional)" value={form.company} onChange={e=>set("company",e.target.value)} style={inp("company")}/></div>
      <div style={{ marginBottom:12 }}>
        <select value={form.interest} onChange={e=>set("interest",e.target.value)} style={{ ...inp("interest"),color:form.interest?"#13293C":"rgba(19,41,60,.4)" }}>
          <option value="">I'm interested in...</option>
          {SERVICES.map(s=><option key={s} value={s}>{s}</option>)}
        </select>
        {errors.interest&&<div style={{ fontSize:11,color:"#EE2354",marginTop:3 }}>{errors.interest}</div>}
      </div>
      <div style={{ marginBottom:20 }}><textarea placeholder="Tell us about your data challenge (optional)" value={form.message} onChange={e=>set("message",e.target.value)} style={{ ...inp("message"),height:90,resize:"vertical" }}/></div>
      <button onClick={submit} disabled={state==="loading"} style={{ width:"100%",background:state==="loading"?"rgba(238,35,84,.6)":"#EE2354",color:"#fff",fontFamily:S,fontWeight:700,fontSize:15,padding:14,borderRadius:12,border:"none",cursor:state==="loading"?"not-allowed":"pointer" }}>
        {state==="loading"?"Sending...":"Submit Enquiry →"}
      </button>
      {state==="error"&&<div style={{ fontSize:13,color:"#EE2354",marginTop:12,textAlign:"center" }}>Failed. Please WhatsApp {SITE.phoneDisplay}.</div>}
    </>
  );
}
