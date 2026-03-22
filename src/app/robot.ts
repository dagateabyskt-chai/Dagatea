import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

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

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}