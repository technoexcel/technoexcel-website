"use client";
import React, { useState, useRef, useEffect } from "react";

interface Msg { role:"user"|"assistant"; content:string }
const QUICK = ["What courses do you offer?","Power BI training details","Corporate training packages","Book a strategy call"];

export default function ChatBot() {
  const [open,    setOpen]    = useState(false);
  const [msgs,    setMsgs]    = useState<Msg[]>([{ role:"assistant", content:"Hi! I'm TechnoExcel's assistant. Ask me about courses, corporate training or book a strategy call." }]);
  const [input,   setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior:"smooth" }); }, [msgs, loading]);

  const send = async (text?: string) => {
    const q = (text || input).trim();
    if (!q) return;
    setInput("");
    const updated: Msg[] = [...msgs, { role:"user", content:q }];
    setMsgs(updated);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ messages:updated }) });
      const data = await res.json();
      setMsgs([...updated, { role:"assistant", content: data.reply || "WhatsApp us at +91 88019 12200 for help." }]);
    } catch {
      setMsgs([...updated, { role:"assistant", content:"Sorry, something went wrong. WhatsApp us at +91 88019 12200." }]);
    }
    setLoading(false);
  };

  return (
    <>
      <button onClick={()=>setOpen(o=>!o)} aria-label="Chat with us"
        style={{ position:"fixed",bottom:86,right:24,zIndex:998,width:50,height:50,borderRadius:"50%",background:"#0d1f2d",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}>
        {open
          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>}
      </button>

      {open && (
        <div style={{ position:"fixed",bottom:148,right:20,zIndex:997,width:320,height:460,background:"#fff",borderRadius:18,boxShadow:"0 20px 60px rgba(0,0,0,.2)",display:"flex",flexDirection:"column",overflow:"hidden",border:"1px solid rgba(19,41,60,.08)" }}>
          <div style={{ background:"#0d1f2d",padding:"14px 16px",flexShrink:0,display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:32,height:32,borderRadius:"50%",background:"#EE2354",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>🤖</div>
            <div>
              <div style={{ fontSize:13,fontWeight:700,color:"#fff" }}>TechnoExcel</div>
              <div style={{ fontSize:10,color:"rgba(255,255,255,.45)" }}>Replies in minutes</div>
            </div>
          </div>
          <div style={{ flex:1,overflowY:"auto",padding:"12px 12px 6px",display:"flex",flexDirection:"column",gap:8 }}>
            {msgs.map((m,i) => (
              <div key={i} style={{ display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
                <div style={{ maxWidth:"82%",padding:"8px 12px",fontSize:12,lineHeight:1.55,borderRadius:m.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:m.role==="user"?"#EE2354":"rgba(238,35,84,.07)",color:m.role==="user"?"#fff":"#13293C" }}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display:"flex",gap:4,padding:"8px 12px",background:"rgba(238,35,84,.07)",borderRadius:"16px 16px 16px 4px",width:"fit-content" }}>
                {[0,1,2].map(i=><div key={i} style={{ width:6,height:6,borderRadius:"50%",background:"#EE2354",animation:`wabounce .8s ${i*.2}s ease-in-out infinite` }}/>)}
              </div>
            )}
            <div ref={endRef}/>
          </div>
          {msgs.length <= 2 && (
            <div style={{ padding:"0 10px 8px",display:"flex",flexWrap:"wrap",gap:5 }}>
              {QUICK.map(q=><button key={q} onClick={()=>send(q)} style={{ fontSize:10,padding:"4px 9px",borderRadius:20,border:"1px solid rgba(238,35,84,.25)",background:"rgba(238,35,84,.05)",color:"#EE2354",cursor:"pointer",fontWeight:500 }}>{q}</button>)}
            </div>
          )}
          <div style={{ padding:"8px 10px",borderTop:"1px solid rgba(19,41,60,.07)",display:"flex",gap:6 }}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
              placeholder="Ask anything..." style={{ flex:1,padding:"8px 12px",borderRadius:20,border:"1.5px solid rgba(19,41,60,.1)",fontSize:12,outline:"none",fontFamily:"inherit" }}/>
            <button onClick={()=>send()} style={{ width:34,height:34,borderRadius:"50%",background:"#EE2354",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
