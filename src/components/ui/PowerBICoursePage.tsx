"use client";
import React, { useState } from "react";
import { WA } from "@/lib/constants";

// ── brand tokens ──────────────────────────────────────────────────
const INK  = "#13293C";
const RED  = "#EE2354";
const CREAM= "#F4F2EE";
const PBI  = "#F2C811";          // Power BI yellow
const DARK = "#0d1f2d";          // deep navy bg
const PANEL= "#111c28";          // left-sidebar bg
const EDGE = "#1B2A3B";          // card bg inside dark sections
const SANS = "'Plus Jakarta Sans',system-ui,sans-serif";
const MONO = "'Space Mono',monospace";

// ── difficulty colours ────────────────────────────────────────────
const DIFF: Record<string,{bg:string;color:string}> = {
  Beginner:     { bg:"rgba(76,175,80,.18)",  color:"#4CAF50" },
  Intermediate: { bg:"rgba(242,200,17,.18)", color:PBI },
  Advanced:     { bg:"rgba(239,83,80,.18)",  color:"#EF5350" },
};

// ── DAX challenges data ───────────────────────────────────────────
const CHALLENGES = [
  {
    id:1, level:"Beginner",
    title:"Total Revenue",
    scenario:"Your manager wants a single card on the dashboard showing overall revenue. Write a DAX measure that sums every row in Sales[Revenue].",
    hint:"Use the SUM function — it takes a single column reference: SUM ( Table[Column] ).",
    formula:"Total Revenue =\nSUM ( Sales[Revenue] )",
    output:[
      "✓  Measure created successfully",
      "   Total Revenue = ₹31,40,000",
      "   Context: All regions · All dates",
    ],
    concepts:["SUM","Measures vs Columns","Filter Context"],
  },
  {
    id:2, level:"Beginner",
    title:"Sales Target %",
    scenario:"Finance wants to see what percentage of the annual target has been achieved. Divide Total Revenue by the target figure safely — handle zero-target scenarios.",
    hint:"DIVIDE ( numerator, denominator, alternate_result ) handles division by zero without an error.",
    formula:"Target % =\nDIVIDE (\n  [Total Revenue],\n  [Annual Target],\n  0\n)",
    output:[
      "✓  Measure created successfully",
      "   Target % = 94.2%",
      "   Annual Target = ₹33,33,000",
    ],
    concepts:["DIVIDE","Referencing Measures","Safe Calculations"],
  },
  {
    id:3, level:"Intermediate",
    title:"Revenue — Last Year",
    scenario:"The CFO needs a YoY comparison. Write a measure that returns total revenue for the same period one year ago using CALCULATE and a time-intelligence function.",
    hint:"SAMEPERIODLASTYEAR shifts the current date filter back exactly 12 months. Wrap it inside CALCULATE to apply it.",
    formula:"Revenue LY =\nCALCULATE (\n  [Total Revenue],\n  SAMEPERIODLASTYEAR ( Dates[Date] )\n)",
    output:[
      "✓  Measure created successfully",
      "   Revenue LY = ₹26,60,000",
      "   Period shift: 2023 → 2024",
    ],
    concepts:["CALCULATE","SAMEPERIODLASTYEAR","Date Table"],
  },
  {
    id:4, level:"Advanced",
    title:"Top 5 Products Revenue",
    scenario:"Marketing wants a bar chart that always shows only the top-5 revenue-generating products, regardless of which region slicer is active.",
    hint:"TOPN returns N rows from a table. Wrap in CALCULATE to make it a filter. Use ALL to remove existing product filters before ranking.",
    formula:"Top 5 Revenue =\nCALCULATE (\n  [Total Revenue],\n  TOPN (\n    5,\n    ALL ( Products[Name] ),\n    [Total Revenue]\n  )\n)",
    output:[
      "✓  Measure created successfully",
      "   Top 5 Revenue = ₹18,90,000",
      "   Products ranked: Hyderabad · Mumbai · Bangalore · Delhi · Chennai",
    ],
    concepts:["TOPN","ALL","Context Transition"],
  },
  {
    id:5, level:"Advanced",
    title:"Running Total (Cumulative)",
    scenario:"The operations team wants a line chart that accumulates revenue from Jan 1 to each selected date — a classic running total. Write it so it resets correctly at year boundaries.",
    hint:"Use FILTER + ALL on the date column. FILTER keeps all dates up to MAX ( Dates[Date] ). ALL removes the current row filter so every prior row is included.",
    formula:"Running Total =\nCALCULATE (\n  [Total Revenue],\n  FILTER (\n    ALL ( Dates[Date] ),\n    Dates[Date] <= MAX ( Dates[Date] )\n  )\n)",
    output:[
      "✓  Measure created successfully",
      "   Running Total (Jun): ₹4,29,000",
      "   Pattern: monotonically increasing across time axis",
    ],
    concepts:["FILTER","ALL","Cumulative Patterns","Context Manipulation"],
  },
];

