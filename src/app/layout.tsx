import React from "react";
import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ui/ChatBot";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default:"TechnoExcel — Data Solutions & Corporate Training | Hyderabad", template:"%s | TechnoExcel" },
  description:"Data solutions, automation and corporate training. Power BI, Excel, analytics. 10,000+ trained. 4.8 Google rated. Hyderabad, India.",
  metadataBase: new URL("https://technoexcel.in"),
  robots: { index:true, follow:true },
};

const GLOBAL_CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;color:#13293C;background:#fff;overflow-x:hidden}
  ::selection{background:#EE2354;color:#fff}
  ::-webkit-scrollbar{width:3px}
  ::-webkit-scrollbar-thumb{background:#EE2354;border-radius:2px}
  a{text-decoration:none}
  img{max-width:100%}
  @keyframes wabounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  @media(max-width:768px){.desktop-only{display:none!important}.mobile-menu-btn{display:flex!important}}
  @media(min-width:769px){.mobile-menu-btn{display:none!important}}
  footer a{color:rgba(255,255,255,0.72)!important;transition:color .2s}
  footer a:hover{color:#EE2354!important}
  @media(max-width:1024px){
    section{padding-left:40px!important;padding-right:40px!important}
    section.te-logo-strip{padding-left:0!important;padding-right:0!important}
    [style*="grid-template-columns: repeat(3"]{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:768px){
    section{padding-left:20px!important;padding-right:20px!important}
    section.te-logo-strip{padding-left:0!important;padding-right:0!important}
    [style*="grid-template-columns"]{grid-template-columns:1fr!important}
    footer [style*="grid-template-columns"]{grid-template-columns:1fr 1fr!important;gap:24px!important}
    #te-industries [style*="grid-template-columns"]{grid-template-columns:1fr 1fr!important;gap:10px!important}
    [style*="gap: 60"],[style*="gap:60"]{gap:24px!important}
    [style*="gap: 48"],[style*="gap:48"]{gap:20px!important}
    [style*="maxWidth: 1280"],[style*="maxWidth:1280"],
    [style*="maxWidth: 1180"],[style*="maxWidth:1180"],
    [style*="maxWidth: 860"],[style*="maxWidth:860"]{max-width:100%!important;width:100%!important}
    #te-stmt,#te-audience,#te-cases,#te-industries,#te-courses-section,
    #te-corp,#te-testimonials,#te-cta{padding-top:52px!important;padding-bottom:52px!important}
    #te-page-hero{padding-top:80px!important;padding-bottom:36px!important}
  }
  @media(max-width:420px){section{padding-left:16px!important;padding-right:16px!important}}
`;

const WA_SVG = `<svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0d1f2d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SVSLB5KZDY"
        strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SVSLB5KZDY');
        `}
      </Script>
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <a href="https://api.whatsapp.com/send?phone=918801912200&text=Hi%20TechnoExcel%20team%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more."
          target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          style={{ position:"fixed",bottom:24,right:24,zIndex:999,width:54,height:54,background:"#25D366",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(37,211,102,.4)",animation:"wabounce 2.8s ease-in-out infinite" }}
          dangerouslySetInnerHTML={{ __html: WA_SVG }} />
      </body>
    </html>
  );
}
