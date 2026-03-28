import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../page";
import { WA, COURSES } from "@/lib/constants";

const INK="#13293C",RED="#EE2354",BG="#0d1f2d",CREAM="#F4F2EE";
const SANS="var(--font-jakarta,'Plus Jakarta Sans',sans-serif)";
const MONO="var(--font-mono,'Space Mono',monospace)";

const ARTICLE_DATA: Record<string,{relatedSlug:string;relatedCourse:string;sections:{h:string;body:string}[]}> = {
  "how-to-automate-weekly-reports-excel":{relatedSlug:"advanced-excel-training-hyderabad",relatedCourse:"Advanced Excel with AI",sections:[
    {h:"Why most weekly reports are still manual in 2026",body:"Most weekly reports were built as one-off exercises — someone created a template, it got forwarded, and now the same 10 manual steps happen every Friday. The fix doesn't require new software or a large project. It requires understanding where the time actually goes: usually pulling data from multiple files, reformatting it, and recalculating summaries that could be automated in under an hour of setup."},
    {h:"Step 1 — Connect your sources with Power Query",body:"Instead of opening three files and copying data, Power Query lets you define the transformation once. Your source files stay exactly where they are. Each refresh re-runs the same logic automatically. Setup takes 20–30 minutes the first time and saves hours every week after. For most weekly reports, the key transformations are: combine sheets, clean column names, filter irrelevant rows, and aggregate totals."},
    {h:"Step 2 — Lock your pivot table layout",body:"Pivot tables get rebuilt manually because people don't lock the layout. Once your Power Query output is the source, fix the pivot field configuration and turn off auto-sort. From that point, refreshing the pivot takes one click and the format stays intact. No more dragging fields or reformatting columns after every update."},
    {h:"Step 3 — One macro to run everything",body:"A single VBA macro can: refresh the Power Query connection, refresh all pivot tables, and save the file with a timestamped name. That macro can be triggered by a keyboard shortcut or a button on the sheet. Total runtime for most reports: under 60 seconds. Total setup time: roughly 2 hours the first time you build it."},
    {h:"The most common failure point — and how to prevent it",body:"The most frequent breakdown is a source file that moved or was renamed. Power Query shows a clear error and won't silently produce wrong data — but it will stop. The fix is simple: keep source files in one fixed folder with standardised names and never move them. That one rule eliminates 90% of ongoing maintenance."},
  ]},
  "power-bi-vs-excel-which-is-right":{relatedSlug:"power-bi-training-hyderabad",relatedCourse:"Power BI Mastery",sections:[
    {h:"The question teams get wrong",body:"Most teams frame it as 'should we move from Excel to Power BI?' That is the wrong question. Excel and Power BI are not direct competitors — they serve different jobs. The right question is: what job needs doing, and which tool does it better?"},
    {h:"When Excel is clearly the right choice",body:"Excel wins when the report is a working document (not just a display), when calculations need to be audited row by row, when the audience is 1–3 people, when the data source is a flat file with a stable structure, or when the analysis is exploratory and changes frequently. Finance models, ad hoc analysis, and anything where a human needs to edit values directly belongs in Excel."},
    {h:"When Power BI is clearly the right choice",body:"Power BI wins when the audience is 5+ people, when the data refreshes daily or more, when multiple tables need to be joined reliably, when row-level security is required, or when the report needs to be shared across devices without email attachments. Operations dashboards, management reporting, and anything with a scheduled refresh belongs in Power BI."},
    {h:"The grey zone — and a practical tiebreaker",body:"For a monthly report shared with 4 people from a single Excel source, either tool is defensible. The tiebreaker is: will this grow? More users, more data sources, more frequency — if yes, build in Power BI now. Migrating a complex Excel report to Power BI later is significantly more effort than building it right the first time."},
    {h:"The practical answer for most organisations in India in 2026",body:"Most mid-size companies need both — Excel for analysts who do operational and ad hoc work, and Power BI for management-level dashboards. The mistake is treating them as alternatives. They are complementary, and the most effective teams use both deliberately rather than defaulting to one for everything."},
  ]},
  "top-5-excel-skills-every-analyst":{relatedSlug:"advanced-excel-training-hyderabad",relatedCourse:"Advanced Excel with AI",sections:[
    {h:"Why the same five skills keep coming up",body:"Across 500+ corporate training programs and 10,000+ trained professionals, TechnoExcel has seen the same pattern: analysts with these five skills spend roughly 20% of their time on data preparation. Those without them spend 80%. The skills are not advanced — they are simply not taught in most standard Excel courses or university programs."},
    {h:"1. XLOOKUP — the only lookup you need",body:"VLOOKUP has two structural problems: it breaks when columns shift, and it can only look to the right. XLOOKUP solves both, handles errors more gracefully, supports approximate matches, and can return multiple values. If you use VLOOKUP daily, XLOOKUP will save you real hours within the first week of switching. There is no reason to use VLOOKUP in Excel 365 or 2021 onward."},
    {h:"2. Power Query — the end of copy-paste",body:"Every analyst has files they open, copy from, paste into another file, and repeat every week. Power Query replaces that entire cycle with a reusable transformation. Learn to combine sheets, clean column names, split text fields, and unpivot wide data into tall data. These four transformations cover 80% of data prep work across most industries."},
    {h:"3. Dynamic arrays — one formula, multiple outputs",body:"FILTER, SORT, UNIQUE and SEQUENCE changed what is possible in Excel without VBA. FILTER alone replaces dozens of manual sorts, copies and conditional pastes. These functions work in Excel 365 and 2021 onward. If your organisation is on an older version, this is a concrete reason to push for an upgrade."},
    {h:"4. Pivot calculated fields — analysis without helper columns",body:"Most analysts add helper columns to calculate margins, ratios and year-on-year changes. Calculated fields inside pivot tables do the same thing without modifying the source data. They update automatically on refresh, they don't clutter the raw data sheet, and they make the model easier for someone else to audit or maintain."},
    {h:"5. Named ranges — formulas that document themselves",body:"=SUM(B3:B47) is meaningless six months later. =SUM(MonthlyRevenue) is self-documenting. Named ranges make complex models readable, shareable and far easier to audit. They also prevent the common error of a formula referencing the wrong range after rows are inserted above the named range. This one skill dramatically reduces errors in production models."},
  ]},
  "what-is-data-analytics-plain-english":{relatedSlug:"data-analytics-training-hyderabad",relatedCourse:"Data Analytics",sections:[
    {h:"What people mean when they say data analytics",body:"The term covers four distinct activities that are often conflated: descriptive analytics (what happened), diagnostic analytics (why it happened), predictive analytics (what will likely happen) and prescriptive analytics (what should we do). Most business analyst roles in India in 2026 focus primarily on the first two. The latter two require more specialised skills and are typically senior-level or data science adjacent."},
    {h:"The tools that actually appear in the job",body:"In most Indian analyst roles: SQL for extracting and querying data, Excel for cleaning and summarising it, Power BI or Tableau for presenting findings, and Python for automation or analysis that exceeds what Excel can handle. These four tools appear in the vast majority of analyst job postings. Data science tools — machine learning libraries, deep learning frameworks — appear in a much smaller subset of roles and almost always require a longer learning investment."},
    {h:"What companies are hiring for in 2026",body:"Based on analysis of analyst job postings across Hyderabad, Bangalore, Mumbai and Pune in early 2026: SQL required in 74% of roles, Excel (advanced) in 68%, Power BI or Tableau in 52%, Python basics in 41%. Communication skills — the ability to explain findings clearly to non-technical stakeholders — are mentioned in 89% of job descriptions but rarely assessed in interviews, which creates a significant advantage for candidates who practice this deliberately."},
    {h:"Realistic salary ranges by experience",body:"Entry-level (0–2 years, SQL + Excel + Power BI): ₹4–7 LPA in Hyderabad, slightly higher in Bangalore and Mumbai. Mid-level (2–5 years, strong SQL and Power BI, some Python): ₹8–14 LPA. Senior analyst or data lead (5+ years, full stack including Python): ₹15–25 LPA. These vary significantly by industry — FMCG and manufacturing pay toward the lower end of each range; technology companies and financial services toward the higher end."},
    {h:"Whether it is the right direction for you",body:"Analytics is the right direction if you find yourself trying to understand why numbers look the way they do, if you are comfortable being wrong when the data contradicts your intuition, and if explaining findings to a non-technical audience interests you as much as the analysis itself. The work is detail-oriented, iterative, and involves a lot of data cleaning before any interesting analysis begins. If that sounds tedious rather than satisfying, a different career direction may be a better fit."},
  ]},
  "invoice-reconciliation-vba-case-study":{relatedSlug:"vba-macros-excel",relatedCourse:"VBA & Macros for Excel",sections:[
    {h:"The problem: 6 hours every Friday",body:"A finance team at an FMCG company spent every Friday afternoon reconciling 200+ vendor invoices across three separate Excel files: one exported from the ERP system, one received from each vendor, and one internal payment tracker. The process required opening all three files, manually finding invoice number matches, checking amounts, flagging discrepancies, and updating the tracker. With two analysts involved, the process consumed roughly 12 person-hours per week — over 600 hours annually."},
    {h:"Why previous attempts at automation had failed",body:"The team had tried VLOOKUP-based matching previously. It failed repeatedly because the vendor file format changed slightly every few weeks — different column headers, different invoice number prefixes, extra blank rows. That inconsistency broke the formula logic each time. The real problem was not the matching itself but the unreliable input format. VBA is well-suited to this because it can handle dynamic format variations programmatically rather than assuming a fixed structure."},
    {h:"What was built",body:"A VBA macro that: opens all three source files from a fixed folder path, normalises invoice number formats across all three (removing vendor-specific prefixes, trimming whitespace, converting to uppercase), runs three-way matching using a dictionary object for performance, categorises each exception (amount mismatch, present in ERP but missing from vendor file, present in vendor file but missing from ERP, duplicate entries), and generates a formatted exception report with a full audit trail. One button press, 22 minutes start to finish."},
    {h:"The validation layer — the most important part",body:"Before running any reconciliation logic, the macro checks: all three source files exist and are accessible, invoice counts in each file are within expected range (a sudden drop signals a data export problem), and no duplicate invoice numbers appear in the internal tracker. If any check fails, the macro stops and displays a clear error message before touching any data. This prevented the automation from silently producing incorrect reconciliation output — the most dangerous failure mode in a financial process."},
    {h:"Results after 3 months in production",body:"Full reconciliation now runs in 22 minutes instead of 6 hours. The error rate on matched invoices dropped from approximately 3% (manual misses) to near zero — only genuine data discrepancies get flagged. The two analysts recovered over 500 person-hours in the first 3 months and redirected that time to supplier relationship management, payment dispute resolution and cash flow analysis — work that genuinely required human judgment and relationship context."},
  ]},
  "microsoft-copilot-excel-practical-guide":{relatedSlug:"ai-prompt-engineering-business",relatedCourse:"AI & Prompt Engineering",sections:[
    {h:"What Copilot actually does in Excel in 2026",body:"Microsoft Copilot in Excel can generate formulas from natural language descriptions, identify patterns in data columns, suggest pivot table configurations, produce first-draft charts, and explain existing formulas in plain English. In practical testing these features work reasonably well — but only when the user already knows enough Excel to evaluate whether the output is correct. Used as a replacement for Excel knowledge rather than a supplement to it, Copilot produces plausible-looking but incorrect outputs surprisingly often."},
    {h:"Where it genuinely saves time",body:"Formula generation from natural language is the strongest use case. Describing what you want in plain English — 'sum column B only where column A contains the word Hyderabad and column C is greater than 1000' — produces accurate SUMIFS formulas faster than looking up syntax. Explaining unfamiliar formulas in inherited files saves significant time when auditing models built by others. Both use cases assume the user can verify the output, which requires baseline Excel knowledge."},
    {h:"Where it still fails — and how often",body:"Data cleaning is unreliable. Copilot frequently misidentifies what needs cleaning and applies transformations inconsistently across different file structures. Multi-sheet lookups with complex conditions produce errors in roughly 30–40% of cases in our testing. VBA generation is useful as a starting point but requires review and often significant correction before it runs correctly. Any output involving financial calculations should be verified against a known sample before use in a production file."},
    {h:"How to use it without losing accuracy control",body:"Treat Copilot as a fast first draft, not a finished product. Always test formula outputs against a small known sample before applying them to the full dataset. Never use Copilot-generated logic in a financial model or reconciliation without checking edge cases manually — what happens with blank cells, zero values, duplicates, and text in numeric columns. The 10 minutes spent verifying is always worth it."},
    {h:"Realistic efficiency gains for most users",body:"For an analyst who already knows Excel well, Copilot saves 15–25% of time on routine formula writing and chart setup. For someone still learning, it creates a dependency that slows long-term skill development — it produces outputs that look right but aren't, and it teaches no underlying logic. The correct sequence: develop solid Excel fundamentals first, then add Copilot as an accelerator. In that order, it is genuinely useful."},
  ]},
  "power-query-beginner-guide":{relatedSlug:"advanced-excel-training-hyderabad",relatedCourse:"Advanced Excel with AI",sections:[
    {h:"What Power Query actually does",body:"Power Query is a data transformation engine built directly into Excel and Power BI. You describe the steps needed to clean and reshape your data — once. Excel records those steps. Every time you refresh, it re-runs the exact same steps against the current source data automatically. Critically: the original source data is never modified. Power Query works on a copy, so your source files remain intact regardless of what transformations you apply."},
    {h:"The four transformations that cover 80% of use cases",body:"Combining multiple sheets or files into one table. Cleaning column headers (removing spaces, standardising capitalisation, removing symbols). Splitting or merging text columns (separating full names into first and last, combining date and time into a single timestamp). Unpivoting — converting wide data with one column per month into tall data with a Month column. Learn these four transformations and you can handle the data preparation work in most analyst roles."},
    {h:"Setting it up step by step",body:"Data tab → Get Data → From File (or From Table/Range if your data is already in Excel). Select your source. Power Query opens the editor. Every transformation you apply is recorded in the Applied Steps panel on the right side. You can click any step to see what the data looked like at that point, rename steps for clarity, or delete a step if you made an error. When you close and load, the transformed data appears in your spreadsheet. The original source is untouched."},
    {h:"The refresh cycle and automation",body:"When source data updates, go to Data → Refresh All. Power Query re-runs all recorded steps against the current source and updates your output table. For files stored in SharePoint or OneDrive for Business, you can configure Power BI or Excel Online to refresh automatically on a schedule — meaning the output updates without you opening the file at all."},
    {h:"The two most common mistakes beginners make",body:"Mistake one: applying transformations directly to the source file instead of using Power Query — then the source is corrupted and there is no clean version to fall back on. Always keep source files read-only. Mistake two: building a query with a hardcoded local file path (C:\\Users\\YourName\\Documents\\...) and then moving the file, which breaks the connection immediately. Use a relative path or a parameter for the file location from the start."},
  ]},
  "power-bi-dashboard-design-principles":{relatedSlug:"power-bi-training-hyderabad",relatedCourse:"Power BI Mastery",sections:[
    {h:"Why most dashboards don't get used",body:"After 50+ Power BI projects, the pattern is consistent: dashboards that go unused are not technically broken — they are simply too hard to read quickly. A manager opening a dashboard on a Monday morning needs to answer one question in 10 seconds: is anything wrong? If the dashboard doesn't answer that question immediately, they go back to the summary email. Good dashboard design reduces the time to insight, not the quantity of data on screen."},
    {h:"Principle 1: One primary metric per page",body:"Every dashboard page should have one number that matters most — prominently placed, large, clearly labelled. Everything else on that page contextualises that number. If you find yourself placing 8 KPI cards on one page, you have multiple dashboards competing for space on a single canvas. Each page should have a single clear purpose: 'is revenue on track?', 'where is inventory low?', 'which region needs attention?'"},
    {h:"Principle 2: Hierarchy before detail",body:"Show the summary first, then allow drill-down. A regional sales dashboard shows total revenue first, then by-region, then by-product when the user requests it. Most users never need to go beyond level two — design for that 80%, while making level three accessible via bookmarks or drill-through. Dashboards that show everything at once overwhelm users and create cognitive load that prevents fast decision-making."},
    {h:"Principle 3: Filter discipline",body:"Filters that are always visible and always active confuse users because they cannot tell whether the numbers reflect a filtered view or the complete data. Best practice: show active filter states clearly in the page header (e.g. 'Showing: FY2026 · North Region'), and include a visible Reset Filters button that is always one click away. Never let a user walk away from a dashboard unsure whether a filter is still applied."},
    {h:"Principle 4: Colour with a single purpose",body:"Colour should signal status — not decorate. Red means performance below threshold. Green means on target. Grey means neutral or context. When everything is colourful, nothing stands out. Use two accent colours maximum per dashboard applied consistently for the same meaning throughout. Background should be neutral. The data provides the visual interest — not the chrome around it."},
    {h:"Principle 5: Test with the actual user before sign-off",body:"Before presenting any dashboard as complete, sit with the person who will use it daily and ask them to find three specific answers without guidance. Where they hesitate or click the wrong element is your redesign list. This takes 20 minutes and prevents months of incremental change requests. Every dashboard TechnoExcel delivers goes through this step before handover."},
  ]},
  "data-analytics-career-india-2026":{relatedSlug:"data-analytics-training-hyderabad",relatedCourse:"Data Analytics",sections:[
    {h:"The job market in India in 2026",body:"Analytics roles in India have grown consistently for several years and the market has matured significantly. Entry-level roles that were accessible with basic Excel knowledge in 2021 now expect SQL as a baseline. Mid-level roles that previously required Power BI now also expect Python familiarity or at least exposure to scripting. The volume of available roles continues to grow — particularly in Hyderabad, Bangalore, Pune and Chennai — but the baseline skill threshold has risen across all categories."},
    {h:"What companies are actually hiring for",body:"Based on review of analyst job postings in major Indian cities in early 2026: SQL required in 74% of roles, advanced Excel (Power Query, pivot tables) in 68%, Power BI or Tableau in 52%, Python basics in 41%. Communication skills — explaining analysis clearly to non-technical stakeholders — appear in 89% of job descriptions but are almost never tested in interview processes, which makes them a consistent differentiator for candidates who develop them deliberately."},
    {h:"Salary ranges by experience level in 2026",body:"Entry-level (0–2 years, SQL + Excel + Power BI): ₹4–7 LPA in Hyderabad, ₹5–9 LPA in Bangalore and Mumbai. Mid-level (2–5 years, strong SQL, Power BI and Python basics): ₹8–14 LPA. Senior analyst or data lead (5+ years, full stack): ₹15–25 LPA. Technology companies and financial services pay toward the higher end of each range. FMCG, manufacturing and healthcare pay toward the lower end but typically offer better work-life balance and more exposure to real operational problems."},
    {h:"The fastest path from a non-technical background",body:"Someone starting from zero with a business, finance or operations background can reach a hirable level for a junior analyst role in 3–4 months of focused part-time learning — roughly 15–20 hours per week. The sequence that works: Excel (Power Query + XLOOKUP + pivot tables), then SQL, then Power BI. This three-tool stack appears in most junior analyst requirements. Building 2–3 portfolio projects that demonstrate you can answer a business question end-to-end from raw data to a presentation accelerates hiring significantly."},
    {h:"What separates analysts who grow quickly from those who plateau",body:"The analysts who advance fastest are not necessarily the most technically skilled — they are the ones who connect data to decisions. Being able to say 'the data shows X, which means we should consider doing Y, and here is the risk if we don't' is rarer than knowing Python or SQL. It is also less teachable in a course. The habit is developed by practice: for every piece of analysis, write one sentence about what decision it should inform. Develop that habit from the first month and you will outgrow most peers who learned the same technical skills."},
  ]},
};

