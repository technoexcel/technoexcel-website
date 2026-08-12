"use client";
import React, { useState } from "react";
import { WA } from "@/lib/constants";

// ── brand tokens ──────────────────────────────────────────────────
const INK   = "#13293C";
const RED   = "#EE2354";
const CREAM = "#F4F2EE";
const XL    = "#217346";          // Excel green
const XL_LT = "#2E8B57";          // lighter green
const DARK  = "#0a1a0f";          // deep green-black bg
const PANEL = "#0d1f12";          // sidebar bg
const SANS  = "'Plus Jakarta Sans',system-ui,sans-serif";
const MONO  = "'Space Mono',monospace";

// ── difficulty colours ────────────────────────────────────────────
const DIFF: Record<string,{bg:string;color:string}> = {
  Beginner:     { bg:"rgba(76,175,80,.18)",  color:"#4CAF50" },
  Intermediate: { bg:"rgba(33,115,70,.25)",  color:"#2ecc71" },
  Advanced:     { bg:"rgba(239,83,80,.18)",  color:"#EF5350" },
};

// ── Excel challenges data ─────────────────────────────────────────
const CHALLENGES = [
  {
    id:1, level:"Beginner",
    title:"XLOOKUP — Find Employee Dept",
    scenario:`Your HR file has two tables: Employees (ID, Name) and Departments (ID, Dept, Manager). Use XLOOKUP to pull the Department for each employee — it should handle missing IDs gracefully with "Not Found" instead of an error.`,
    hint:"XLOOKUP syntax: =XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found]). The 4th argument handles missing matches.",
    formula:`=XLOOKUP(\n  A2,\n  Departments[EmpID],\n  Departments[Department],\n  "Not Found"\n)`,
    output:[
      "✓  Formula returned 248 results",
      "   Unmatched rows: 3 → showing \"Not Found\"",
      "   No #N/A errors in the column",
    ],
    concepts:["XLOOKUP","Structured Table References","Error Handling"],
  },
  {
    id:2, level:"Beginner",
    title:"FILTER — Sales Above Target",
    scenario:`The sales team wants a live extract of only the rows where Revenue > Target. The list should update automatically when data changes — no manual filtering or copy-paste.`,
    hint:"FILTER(array, include, [if_empty]) — the second argument is a TRUE/FALSE condition. Combine with SORT to also rank the results.",
    formula:`=SORT(\n  FILTER(\n    SalesTable,\n    SalesTable[Revenue] > SalesTable[Target],\n    "No rows above target"\n  ),\n  3, -1\n)`,
    output:[
      "✓  Dynamic array spilled 41 rows",
      "   Sorted by Revenue (descending)",
      "   Auto-updates when source data changes",
    ],
    concepts:["FILTER","SORT","Dynamic Arrays","Spill Range"],
  },
  {
    id:3, level:"Intermediate",
    title:"Power Query — Clean Messy Data",
    scenario:`You receive a monthly export with merged headers, blank rows, inconsistent date formats and text in numeric columns. Write a Power Query M step sequence to clean it into a structured table without touching the source file.`,
    hint:"In Power Query: use Table.PromoteHeaders, Table.SelectRows with each[Column] <> null, and Table.TransformColumnTypes. Chain steps using let…in.",
    formula:`let\n  Source   = Excel.Workbook(\n               File.Contents(filePath),\n               null, true),\n  Sheet1   = Source{[Name="Export"]}[Data],\n  Headers  = Table.PromoteHeaders(Sheet1),\n  Cleaned  = Table.SelectRows(\n               Headers,\n               each [ID] <> null),\n  Typed    = Table.TransformColumnTypes(\n               Cleaned,{\n                 {"Date", type date},\n                 {"Revenue", type number}\n               })\nin\n  Typed`,
    output:[
      "✓  Query loaded 1,240 rows → 1,198 after blank removal",
      "   42 blank rows removed",
      "   Date and Revenue columns correctly typed",
    ],
    concepts:["Power Query","M Language","Table.PromoteHeaders","Type Transformation"],
  },
  {
    id:4, level:"Intermediate",
    title:"VBA — Auto-Generate Monthly Report",
    scenario:`Every month the finance team manually copies data from the master sheet, pastes into a template, applies formatting and emails it. Automate this with a VBA macro that runs in one click.`,
    hint:"Use Sheets(\"Master\").Range(\"A1\").CurrentRegion.Copy to grab the data block, then Sheets(\"Report\").Range(\"B3\").PasteSpecial xlPasteValues to paste without formulas. Loop through months with a For loop.",
    formula:`Sub GenerateMonthlyReport()\n  Dim wsData As Worksheet\n  Dim wsRpt  As Worksheet\n  Dim lastRow As Long\n\n  Set wsData = Sheets("Master")\n  Set wsRpt  = Sheets("Report")\n\n  ' Clear previous report\n  wsRpt.Range("B3:H200").ClearContents\n\n  ' Copy current month data\n  lastRow = wsData.Cells(Rows.Count,"A").End(xlUp).Row\n  wsData.Range("A2:G" & lastRow).Copy\n\n  ' Paste values only\n  wsRpt.Range("B3").PasteSpecial xlPasteValues\n\n  ' Apply formatting\n  wsRpt.Range("B3:H" & lastRow).Borders.LineStyle = xlContinuous\n  wsRpt.Range("B3:H3").Interior.Color = RGB(33,115,70)\n\n  MsgBox "Report ready!", vbInformation\nEnd Sub`,
    output:[
      "✓  Macro executed in 0.8 seconds",
      "   1,198 rows copied and formatted",
      "   Report sheet updated — no manual steps needed",
    ],
    concepts:["VBA Subroutines","Range.Copy","PasteSpecial","Cell Formatting"],
  },
  {
    id:5, level:"Advanced",
    title:"Dynamic Dashboard — Auto-Updating KPIs",
    scenario:`Build a dashboard where all KPI cards, the trend chart and the regional breakdown update automatically when the user changes the month slicer — using only Excel formulas (no Power BI, no macros).`,
    hint:"Use LET + FILTER + SUMIFS for dynamic KPIs. Drive chart data ranges with OFFSET or XLOOKUP into a summary table that reacts to a named-range slicer cell.",
    formula:`=LET(\n  month,  C1,\n  region, C2,\n  data,   FILTER(\n            SalesTable,\n            (SalesTable[Month]=month)*\n            (SalesTable[Region]=region)\n          ),\n  revenue, SUM(INDEX(data,0,3)),\n  target,  SUM(INDEX(data,0,4)),\n  pct,     IFERROR(revenue/target,0),\n  HSTACK(revenue, target, pct)\n)`,
    output:[
      "✓  LET formula spilled 3 KPI values",
      "   Reactive to Month slicer (C1) and Region (C2)",
      "   Chart series auto-update via named range",
    ],
    concepts:["LET","HSTACK","Dynamic Named Ranges","Dashboard Architecture"],
  },
];