// ── key concepts (left sidebar bottom) ───────────────────────────
const KEY_CONCEPTS = [
  "Measures vs Calculated Columns",
  "Filter Context & Row Context",
  "CALCULATE — the core of DAX",
  "Time Intelligence functions",
  "TOPN & Ranking patterns",
  "ALL / ALLEXCEPT / REMOVEFILTERS",
  "Variables and RETURN",
];

// ── curriculum modules ────────────────────────────────────────────
const MODULES = [
  {
    n:"01", title:"Data Connection & Power Query", dur:"3 sessions",
    topics:[
      "Connect to SQL Server, SharePoint and Excel",
      "Clean and reshape data — no code required",
      "Build a star schema from a flat file",
      "Append and merge queries from multiple sources",
      "Query folding and performance basics",
    ],
  },
  {
    n:"02", title:"Data Modeling — The Foundation", dur:"4 sessions",
    topics:[
      "Star schema design from your real dataset",
      "Relationships — one-to-many, many-to-many",
      "Build and mark a date table",
      "Calculated columns vs measures",
      "Filter context before writing any DAX",
    ],
  },
  {
    n:"03", title:"DAX — From Zero to Production", dur:"5 sessions",
    topics:[
      "SUM, AVERAGE, COUNT, DISTINCTCOUNT",
      "CALCULATE — change filter context for any slice",
      "Time intelligence: YoY, MTD, QTD, rolling 12M",
      "RANKX for live leaderboards",
      "Variables and RETURN for readable DAX",
      "Running totals with FILTER + ALL",
    ],
  },
  {
    n:"04", title:"Visuals, Design & Deployment", dur:"4 sessions",
    topics:[
      "Dashboard design management actually opens",
      "Row-Level Security by role and region",
      "Deploy to Power BI Service — scheduled refresh",
      "Workspace permissions and sharing",
      "Mobile layout for phone and tablet",
    ],
  },
];

