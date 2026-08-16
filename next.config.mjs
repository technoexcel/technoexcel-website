/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Your existing settings ───────────────────────────────────────────────
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 86400 },
  compress: true,
  poweredByHeader: false,

  // ── SEO Redirects — maps every old WordPress URL to the new React route ──
  async redirects() {
    return [

      // 1. TRAILING-SLASH NORMALISATION
      //    WordPress served ALL URLs with a trailing slash. Next.js does not.
      //    This single rule fixes every page at once.
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },

      // 2. BLOG  (/blogs/ → /blog/)
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        // Preserves every blog post URL
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },

      // 3. SERVICES → SOLUTIONS
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },

      // 4. COURSE LISTING PAGES
      {
        source: "/excel-courses",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/personalized-courses",
        destination: "/courses",
        permanent: true,
      },

      // 5. INDIVIDUAL COURSE PAGES (old flat slug → /courses/[slug])
      {
        source: "/courses/advanced-excel-training-hyderabad",
        destination: "/courses/advanced-excel-training",
        permanent: true,
      },
      {
        source: "/advanced-excel-training",
        destination: "/courses/advanced-excel-training",
        permanent: true,
      },
      {
        source: "/basic-excel-training",
        destination: "/courses/advanced-excel-training",
        permanent: true,
      },
      {
        source: "/courses/power-bi-training-hyderabad",
        destination: "/courses/power-bi-training",
        permanent: true,
      },
      {
        source: "/data-analytics",
        destination: "/courses/data-analytics-training",
        permanent: true,
      },
      {
        source: "/courses/data-analytics-training-hyderabad",
        destination: "/courses/data-analytics-training",
        permanent: true,
      },
      {
        source: "/dashboard-training",
        destination: "/courses/power-bi-training",
        permanent: true,
      },
      {
        source: "/power-bi-dashboard-training",
        destination: "/courses/power-bi-training",
        permanent: true,
      },
      {
        source: "/hr-dashboard-training",
        destination: "/courses/power-bi-training",
        permanent: true,
      },
      {
        source: "/data-science-course",
        destination: "/courses/data-science-course",
        permanent: true,
      },
      {
        source: "/power-bi-training",
        destination: "/courses/power-bi-training",
        permanent: true,
      },
      {
        source: "/vba-macros",
        destination: "/courses/vba-macros-excel",
        permanent: true,
      },
      {
        source: "/python-for-data-analytics",
        destination: "/courses/python-data-analytics",
        permanent: true,
      },
      {
        source: "/sql-for-business",
        destination: "/courses/sql-for-business",
        permanent: true,
      },

      // 6. CORPORATE PAGES
      //    The wildcard rule covers ALL city variants:
      //    /advanced-corporate-excel-training-in-bangalore
      //    /advanced-corporate-excel-training-in-baddi
      //    /advanced-corporate-excel-training-in-hosur  ... etc.
      {
        source: "/excel-corporate-training",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/corporate-training",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/advanced-corporate-excel-training-in-:city",
        destination: "/corporate",
        permanent: true,
      },

      // 7. WORDPRESS TAXONOMY ARCHIVES
      //    category-sitemap.xml, post_tag-sitemap.xml, course_category-sitemap.xml
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/course_category/:slug*",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/course-category/:slug*",
        destination: "/courses",
        permanent: true,
      },

      // 8. WORDPRESS PAGINATION, AUTHOR, FEED & ADMIN JUNK
      {
        source: "/page/:num",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/:type*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/:path*",
        destination: "/",
        permanent: true,
      },
      {
        // Old WordPress sitemap XMLs redirect to new sitemap
        source: "/:slug-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
