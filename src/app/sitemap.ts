import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },

    {
      url: `${baseUrl}/brewguide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,

      images: [
        `${baseUrl}/images/daga-tea-premium.webp`,
        `${baseUrl}/images/black-gold.webp`,
        `${baseUrl}/images/daga-tea-red.webp`,
        `${baseUrl}/images/daga-tea-green.webp`,
        `${baseUrl}/images/mtt-green-tea.webp`,
      ]
    }
  ];
}