// ── key concepts ──────────────────────────────────────────────────
const KEY_CONCEPTS = [
  "Dynamic Arrays & Spill Ranges",
  "XLOOKUP / FILTER / SORT / UNIQUE",
  "Power Query M language",
  "VBA variables, loops and subs",
  "LET for readable formula logic",
  "Pivot Tables & Calculated Fields",
  "Microsoft Copilot in Excel",
];

// ── curriculum modules ────────────────────────────────────────────
const MODULES = [
  {
    n:"01", title:"Advanced Formulas", dur:"3 sessions",
    topics:[
      "XLOOKUP and array matching",
      "FILTER, SORT and UNIQUE dynamic arrays",
      "Named ranges and structured table references",
      "Error handling: IFERROR, IFNA, ISERROR",
      "Text functions: TEXTJOIN, TRIM, CLEAN",
      "LET for multi-step formula logic",
    ],
  },
  {
    n:"02", title:"Power Query", dur:"3 sessions",
    topics:[
      "Connecting to files, folders and databases",
      "Combining multiple sheets automatically",
      "Cleaning and reshaping messy exports",
      "Unpivoting tables for analysis",
      "M language basics and custom steps",
      "Scheduled refresh and parameter queries",
    ],
  },
  {
    n:"03", title:"VBA and Automation", dur:"4 sessions",
    topics:[
      "Recording and editing macros",
      "Variables, loops and conditional logic",
      "Working with ranges, sheets and workbooks",
      "User forms and input validation",
      "Automating monthly reports end-to-end",
      "Error handling and debugging",
    ],
  },
  {
    n:"04", title:"AI Tools and Dashboards", dur:"3 sessions",
    topics:[
      "Microsoft Copilot in Excel (prompting for formulas)",
      "ChatGPT for formula and VBA help",
      "Dynamic charts and sparklines",
      "Pivot calculated fields and grouping",
      "Interactive dashboards with slicers",
      "Power Pivot basics for large datasets",
    ],
  },
];