// ── component ─────────────────────────────────────────────────────
export default function PowerBICoursePage() {
  const [active,   setActive]   = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [hinted,   setHinted]   = useState(false);
  const [openMod,  setOpenMod]  = useState<number|null>(0);
  const [openConcepts, setOpenConcepts] = useState(true);
  const ch = CHALLENGES[active];

  function selectChallenge(i:number){
    setActive(i); setRevealed(false); setHinted(false);
  }

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        .pbi2-wrap{font-family:${SANS}}
        /* ── header ── */
        .pbi2-header{background:${DARK};padding:72px 52px 48px;position:relative;overflow:hidden}
        .pbi2-header::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:72px 72px;pointer-events:none}
        .pbi2-header::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(242,200,17,.07),transparent 65%);top:-120px;right:-60px;pointer-events:none}
        .pbi2-covers{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
        .pbi2-tag{font-family:${MONO};font-size:11px;padding:5px 12px;border-radius:6px;border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.68);background:transparent}
        /* ── main split ── */
        .pbi2-split{display:grid;grid-template-columns:272px 1fr;min-height:600px}
        /* ── left sidebar ── */
        .pbi2-sidebar{background:${PANEL};border-right:1px solid rgba(255,255,255,.07);padding:0;display:flex;flex-direction:column}
        .pbi2-ch-list{padding:20px 16px 8px;flex:1}
        .pbi2-ch-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;margin-bottom:4px;transition:background .15s}
        .pbi2-ch-item:hover{background:rgba(255,255,255,.06)}
        .pbi2-ch-item.sel{background:rgba(242,200,17,.12);border-left:3px solid ${PBI}}
        .pbi2-ch-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-family:${MONO};font-size:10px;font-weight:700;flex-shrink:0;background:rgba(255,255,255,.07);color:rgba(255,255,255,.45)}
        .pbi2-ch-item.sel .pbi2-ch-num{background:rgba(242,200,17,.2);color:${PBI}}
        .pbi2-concepts{border-top:1px solid rgba(255,255,255,.07);padding:16px}
        .pbi2-concept-item{font-size:11px;color:rgba(255,255,255,.50);padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.4}
        .pbi2-concept-item::before{content:'•';color:${PBI};margin-right:8px}
        /* ── right panel ── */
        .pbi2-main{background:#fff;padding:32px 36px;display:flex;flex-direction:column;gap:20px}
        .pbi2-badge-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .pbi2-diff-badge{font-family:${MONO};font-size:10px;padding:3px 10px;border-radius:5px;font-weight:700}
        .pbi2-desc{font-size:14px;color:rgba(19,41,60,.72);line-height:1.8;background:${CREAM};border-radius:10px;padding:16px 18px;border:1px solid rgba(19,41,60,.08)}
        .pbi2-btns{display:flex;gap:10px;flex-wrap:wrap}
        .pbi2-hint-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;border:1.5px solid rgba(19,41,60,.18);background:#fff;color:rgba(19,41,60,.65);font-family:${SANS};font-size:13px;font-weight:600;cursor:pointer;transition:all .15s}
        .pbi2-hint-btn:hover{border-color:${PBI};color:${INK}}
        .pbi2-reveal-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;border:1.5px solid rgba(19,41,60,.12);background:rgba(19,41,60,.05);color:rgba(19,41,60,.55);font-family:${SANS};font-size:13px;font-weight:600;cursor:pointer;transition:all .15s}
        .pbi2-reveal-btn:hover{border-color:rgba(19,41,60,.30);color:${INK}}
        /* ── formula editor ── */
        .pbi2-editor{background:${DARK};border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
        .pbi2-editor-bar{background:#0a1720;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06)}
        .pbi2-editor-code{padding:18px 20px;font-family:${MONO};font-size:13px;line-height:1.9;min-height:120px;color:rgba(255,255,255,.55);white-space:pre}
        .pbi2-run-btn{display:flex;align-items:center;gap:7px;background:${PBI};color:#111;font-family:${SANS};font-weight:700;font-size:13px;padding:11px 22px;border:none;cursor:pointer;border-radius:0 0 12px 12px;width:100%;justify-content:center;transition:opacity .15s}
        .pbi2-run-btn:hover{opacity:.88}
        /* ── output ── */
        .pbi2-output{background:#071420;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
        .pbi2-output-bar{background:#0a1720;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06)}
        .pbi2-output-body{padding:14px 18px}
        /* ── course info section ── */
        .pbi2-info{background:${CREAM};padding:64px 52px}
        .pbi2-info-grid{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 320px;gap:52px;align-items:flex-start}
        .pbi2-mod-wrap{border:1.5px solid rgba(19,41,60,.09);border-radius:12px;overflow:hidden;margin-bottom:10px;background:#fff;transition:border-color .2s}
        .pbi2-mod-wrap.open{border-color:rgba(238,35,84,.25)}
        .pbi2-mod-hdr{padding:16px 22px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:background .15s}
        .pbi2-mod-hdr:hover{background:rgba(238,35,84,.03)}
        /* ── sidebar card ── */
        .pbi2-enroll{background:#fff;border:1px solid rgba(19,41,60,.10);border-radius:16px;padding:28px;margin-bottom:16px;position:sticky;top:88px}
        /* ── responsive ── */
        @media(max-width:1100px){.pbi2-info-grid{grid-template-columns:1fr!important} .pbi2-enroll{position:static}}
        @media(max-width:900px){.pbi2-split{grid-template-columns:1fr!important} .pbi2-sidebar{border-right:none;border-bottom:1px solid rgba(255,255,255,.07)}}
        @media(max-width:768px){.pbi2-header{padding:72px 20px 40px!important} .pbi2-info{padding:48px 20px!important} .pbi2-main{padding:22px 18px!important}}
      `}} />

      <div className="pbi2-wrap">

        {/* ══════════ HEADER ══════════ */}
        <div className="pbi2-header">
          <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1}}>
            <a href="/courses" style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:MONO,fontSize:11,color:"rgba(255,255,255,.45)",textDecoration:"none",marginBottom:28}}>
              ← Back to Courses
            </a>
            <div style={{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{fontFamily:MONO,fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:5,background:"rgba(242,200,17,.15)",color:PBI,letterSpacing:"1px"}}>INTERMEDIATE</span>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.35)"}}>Power BI Data Analyst Path</span>
              <span style={{color:"rgba(255,255,255,.20)"}}>|</span>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.35)"}}>5 formula challenges</span>
            </div>
            <h1 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4.5vw,58px)",lineHeight:.95,letterSpacing:"-0.04em",color:"#fff",marginBottom:14}}>
              Power BI Mastery
            </h1>
            <p style={{fontFamily:SANS,fontWeight:300,fontSize:16,color:"rgba(255,255,255,.68)",maxWidth:560,lineHeight:1.8,margin:0}}>
              DAX, data modeling, row-level security and Power BI Service deployment — taught by a trainer who has built 50+ live dashboards in production.
            </p>
            <div className="pbi2-covers">
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.45)",letterSpacing:"1px",alignSelf:"center"}}>COVERS:</span>
              {["DAX Measures","Power Query","Star Schema","CALCULATE","Time Intelligence","Row-Level Security","Deployment"].map(t=>(
                <span key={t} className="pbi2-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ CHALLENGE SPLIT ══════════ */}
        <div className="pbi2-split">

          {/* ── LEFT SIDEBAR ── */}
          <div className="pbi2-sidebar">
            <div className="pbi2-ch-list">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <span style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.35)"}}>DAX Challenges</span>
                <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.30)"}}>{active}/{CHALLENGES.length} done</span>
              </div>
              {CHALLENGES.map((c,i)=>(
                <div key={i} className={`pbi2-ch-item${active===i?" sel":""}`} onClick={()=>selectChallenge(i)}>
                  <div className="pbi2-ch-num">{c.id}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:SANS,fontWeight:600,fontSize:12,color:"rgba(255,255,255,.80)",lineHeight:1.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{c.title}</div>
                    <span style={{fontFamily:MONO,fontSize:9,padding:"1px 6px",borderRadius:4,marginTop:4,display:"inline-block",...DIFF[c.level]}}>{c.level}</span>
                  </div>
                  {active===i&&<span style={{color:PBI,fontSize:14}}>›</span>}
                </div>
              ))}
            </div>

            {/* Key Concepts */}
            <div className="pbi2-concepts">
              <div
                style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",marginBottom:openConcepts?10:0}}
                onClick={()=>setOpenConcepts(p=>!p)}
              >
                <span style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.35)"}}>Key Concepts</span>
                <span style={{color:"rgba(255,255,255,.30)",fontSize:13,transform:openConcepts?"rotate(90deg)":"none",transition:"transform .2s"}}>›</span>
              </div>
              {openConcepts&&KEY_CONCEPTS.map((k,i)=>(
                <div key={i} className="pbi2-concept-item">{k}</div>
              ))}
            </div>
          </div>

          {/* ── RIGHT MAIN PANEL ── */}
          <div className="pbi2-main">
            {/* challenge header */}
            <div>
              <div className="pbi2-badge-row" style={{marginBottom:10}}>
                <span style={{fontFamily:MONO,fontSize:11,color:"rgba(19,41,60,.45)"}}>Challenge {ch.id} of {CHALLENGES.length}</span>
                <span className="pbi2-diff-badge" style={DIFF[ch.level]}>{ch.level}</span>
              </div>
              <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:24,color:INK,letterSpacing:"-0.03em",margin:0}}>{ch.title}</h2>
            </div>

            {/* scenario */}
            <div className="pbi2-desc">{ch.scenario}</div>

            {/* action buttons */}
            <div className="pbi2-btns">
              <button className="pbi2-hint-btn" onClick={()=>setHinted(p=>!p)}>
                💡 {hinted?"Hide hint":"Show hint"}
              </button>
              <button className="pbi2-reveal-btn" onClick={()=>setRevealed(p=>!p)}>
                🔓 {revealed?"Hide formula":"Reveal formula"}
              </button>
            </div>

            {/* hint box */}
            {hinted&&(
              <div style={{background:"rgba(242,200,17,.06)",border:"1px solid rgba(242,200,17,.25)",borderRadius:10,padding:"12px 16px",fontFamily:SANS,fontSize:13,color:"rgba(19,41,60,.72)",lineHeight:1.8}}>
                <span style={{fontWeight:700,color:INK}}>Hint: </span>{ch.hint}
              </div>
            )}

            {/* DAX editor */}
            <div className="pbi2-editor">
              <div className="pbi2-editor-bar">
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={PBI}><rect x="2" y="10" width="4" height="10" rx="1"/><rect x="9" y="6" width="4" height="14" rx="1"/><rect x="16" y="2" width="4" height="18" rx="1"/></svg>
                  <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.60)"}}>DAX EDITOR · Power BI Desktop</span>
                </div>
                <span style={{fontFamily:MONO,fontSize:9,color:"rgba(255,255,255,.25)"}}>Ctrl + Enter to validate</span>
              </div>
              <div className="pbi2-editor-code">
                {revealed ? (
                  ch.formula.split("\n").map((line,i)=>{
                    const kws = /^(CALCULATE|DIVIDE|SUM|FILTER|TOPN|ALL|SAMEPERIODLASTYEAR|TOTALYTD|RANKX|MAX|VAR|RETURN|AVERAGE|COUNT|DISTINCTCOUNT)/;
                    const isKw = kws.test(line.trim());
                    const isMeasure = line.includes("=") && !line.trim().startsWith("//");
                    return (
                      <span key={i} style={{display:"block",color:isKw?PBI:isMeasure?"rgba(255,255,255,.90)":"rgba(255,255,255,.55)"}}>
                        {line}
                      </span>
                    );
                  })
                ) : (
                  <>
                    <span style={{display:"block",color:"rgba(255,255,255,.28)"}}>{"// Write your DAX measure here"}</span>
                    <span style={{display:"block",color:"rgba(255,255,255,.28)"}}>{"// Use the hint above if you need guidance"}</span>
                    <span style={{display:"block",marginTop:10,color:"rgba(255,255,255,.45)"}}>{ch.title.replace(/ /g,"_")} = </span>
                  </>
                )}
              </div>
              <button className="pbi2-run-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Validate Formula
              </button>
            </div>

            {/* output */}
            {revealed&&(
              <div className="pbi2-output">
                <div className="pbi2-output-bar">
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.50)"}}>☰ Output</span>
                  </div>
                  <span style={{fontFamily:MONO,fontSize:9,color:"rgba(255,255,255,.25)"}}>{ch.output.length} lines</span>
                </div>
                <div className="pbi2-output-body">
                  {ch.output.map((line,i)=>(
                    <div key={i} style={{fontFamily:MONO,fontSize:12,color:line.startsWith("✓")?"#4CAF50":"rgba(255,255,255,.65)",lineHeight:1.9}}>{line}</div>
                  ))}
                </div>
              </div>
            )}

            {/* concepts used in this challenge */}
            <div style={{paddingTop:4}}>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.40)",letterSpacing:"1px",textTransform:"uppercase"}}>Concepts used: </span>
              {ch.concepts.map(c=>(
                <span key={c} style={{fontFamily:MONO,fontSize:10,padding:"2px 8px",background:"rgba(19,41,60,.06)",border:"1px solid rgba(19,41,60,.12)",borderRadius:4,color:INK,marginLeft:6,display:"inline-block",marginBottom:4}}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ COURSE INFO ══════════ */}
        <div className="pbi2-info">
          <div className="pbi2-info-grid">

            {/* ── LEFT: curriculum + activities ── */}
            <div>

              {/* curriculum */}
              <div style={{marginBottom:52}}>
                <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:10}}>Full Curriculum</div>
                <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(20px,2.5vw,34px)",letterSpacing:"-0.04em",color:INK,marginBottom:24,lineHeight:1.1}}>
                  4 modules · ~16 sessions.<br/><span style={{color:RED}}>Every session builds something real.</span>
                </h2>
                {MODULES.map((m,i)=>(
                  <div key={i} className={`pbi2-mod-wrap${openMod===i?" open":""}`}>
                    <div className="pbi2-mod-hdr" onClick={()=>setOpenMod(openMod===i?null:i)}>
                      <div style={{display:"flex",alignItems:"center",gap:14,flex:1,minWidth:0}}>
                        <span style={{fontFamily:MONO,fontSize:12,color:RED,fontWeight:700,flexShrink:0}}>{m.n}</span>
                        <div style={{minWidth:0}}>
                          <div style={{fontFamily:SANS,fontWeight:700,fontSize:14,color:INK}}>{m.title}</div>
                          <div style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.40)",marginTop:2}}>{m.dur} · {m.topics.length} topics</div>
                        </div>
                      </div>
                      <span style={{flexShrink:0,fontSize:16,color:"rgba(19,41,60,.35)",transition:"transform .25s",transform:openMod===i?"rotate(90deg)":"none",lineHeight:1}}>›</span>
                    </div>
                    {openMod===i&&(
                      <div style={{padding:"0 22px 18px"}}>
                        {m.topics.map((t,j)=>(
                          <div key={j} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"8px 0",borderTop:j>0?"1px solid rgba(19,41,60,.055)":undefined}}>
                            <span style={{color:RED,fontSize:12,flexShrink:0,lineHeight:1.7}}>→</span>
                            <span style={{fontSize:13,color:"rgba(19,41,60,.70)",lineHeight:1.65,fontFamily:SANS}}>{t}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* who it's for */}
              <div style={{background:"#fff",border:"1px solid rgba(19,41,60,.08)",borderRadius:16,padding:"24px 28px"}}>
                <h3 style={{fontFamily:SANS,fontWeight:800,fontSize:18,color:INK,marginBottom:18}}>Is this course right for you?</h3>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                  <div>
                    <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"#217346",marginBottom:10,fontWeight:700}}>✓  Good fit if...</div>
                    {["You work in analytics, MIS, finance or BI","You know Excel and are ready to move to Power BI","You want live dashboards — not monthly static reports","You've tried Power BI but can't crack DAX","Your team needs a production report in 4 weeks"].map((s,i)=>(
                      <div key={i} style={{display:"flex",gap:8,fontSize:13,color:"rgba(19,41,60,.72)",marginBottom:8,lineHeight:1.65}}>
                        <span style={{color:"#217346",fontWeight:700,flexShrink:0}}>✓</span>{s}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"#C00000",marginBottom:10,fontWeight:700}}>✗  Not for you if...</div>
                    {["You've never worked with data in any tool","You want a self-paced video course only","You need Tableau or Looker — this is Power BI only","You want a certificate without practical output"].map((s,i)=>(
                      <div key={i} style={{display:"flex",gap:8,fontSize:13,color:"rgba(19,41,60,.72)",marginBottom:8,lineHeight:1.65}}>
                        <span style={{color:"#C00000",fontWeight:700,flexShrink:0}}>✗</span>{s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: enrollment sidebar ── */}
            <div>
              <div className="pbi2-enroll">
                <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.42)",marginBottom:6}}>Duration</div>
                <div style={{fontFamily:SANS,fontWeight:800,fontSize:28,color:INK,letterSpacing:"-0.5px",marginBottom:4}}>~1 Month</div>
                <div style={{fontSize:13,color:"rgba(19,41,60,.52)",lineHeight:1.65,marginBottom:20}}>Live · 3 sessions/week · New batches monthly</div>

                {["Connect to your real SQL / Excel data","WhatsApp support between sessions","Session recordings to review later","Certificate of completion","Free consultation before you enrol"].map((f,i)=>(
                  <div key={i} style={{display:"flex",gap:8,fontSize:13,color:"rgba(19,41,60,.70)",marginBottom:8,lineHeight:1.55}}>
                    <span style={{color:"#217346",fontWeight:700,flexShrink:0}}>✓</span>{f}
                  </div>
                ))}

                <div style={{borderTop:"1px solid rgba(19,41,60,.08)",paddingTop:20,marginTop:12,display:"flex",flexDirection:"column",gap:10}}>
                  <a href="/contact" style={{display:"flex",justifyContent:"center",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:14,borderRadius:12,textDecoration:"none"}}>
                    Book Free Consultation →
                  </a>
                  <a href={WA.strategy} target="_blank" rel="noopener noreferrer" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:6,background:"#25D366",color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:13,padding:12,borderRadius:12,textDecoration:"none"}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* trainer stats */}
              <div style={{background:DARK,borderRadius:16,padding:24}}>
                <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:16}}>Trainer credentials</div>
                {[
                  {n:"50+",  l:"Live dashboards in production"},
                  {n:"10K+", l:"Professionals trained"},
                  {n:"4.8★", l:"Google · 729 reviews"},
                  {n:"Wk 2", l:"When your first live dashboard deploys"},
                ].map(({n,l},i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                    <span style={{fontFamily:SANS,fontWeight:800,fontSize:18,color:PBI,letterSpacing:"-0.5px"}}>{n}</span>
                    <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.45)",textAlign:"right",maxWidth:160}}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
