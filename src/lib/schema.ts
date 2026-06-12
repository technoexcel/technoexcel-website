// ============================================================
// FILE: /lib/schema.ts
// TechnoExcel — Complete JSON-LD Schema Library
// ============================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
  "@id": "https://www.technoexcel.in/#organization",
  "name": "TechnoExcel",
  "url": "https://www.technoexcel.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.technoexcel.in/images/logo-light.png",
    "width": 300,
    "height": 80
  },
  "description": "TechnoExcel is India's leading corporate training company specialising in Advanced Excel, Power BI, Microsoft Copilot, Data Analytics and Power Platform. 500+ corporate programs. 10,000+ professionals trained.",
  "foundingDate": "2015",
  "founder": {
    "@type": "Person",
    "name": "Ravi Saini",
    "jobTitle": "Founder & Principal Trainer"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bowenpally",
    "addressLocality": "Secunderabad",
    "addressRegion": "Telangana",
    "postalCode": "500011",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4648,
    "longitude": 78.4982
  },
  "telephone": "+918801912200",
  "email": "connect@technoexcel.in",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918801912200",
    "contactType": "customer service",
    "areaServed": ["IN", "SG", "AE", "SA", "GB", "US"],
    "availableLanguage": ["English", "Hindi", "Telugu"]
  },
  "areaServed": [
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "729",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Advanced Excel Training",
    "Power BI Training",
    "Microsoft Copilot Training",
    "Data Analytics Training",
    "SQL Training",
    "Power Platform Training",
    "Corporate Training India"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.technoexcel.in/#website",
  "url": "https://www.technoexcel.in",
  "name": "TechnoExcel",
  "description": "Corporate training in Advanced Excel, Power BI, Microsoft Copilot and Data Analytics across India, Southeast Asia and the Middle East.",
  "publisher": {
    "@id": "https://www.technoexcel.in/#organization"
  }
};

export const advancedExcelCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Advanced Excel Training — Corporate & Individual",
  "description": "Master Advanced Excel including XLOOKUP, Power Query, Pivot Tables, dynamic dashboards, VBA basics and AI-powered Excel tools. Training built around your organisation's actual data. Available online and on-site across India.",
  "url": "https://www.technoexcel.in/courses/advanced-excel-training-hyderabad",
  "provider": { "@id": "https://www.technoexcel.in/#organization" },
  "instructor": {
    "@type": "Person",
    "name": "Ravi Saini",
    "jobTitle": "Founder & Principal Trainer, TechnoExcel"
  },
  "courseMode": ["onsite", "online", "blended"],
  "educationalLevel": "Intermediate to Advanced",
  "inLanguage": "en-IN",
  "teaches": [
    "Advanced Excel Formulas",
    "XLOOKUP and Dynamic Arrays",
    "Power Query",
    "Pivot Tables and Pivot Charts",
    "Dashboard Design in Excel",
    "VBA Macros Basics",
    "AI-powered Excel tools"
  ],
  "occupationalCredentialAwarded": "TechnoExcel Certificate of Completion — Advanced Excel",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "729",
    "bestRating": "5"
  }
};

export const powerBICourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Power BI Training — Corporate & Individual",
  "description": "Learn Power BI from scratch to advanced DAX, data modelling, and enterprise dashboard delivery. Corporate programs built around client KPIs and actual data.",
  "url": "https://www.technoexcel.in/courses/power-bi-training-hyderabad",
  "provider": { "@id": "https://www.technoexcel.in/#organization" },
  "instructor": {
    "@type": "Person",
    "name": "Ravi Saini",
    "jobTitle": "Founder & Principal Trainer, TechnoExcel"
  },
  "courseMode": ["onsite", "online", "blended"],
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "en-IN",
  "teaches": [
    "Power BI Desktop",
    "Power BI Service",
    "DAX Formulas",
    "Data Modelling",
    "Power Query in Power BI",
    "Dashboard Design",
    "Report Publishing and Sharing"
  ],
  "occupationalCredentialAwarded": "TechnoExcel Certificate of Completion — Power BI"
};

