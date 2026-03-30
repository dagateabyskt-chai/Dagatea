import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // 🔥 Block unnecessary paths (important)
        disallow: [
          "/api/",
          "/_next/",
          "/admin/", // if you add later
        ],
      },
    ],

    sitemap: "https://dagatea.in/sitemap.xml",
  };
}