import type { Metadata } from "next";

export const metadata: Metadata = {
  description:"Data solutions, automation and corporate training. Power BI dashboards, Excel automation, data analytics. 10,000+ trained. 4.8★ Google rated.",
  metadataBase: new URL("https://technoexcel.in"),
  robots: { index:true, follow:true },
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
