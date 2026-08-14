export const SITE = {
  name:         "TechnoExcel",
  url:          "https://technoexcel.in",
  phone:        "+918801912200",
  phoneDisplay: "+91 88019 12200",
  email:        "connect@technoexcel.in",
  addressFull:   "Plot No 5, First Floor, Above Indian Bank, Market Road, Trimulgherry, Secunderabad — 500015",
  mapUrl:        "https://www.google.com/maps/place/TechnoExcel+%7C+Data+Analytics+-+simplified!/@17.4710531,78.5049122,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9b1ee91bd45d:0xe7c8b6c4541726da!8m2!3d17.4710531!4d78.5074871!16s%2Fg%2F11fjmc40tw?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
  embedUrl:     "https://maps.google.com/maps?q=17.4710531,78.5074871&z=17&output=embed",
};

const B = "https://api.whatsapp.com/send?phone=918801912200&text=";
export const WA = {
  strategy:  B + encodeURIComponent("Hi TechnoExcel team, I'd like to book a strategy call."),
  corporate: B + encodeURIComponent("Hi TechnoExcel team, I'd like to discuss a corporate training program."),
  general:   B + encodeURIComponent("Hi TechnoExcel team, I found your website and would like to know more."),
};

export const NAV_LINKS = [
  { label:"Solutions", href:"/solutions" },
  { label:"Work",      href:"/work"      },
  { label:"Courses",   href:"/courses"   },
  { label:"Corporate", href:"/corporate" },
  { label:"About",     href:"/about"     },
  { label:"Blog",      href:"/blog"      },
  { label:"Contact",   href:"/contact"   },
];

export const COURSES = [
  { title:"Advanced Excel with AI",      slug:"advanced-excel-training",            badge:"Star",  duration:"4 weeks",  desc:"Formulas, Power Query, VBA, Dynamic Arrays and AI tools." },
  { title:"Power BI Mastery",            slug:"power-bi-training-hyderabad",         badge:"Popular",         duration:"~1 month",  desc:"DAX, data modeling, RLS. Trainer who built 50+ live dashboards." },
  { title:"Data Analytics",             slug:"data-analytics-training-hyderabad",   badge:"Flagship",         duration:"4 months",  desc:"Python + SQL + Power BI + statistics. Full analyst toolkit." },
  { title:"Data Science",               slug:"data-science-course",                  badge:"", duration:"6 months",  desc:"Python, ML, deep learning, NLP. Career-switching program." },
  { title:"AI & Prompt Engineering",    slug:"ai-prompt-engineering-business",       badge:"",     duration:"2-3 weeks", desc:"ChatGPT, Claude, Microsoft Copilot for Excel and Teams." },
  { title:"VBA & Macros for Excel",     slug:"vba-macros-excel",                     badge:"",         duration:"~1 month",  desc:"Automate reports, build tools, eliminate manual work." },
  { title:"Python for Data Analytics",  slug:"python-data-analytics",                badge:"",         duration:"6-8 weeks", desc:"Pandas, NumPy, Matplotlib. Go beyond Excel." },
  { title:"SQL for Business",           slug:"sql-for-business",                     badge:"",         duration:"3-4 weeks", desc:"Query databases, stop waiting for IT. MySQL & SQL Server." },
  { title:"Power Platform (No-Code)",   slug:"power-platform-training",              badge:"",         duration:"~1 month",  desc:"Power Apps + Power Automate. Build apps without coding." },
  { title:"Data Storytelling",          slug:"data-storytelling-course",             badge:"",         duration:"2-3 weeks", desc:"Chart design, dashboard UX, executive presentations." },
];

// Readability-safe color helpers
export const C = {
  bg:    "#0d1f2d",
  ink:   "#13293C",
  red:   "#EE2354",
  cream: "#F4F2EE",
  sans:  "var(--font-jakarta,'Plus Jakarta Sans',sans-serif)",
  mono:  "var(--font-mono,'Space Mono',monospace)",
  serif: "var(--font-serif,'Instrument Serif',Georgia,serif)",
};

// Readable opacity helpers — WCAG AA minimum enforced
// Dark bg: body=.82 secondary=.68 tertiary=.55 label=.50 ghost=.40
export const tw = (o: number) => `rgba(255,255,255,${o})`;
// Light bg: body=.85 secondary=.70 tertiary=.58 label=.55
export const td = (o: number) => `rgba(19,41,60,${o})`;
