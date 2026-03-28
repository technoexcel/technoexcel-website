"use client";
import React, { useState, useEffect, useRef } from "react";

const PHOTOS = [
  { src:"/images/training/training-1.jpeg", caption:"Solenis · Singapore",    sub:"Data Analytics Training" },
  { src:"/images/training/training-2.jpeg", caption:"Solenis · Indonesia",    sub:"Corporate Training" },
  { src:"/images/training/training-3.jpg",  caption:"Diversey · Philippines", sub:"Excel Mastery Program" },
  { src:"/images/training/training-4.jpg",  caption:"Corporate · Bangkok",    sub:"Data Analytics Training" },
  { src:"/images/training/training-5.jpeg", caption:"Corporate · Thailand",   sub:"Power BI Workshop" },
  { src:"/images/training/training-6.jpeg", caption:"Diversey · Thailand",    sub:"Corporate Training" },
];

const DEF = ["rotate(-8deg) translateX(-18px) translateY(7px)","rotate(-3deg) translateX(-7px) translateY(3px)","rotate(0deg)","rotate(4deg) translateX(9px) translateY(4px)","rotate(8deg) translateX(20px) translateY(8px)","rotate(12deg) translateX(32px) translateY(13px)"];
const HOV = ["rotate(-14deg) translateX(-100px) translateY(8px)","rotate(-6deg) translateX(-48px) translateY(3px)","rotate(0deg)","rotate(6deg) translateX(48px) translateY(3px)","rotate(14deg) translateX(100px) translateY(8px)","rotate(20deg) translateX(148px) translateY(16px)"];

const S = "'Plus Jakarta Sans',system-ui,sans-serif";
const M = "'Space Mono',monospace";

export default function PhotoFan() {
  const [active,   setActive]   = useState(2);
  const [hovered,  setHovered]  = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (hovered) { clearInterval(timer.current); return; }
    timer.current = setInterval(() => setActive(i=>(i+1)%PHOTOS.length), 3000);
    return () => clearInterval(timer.current);
  }, [hovered]);

  const T = hovered ? HOV : DEF;

  return (
    <div style={{ width:"100%",userSelect:"none" }}>
      <div style={{ position:"relative",height:290,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16 }}
        onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        {PHOTOS.map((p,i)=>(
          <div key={i} onClick={()=>setActive(i)} style={{
            position:"absolute",width:180,height:240,borderRadius:16,overflow:"hidden",cursor:"pointer",
            transform:i===active&&hovered?`${HOV[i]} translateY(-8px)`:T[i],
            zIndex:i===active?10:(i<active?i+1:6-i),
            transition:"transform .45s cubic-bezier(.16,1,.3,1),box-shadow .3s ease",
            boxShadow:i===active?"0 20px 50px rgba(238,35,84,.25)":"0 4px 16px rgba(0,0,0,.25)",
          }}>
            <img src={p.src} alt={p.caption} style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:i===active?"grayscale(0) brightness(1)":"grayscale(.75) brightness(.85)",transition:"filter .4s ease" }} />
            <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"10px 12px",background:"linear-gradient(to top,rgba(19,41,60,.9),transparent)",opacity:i===active?1:0,transition:"opacity .35s ease" }}>
              <div style={{ fontFamily:S,fontWeight:700,fontSize:11,color:"#fff" }}>{p.caption}</div>
              <div style={{ fontFamily:M,fontSize:9,color:"rgba(255,255,255,.5)",marginTop:2 }}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex",justifyContent:"center",gap:6,marginBottom:10 }}>
        {PHOTOS.map((_,i)=><div key={i} onClick={()=>setActive(i)} style={{ height:6,width:i===active?20:6,borderRadius:3,cursor:"pointer",background:i===active?"#EE2354":"rgba(19,41,60,.15)",transition:"all .3s ease" }}/>)}
      </div>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontFamily:S,fontWeight:700,fontSize:13,color:"#13293C" }}>{PHOTOS[active].caption}</div>
        <div style={{ fontFamily:M,fontSize:9,color:"rgba(19,41,60,.4)",marginTop:3 }}>{PHOTOS[active].sub}</div>
      </div>
    </div>
  );
}