export function generateStaticParams(){
  return BLOG_POSTS.map(p=>({slug:p.slug}));
}

export function generateMetadata({params}:{params:{slug:string}}):Metadata{
  const post=BLOG_POSTS.find(p=>p.slug===params.slug);
  if(!post)return{};
  return{
    title:post.title+" | TechnoExcel Blog",
    description:post.excerpt,
    alternates:{canonical:`https://technoexcel.in/blog/${params.slug}`},
  };
}

export default function BlogPostPage({params}:{params:{slug:string}}){
  const post=BLOG_POSTS.find(p=>p.slug===params.slug);
  if(!post)notFound();

  const content=ARTICLE_DATA[post!.slug];
  const related=BLOG_POSTS.filter(p=>p.slug!==post!.slug&&p.cat===post!.cat).slice(0,2);

  return(
    <>
      {/* Hero */}
      <section id="te-bh" style={{background:BG,padding:"100px 52px 52px",position:"relative"}}>
        <style>{`#te-bh{padding:100px 52px 52px} @media(max-width:768px){#te-bh{padding:80px 20px 40px!important}}`}</style>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none"}}/>
        <div style={{maxWidth:860,margin:"0 auto",position:"relative",zIndex:1}}>
          <nav style={{display:"flex",alignItems:"center",gap:8,fontFamily:MONO,fontSize:11,color:"rgba(255,255,255,.50)",marginBottom:24,flexWrap:"wrap"}}>
            <a href="/" style={{color:"rgba(255,255,255,.50)",textDecoration:"none"}}>TechnoExcel</a>
            <span style={{color:"rgba(255,255,255,.25)"}}>/</span>
            <a href="/blog" style={{color:"rgba(255,255,255,.50)",textDecoration:"none"}}>Blog</a>
            <span style={{color:"rgba(255,255,255,.25)"}}>/</span>
            <span style={{color:"#fff"}}>{post!.title.slice(0,42)}…</span>
          </nav>
          <span style={{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:20,background:"rgba(238,35,84,.18)",color:RED,display:"inline-block",marginBottom:18}}>{post!.cat}</span>
          <h1 style={{fontFamily:SANS,fontWeight:800,fontSize:"clamp(24px,4vw,50px)",lineHeight:1.02,letterSpacing:"-0.04em",color:"#fff",marginBottom:18}}>{post!.title}</h1>
          <div style={{display:"flex",gap:16,fontFamily:MONO,fontSize:11,color:"rgba(255,255,255,.52)",flexWrap:"wrap"}}>
            <span>{post!.date}</span><span>·</span><span>{post!.read} read</span><span>·</span><span>Updated for 2026</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section id="te-bb" style={{background:"#fff",padding:"60px 52px"}}>
        <style>{`
          #te-bb .body-inner{max-width:860px;margin:0 auto}
          #te-bb .art h2{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:clamp(18px,2.5vw,24px);color:#13293C;letter-spacing:-0.3px;margin-bottom:14px;margin-top:44px;line-height:1.2}
          #te-bb .art p{font-family:'Plus Jakarta Sans',sans-serif;font-size:16px;color:rgba(19,41,60,0.72);line-height:1.92;margin-bottom:0}
          #te-bb .cta-box{background:${CREAM};border-radius:18px;padding:32px;margin:44px 0}
          #te-bb .cta-btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
          #te-bb .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
          @media(max-width:768px){
            #te-bb{padding:40px 20px!important}
            #te-bb .related-grid{grid-template-columns:1fr!important}
            #te-bb .cta-btns{flex-direction:column}
            #te-bb .cta-btns a{justify-content:center;text-align:center}
          }
        `}</style>
        <div className="body-inner">
          {/* Lead */}
          <p style={{fontFamily:SANS,fontSize:19,color:"rgba(19,41,60,.75)",lineHeight:1.9,marginBottom:40,fontWeight:300,borderLeft:`4px solid ${RED}`,paddingLeft:22}}>
            {post!.excerpt}
          </p>

          {/* Article body */}
          <div className="art">
            {content ? content.sections.map((s,i)=>(
              <div key={i}><h2>{s.h}</h2><p>{s.body}</p></div>
            )):(
              <div>
                <h2>Why this matters in 2026</h2>
                <p>In 2026, the expectation from analysts and business teams is faster decision-making, cleaner data handling and repeatable processes. The skills and systems covered in this article are relevant precisely because they are applied to actual workflows rather than textbook examples.</p>
                <h2>What to take away</h2>
                <p>By the end of this guide the goal is simple: you should be clearer on what the topic means in practice, where it is useful, and whether a structured course or an implementation discussion is the right next step for you.</p>
              </div>
            )}
          </div>

          {/* Course CTA */}
          <div className="cta-box">
            <div style={{fontFamily:MONO,fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:"rgba(19,41,60,.50)",marginBottom:12}}>Want to master this in a live session?</div>
            <p style={{fontFamily:SANS,fontSize:16,color:"rgba(19,41,60,.70)",lineHeight:1.8,marginBottom:0}}>
              This topic is covered in the{" "}
              <a href={`/courses/${content?.relatedSlug||"courses"}`} style={{color:RED,fontWeight:700,textDecoration:"none"}}>
                {content?.relatedCourse||"Excel and Power BI"} course
              </a>.
              {" "}Sessions are live, practical and taught with real business data — a natural next step if this article matches what you are working on.
            </p>
            <div className="cta-btns">
              <a href={`/courses/${content?.relatedSlug||"courses"}`} style={{display:"inline-flex",alignItems:"center",background:RED,color:"#fff",fontFamily:SANS,fontWeight:700,fontSize:14,padding:"13px 24px",borderRadius:10,textDecoration:"none"}}>View Course →</a>
              <a href={WA.general} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",background:"transparent",color:"rgba(19,41,60,.65)",fontFamily:SANS,fontWeight:600,fontSize:14,padding:"12px 20px",borderRadius:10,border:"1px solid rgba(19,41,60,.14)",textDecoration:"none"}}>Ask on WhatsApp</a>
            </div>
          </div>

          {/* Related articles */}
          {related.length>0&&(
            <div style={{marginTop:12}}>
              <div style={{fontFamily:MONO,fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(19,41,60,.48)",marginBottom:16}}>Related articles</div>
              <div className="related-grid">
                {related.map(r=>(
                  <a key={r.slug} href={`/blog/${r.slug}`} style={{display:"block",padding:"18px 20px",background:CREAM,borderRadius:12,border:"1px solid rgba(19,41,60,.08)",textDecoration:"none"}}>
                    <div style={{fontFamily:SANS,fontWeight:700,fontSize:14,color:INK,lineHeight:1.4,marginBottom:6}}>{r.title}</div>
                    <div style={{fontFamily:MONO,fontSize:10,color:"rgba(19,41,60,.48)"}}>{r.date} · {r.read}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{marginTop:44,paddingTop:24,borderTop:"1px solid rgba(19,41,60,.08)"}}>
            <a href="/blog" style={{fontFamily:SANS,fontSize:14,fontWeight:600,color:"rgba(19,41,60,.55)",textDecoration:"none"}}>← Back to all articles</a>
          </div>
        </div>
      </section>
    </>
  );
}