export const copilotCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Microsoft Copilot Training — M365 AI Productivity for Corporate Teams",
  "description": "Corporate training on Microsoft 365 Copilot covering Copilot in Excel, Word, PowerPoint, Outlook, Teams and Copilot Studio. Practical prompt engineering for business workflows.",
  "url": "https://www.technoexcel.in/courses/microsoft-copilot-training",
  "provider": { "@id": "https://www.technoexcel.in/#organization" },
  "instructor": {
    "@type": "Person",
    "name": "Ravi Saini",
    "jobTitle": "Founder & Principal Trainer, TechnoExcel"
  },
  "courseMode": ["onsite", "online", "blended"],
  "educationalLevel": "Beginner to Intermediate",
  "inLanguage": "en-IN",
  "teaches": [
    "Microsoft Copilot in Excel",
    "Microsoft Copilot in Word",
    "Microsoft Copilot in PowerPoint",
    "Microsoft Copilot in Outlook",
    "Microsoft Copilot in Teams",
    "Prompt Engineering for Business",
    "Copilot Studio Basics"
  ],
  "occupationalCredentialAwarded": "TechnoExcel Certificate — Microsoft Copilot for Business"
};

export const dataAnalyticsCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Data Analytics Training — Excel, SQL, Power BI",
  "description": "Comprehensive Data Analytics training covering Excel, SQL, Power BI and Python fundamentals. Practical, project-based learning with real business datasets.",
  "url": "https://www.technoexcel.in/courses/data-analytics-training-hyderabad",
  "provider": { "@id": "https://www.technoexcel.in/#organization" },
  "courseMode": ["onsite", "online", "blended"],
  "educationalLevel": "Beginner to Advanced",
  "teaches": [
    "Data Analysis with Excel",
    "SQL for Business Analytics",
    "Power BI Dashboards",
    "Python for Data Analytics",
    "Data Visualisation",
    "Business Reporting"
  ],
  "occupationalCredentialAwarded": "TechnoExcel Certificate — Data Analytics"
};

export const corporateFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What corporate training programs does TechnoExcel offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TechnoExcel offers corporate training in Advanced Excel, Power BI, Microsoft Copilot (M365 AI), Data Analytics, SQL, Power Automate, Power Apps and SharePoint. All programs are customised around the client organisation's actual data and workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Does TechnoExcel provide on-site corporate training across India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TechnoExcel delivers on-site corporate training across Hyderabad, Bangalore, Mumbai, Pune, Chennai and Delhi NCR. Virtual and hybrid delivery is available pan-India and internationally across Singapore, UAE, Saudi Arabia, UK and USA."
      }
    },
    {
      "@type": "Question",
      "name": "Which companies has TechnoExcel trained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TechnoExcel has delivered 500+ corporate programs for companies including Tata Power, Amara Raja, Gabriel India, Genpact, General Mills, Uber, Star India, Times Group, Coromandel, Nagarjuna Group, UPL, JK Paper, Aragen, Signode and Kirby."
      }
    },
    {
      "@type": "Question",
      "name": "How is TechnoExcel's corporate training different from generic training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every TechnoExcel corporate program is built around the client's actual data files, KPIs and workflows — not generic slides. Training includes a pre-workshop needs assessment, 30-day post-training support, and completion certificates for all participants."
      }
    },
    {
      "@type": "Question",
      "name": "Can TechnoExcel deliver Microsoft Copilot training for our enterprise team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TechnoExcel delivers dedicated Microsoft 365 Copilot training covering Copilot in Excel, Word, PowerPoint, Outlook, Teams and Copilot Studio. Programs are designed for organisations deploying M365 Copilot licences."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum team size for a corporate training program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TechnoExcel works with teams of any size — from focused groups of 8-10 to company-wide rollouts of 200+ employees. Programs are structured by department and role to ensure relevance for every participant."
      }
    },
    {
      "@type": "Question",
      "name": "Does TechnoExcel provide training for manufacturing companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Manufacturing is TechnoExcel's strongest sector. Clients include Tata Power, Amara Raja, Gabriel India, Kirby Building Systems and Signode. Training covers Excel automation for production data, Power BI dashboards for OEE and supply chain, and SQL for MES reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical corporate training program take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Programs typically run 1-2 days per level for Excel, 2-3 days for Power BI, and 1 day for Microsoft Copilot essentials. Multi-level and department-wide rollouts are scheduled across multiple sessions to minimise productivity impact."
      }
    }
  ]
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ravi Saini",
  "jobTitle": "Founder & Principal Trainer",
  "worksFor": { "@id": "https://www.technoexcel.in/#organization" },
  "url": "https://www.technoexcel.in/about",
  "description": "Ravi Saini is the founder of TechnoExcel, having trained 10,000+ professionals and delivered 500+ corporate training programs across manufacturing, FMCG, pharma, IT and financial services in India, Southeast Asia and the Middle East.",
  "knowsAbout": [
    "Microsoft Excel",
    "Power BI",
    "Microsoft Copilot",
    "Data Analytics",
    "Corporate Training",
    "Power Platform",
    "SQL"
  ]
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