// ── component ─────────────────────────────────────────────────────
export default function ExcelCoursePage() {
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
        .xl2-wrap{font-family:${SANS}}
        /* ── header ── */
        .xl2-header{background:${DARK};padding:72px 52px 48px;position:relative;overflow:hidden}
        .xl2-header::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:72px 72px;pointer-events:none}
        .xl2-header::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(33,115,70,.10),transparent 65%);top:-120px;right:-60px;pointer-events:none}
        .xl2-covers{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
        .xl2-tag{font-family:${MONO};font-size:11px;padding:5px 12px;border-radius:6px;border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.68);background:transparent}
        /* ── main split ── */
        .xl2-split{display:grid;grid-template-columns:272px 1fr;min-height:600px}
        /* ── left sidebar ── */
        .xl2-sidebar{background:${PANEL};border-right:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column}
        .xl2-ch-list{padding:20px 16px 8px;flex:1}
        .xl2-ch-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;margin-bottom:4px;transition:background .15s}
        .xl2-ch-item:hover{background:rgba(255,255,255,.06)}
        .xl2-ch-item.sel{background:rgba(33,115,70,.15);border-left:3px solid ${XL}}
        .xl2-ch-num{width:26px;height:26px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-family:${MONO};font-size:10px;font-weight:700;flex-shrink:0;background:rgba(255,255,255,.07);color:rgba(255,255,255,.45)}
        .xl2-ch-item.sel .xl2-ch-num{background:rgba(33,115,70,.25);color:#4CAF50}
        .xl2-concepts{border-top:1px solid rgba(255,255,255,.07);padding:16px}
        .xl2-concept-item{font-size:11px;color:rgba(255,255,255,.50);padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);line-height:1.4}
        .xl2-concept-item::before{content:'•';color:${XL};margin-right:8px}
        /* ── right panel ── */
        .xl2-main{background:#fff;padding:32px 36px;display:flex;flex-direction:column;gap:20px}
        .xl2-badge-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .xl2-diff-badge{font-family:${MONO};font-size:10px;padding:3px 10px;border-radius:5px;font-weight:700}
        .xl2-desc{font-size:14px;color:rgba(19,41,60,.72);line-height:1.8;background:${CREAM};border-radius:10px;padding:16px 18px;border:1px solid rgba(19,41,60,.08)}
        .xl2-btns{display:flex;gap:10px;flex-wrap:wrap}
        .xl2-hint-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;border:1.5px solid rgba(19,41,60,.18);background:#fff;color:rgba(19,41,60,.65);font-family:${SANS};font-size:13px;font-weight:600;cursor:pointer;transition:all .15s}
        .xl2-hint-btn:hover{border-color:${XL};color:${INK}}
        .xl2-reveal-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;border:1.5px solid rgba(19,41,60,.12);background:rgba(19,41,60,.05);color:rgba(19,41,60,.55);font-family:${SANS};font-size:13px;font-weight:600;cursor:pointer;transition:all .15s}
        .xl2-reveal-btn:hover{border-color:rgba(19,41,60,.30);color:${INK}}
        /* ── formula editor ── */
        .xl2-editor{background:${DARK};border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
        .xl2-editor-bar{background:#061009;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06)}
        .xl2-editor-code{padding:18px 20px;font-family:${MONO};font-size:13px;line-height:1.9;min-height:120px;color:rgba(255,255,255,.55);white-space:pre}
        .xl2-run-btn{display:flex;align-items:center;gap:7px;background:${XL};color:#fff;font-family:${SANS};font-weight:700;font-size:13px;padding:11px 22px;border:none;cursor:pointer;border-radius:0 0 12px 12px;width:100%;justify-content:center;transition:opacity .15s}
        .xl2-run-btn:hover{opacity:.88}
        /* ── output ── */
        .xl2-output{background:#040d06;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
        .xl2-output-bar{background:#061009;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06)}
        .xl2-output-body{padding:14px 18px}
        /* ── course info section ── */
        .xl2-info{background:${CREAM};padding:64px 52px}
        .xl2-info-grid{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 320px;gap:52px;align-items:flex-start}
        .xl2-mod-wrap{border:1.5px solid rgba(19,41,60,.09);border-radius:12px;overflow:hidden;margin-bottom:10px;background:#fff;transition:border-color .2s}
        .xl2-mod-wrap.open{border-color:rgba(33,115,70,.30)}
        .xl2-mod-hdr{padding:16px 22px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:background .15s}
        .xl2-mod-hdr:hover{background:rgba(33,115,70,.03)}
        /* ── sidebar card ── */
        .xl2-enroll{background:#fff;border:1px solid rgba(19,41,60,.10);border-radius:16px;padding:28px;margin-bottom:16px;position:sticky;top:88px}
        /* ── responsive ── */
        @media(max-width:1100px){.xl2-info-grid{grid-template-columns:1fr!important} .xl2-enroll{position:static}}
        @media(max-width:900px){.xl2-split{grid-template-columns:1fr!important} .xl2-sidebar{border-right:none;border-bottom:1px solid rgba(255,255,255,.07)}}
        @media(max-width:768px){.xl2-header{padding:72px 20px 40px!important} .xl2-info{padding:48px 20px!important} .xl2-main{padding:22px 18px!important}}
      `}} />

      <div className="xl2-wrap">

        {/* ══════════ HEADER ══════════ */}
        <div className="xl2-header">
          <div style={{maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1}}>
            <a href="/courses" style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:MONO,fontSize:11,color:"rgba(255,255,255,.45)",textDecoration:"none",marginBottom:28}}>
              ← Back to Courses
            </a>
            <div style={{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{fontFamily:MONO,fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:5,background:"rgba(33,115,70,.20)",color:"#4CAF50",letterSpacing:"1px"}}>POPULAR</span>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.35)"}}>Excel Analyst Path</span>
              <span style={{color:"rgba(255,255,255,.20)"}}>|</span>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.35)"}}>5 formula challenges</span>
            </div>
            <h1 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(28px,4.5vw,58px)",lineHeight:.95,letterSpacing:"-0.04em",color:"#fff",marginBottom:14}}>
              Advanced Excel with AI
            </h1>
            <p style={{fontFamily:SANS,fontWeight:300,fontSize:16,color:"rgba(255,255,255,.68)",maxWidth:560,lineHeight:1.8,margin:0}}>
              From formulas to full automation — XLOOKUP, FILTER, Power Query, VBA and Microsoft Copilot. Taught with your real data files, not demo datasets.
            </p>
            <div className="xl2-covers">
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.45)",letterSpacing:"1px",alignSelf:"center"}}>COVERS:</span>
              {["XLOOKUP","FILTER & SORT","Dynamic Arrays","Power Query","VBA Macros","LET","Microsoft Copilot"].map(t=>(
                <span key={t} className="xl2-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ CHALLENGE SPLIT ══════════ */}
        <div className="xl2-split">

          {/* ── LEFT SIDEBAR ── */}
          <div className="xl2-sidebar">
            <div className="xl2-ch-list">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
                <span style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.35)"}}>Excel Challenges</span>
                <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.30)"}}>{active}/{CHALLENGES.length} done</span>
              </div>
              {CHALLENGES.map((c,i)=>(
                <div key={i} className={`xl2-ch-item${active===i?" sel":""}`} onClick={()=>selectChallenge(i)}>
                  <div className="xl2-ch-num">{c.id}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:SANS,fontWeight:600,fontSize:12,color:"rgba(255,255,255,.80)",lineHeight:1.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{c.title}</div>
                    <span style={{fontFamily:MONO,fontSize:9,padding:"1px 6px",borderRadius:4,marginTop:4,display:"inline-block",...DIFF[c.level]}}>{c.level}</span>
                  </div>
                  {active===i&&<span style={{color:"#4CAF50",fontSize:14}}>›</span>}
                </div>
              ))}
            </div>

            {/* Key Concepts */}
            <div className="xl2-concepts">
              <div
                style={{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",marginBottom:openConcepts?10:0}}
                onClick={()=>setOpenConcepts(p=>!p)}
              >
                <span style={{fontFamily:MONO,fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(255,255,255,.35)"}}>Key Concepts</span>
                <span style={{color:"rgba(255,255,255,.30)",fontSize:13,transform:openConcepts?"rotate(90deg)":"none",transition:"transform .2s"}}>›</span>
              </div>
              {openConcepts&&KEY_CONCEPTS.map((k,i)=>(
                <div key={i} className="xl2-concept-item">{k}</div>
              ))}
            </div>
          </div>

          {/* ── RIGHT MAIN PANEL ── */}
          <div className="xl2-main">
            {/* challenge header */}
            <div>
              <div className="xl2-badge-row" style={{marginBottom:10}}>
                <span style={{fontFamily:MONO,fontSize:11,color:"rgba(19,41,60,.45)"}}>Challenge {ch.id} of {CHALLENGES.length}</span>
                <span className="xl2-diff-badge" style={DIFF[ch.level]}>{ch.level}</span>
              </div>
              <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:24,color:INK,letterSpacing:"-0.03em",margin:0}}>{ch.title}</h2>
            </div>

            {/* scenario */}
            <div className="xl2-desc">{ch.scenario}</div>

            {/* action buttons */}
            <div className="xl2-btns">
              <button className="xl2-hint-btn" onClick={()=>setHinted(p=>!p)}>
                💡 {hinted?"Hide hint":"Show hint"}
              </button>
              <button className="xl2-reveal-btn" onClick={()=>setRevealed(p=>!p)}>
                🔓 {revealed?"Hide formula":"Reveal formula"}
              </button>
            </div>

            {/* hint box */}
            {hinted&&(
              <div style={{background:"rgba(33,115,70,.06)",border:"1px solid rgba(33,115,70,.25)",borderRadius:10,padding:"12px 16px",fontFamily:SANS,fontSize:13,color:"rgba(19,41,60,.72)",lineHeight:1.8}}>
                <span style={{fontWeight:700,color:INK}}>Hint: </span>{ch.hint}
              </div>
            )}

            {/* formula editor */}
            <div className="xl2-editor">
              <div className="xl2-editor-bar">
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={XL}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>
                  <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.60)"}}>EXCEL FORMULA EDITOR</span>
                </div>
                <span style={{fontFamily:MONO,fontSize:9,color:"rgba(255,255,255,.25)"}}>Ctrl + Shift + Enter</span>
              </div>
              <div className="xl2-editor-code">
                {revealed ? (
                  ch.formula.split("\n").map((line,i)=>{
                    const fns = /^(=XLOOKUP|=FILTER|=SORT|=UNIQUE|=LET|=HSTACK|=VSTACK|=SUM|=INDEX|=IFERROR|let|Source|Sheet1|Headers|Cleaned|Typed|in|Sub |End Sub|Dim |Set |MsgBox)/;
                    const isKw = fns.test(line.trim());
                    const isStr = line.includes('"');
                    return (
                      <span key={i} style={{display:"block",color:isKw?"#4CAF50":isStr?"rgba(255,200,100,.85)":"rgba(255,255,255,.65)"}}>
                        {line}
                      </span>
                    );
                  })
                ) : (
                  <>
                    <span style={{display:"block",color:"rgba(255,255,255,.28)"}}>{"// Write your Excel formula here"}</span>
                    <span style={{display:"block",color:"rgba(255,255,255,.28)"}}>{"// Use the hint above if you need guidance"}</span>
                    <span style={{display:"block",marginTop:10,color:"rgba(255,255,255,.40)"}}>=</span>
                  </>
                )}
              </div>
              <button className="xl2-run-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Run Formula
              </button>
            </div>

            {/* output */}
            {revealed&&(
              <div className="xl2-output">
                <div className="xl2-output-bar">
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontFamily:MONO,fontSize:10,color:"rgba(255,255,255,.50)"}}>☰ Output</span>
                  </div>
                  <span style={{fontFamily:MONO,fontSize:9,color:"rgba(255,255,255,.25)"}}>{ch.output.length} lines</span>
                </div>
                <div className="xl2-output-body">
                  {ch.output.map((line,i)=>(
                    <div key={i} style={{fontFamily:MONO,fontSize:12,color:line.startsWith("✓")?"#4CAF50":"rgba(255,255,255,.65)",lineHeight:1.9}}>{line}</div>
                  ))}
                </div>
              </div>
            )}

            {/* concepts used */}
            <div style={{paddingTop:4}}>
              <span style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.40)",letterSpacing:"1px",textTransform:"uppercase"}}>Concepts used: </span>
              {ch.concepts.map(c=>(
                <span key={c} style={{fontFamily:MONO,fontSize:10,padding:"2px 8px",background:"rgba(19,41,60,.06)",border:"1px solid rgba(19,41,60,.12)",borderRadius:4,color:INK,marginLeft:6,display:"inline-block",marginBottom:4}}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ COURSE INFO ══════════ */}
        <div className="xl2-info">
          <div className="xl2-info-grid">

            {/* ── LEFT: curriculum + who it's for ── */}
            <div>
              <div style={{marginBottom:52}}>
                <div style={{fontFamily:MONO,fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.45)",marginBottom:10}}>Full Curriculum</div>
                <h2 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(20px,2.5vw,34px)",letterSpacing:"-0.04em",color:INK,marginBottom:24,lineHeight:1.1}}>
                  4 modules · ~13 sessions.<br/><span style={{color:RED}}>Each session solves a real work problem.</span>
                </h2>
                {MODULES.map((m,i)=>(
                  <div key={i} className={`xl2-mod-wrap${openMod===i?" open":""}`}>
                    <div className="xl2-mod-hdr" onClick={()=>setOpenMod(openMod===i?null:i)}>
                      <div style={{display:"flex",alignItems:"center",gap:14,flex:1,minWidth:0}}>
                        <span style={{fontFamily:MONO,fontSize:12,color:XL,fontWeight:700,flexShrink:0}}>{m.n}</span>
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
                            <span style={{color:XL,fontSize:12,flexShrink:0,lineHeight:1.7}}>→</span>
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
                    <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:XL,marginBottom:10,fontWeight:700}}>✓  Good fit if...</div>
                    {["You use Excel daily and want to stop doing things manually","You spend 2+ hours/week on copy-paste or report formatting","You know basics but want formulas that actually save time","You want to automate your monthly reporting cycle","Your team needs better Excel skills quickly"].map((s,i)=>(
                      <div key={i} style={{display:"flex",gap:8,fontSize:13,color:"rgba(19,41,60,.72)",marginBottom:8,lineHeight:1.65}}>
                        <span style={{color:XL,fontWeight:700,flexShrink:0}}>✓</span>{s}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:"#C00000",marginBottom:10,fontWeight:700}}>✗  Not for you if...</div>
                    {["You've never opened Excel before (start with basics first)","You want only a self-paced video course","You need Power BI — this is Excel only","You want a certificate without doing real exercises"].map((s,i)=>(
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
              <div className="xl2-enroll">
                <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.42)",marginBottom:6}}>Duration</div>
                <div style={{fontFamily:SANS,fontWeight:800,fontSize:28,color:INK,letterSpacing:"-0.5px",marginBottom:4}}>~1 Month</div>
                <div style={{fontSize:13,color:"rgba(19,41,60,.52)",lineHeight:1.65,marginBottom:20}}>Live · 3 sessions/week · New batches monthly</div>

                {["Your own Excel files used in session","WhatsApp support between sessions","Session recordings to review later","Certificate of completion","Free consultation before you enrol"].map((f,i)=>(
                  <div key={i} style={{display:"flex",gap:8,fontSize:13,color:"rgba(19,41,60,.70)",marginBottom:8,lineHeight:1.55}}>
                    <span style={{color:XL,fontWeight:700,flexShrink:0}}>✓</span>{f}
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

              {/* stats card */}
              <div style={{background:DARK,borderRadius:16,padding:24}}>
                <div style={{fontFamily:MONO,fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:16}}>Why TechnoExcel</div>
                {[
                  {n:"10K+", l:"Professionals trained"},
                  {n:"4.8★", l:"Google · 729 reviews"},
                  {n:"#1",   l:"Most-requested course"},
                  {n:"Wk 1", l:"When you stop doing things manually"},
                ].map(({n,l},i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,.07)"}}>
                    <span style={{fontFamily:SANS,fontWeight:800,fontSize:18,color:"#4CAF50",letterSpacing:"-0.5px"}}>{n}</span>
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
