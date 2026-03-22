import type { Metadata } from "next";
import BrewingGuidePage from "./BrewGuidePage";

const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const metadata: Metadata = {
  title: {
    default:
      "How to Brew Perfect Tea | Assam CTC Tea Brewing Guide by Daga Tea",
    template: "%s | Daga Tea",
  },

  description:
    "Learn how to brew the perfect cup of Assam CTC tea with Daga Tea`s expert guide. Discover ideal water temperature, brewing time, milk ratios, and tips for strong, flavorful tea at home or for business use.",

  keywords: [
    "how to brew tea",
    "Assam CTC tea brewing guide",
    "perfect chai recipe India",
    "how to make strong tea",
    "tea brewing time and temperature",
    "milk tea preparation",
    "best way to brew loose tea",
    "chai making tips",
    "tea blog India",
    "Daga Tea brewing guide"
  ],

  authors: [{ name: "Daga Tea Traders" }],
  creator: "Daga Tea",
  publisher: "Daga Tea Traders",

  metadataBase: new URL(`${baseUrl}`),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔥 BLOG / ARTICLE SEO (VERY IMPORTANT)
  openGraph: {
    title:
      "How to Brew Perfect Assam Tea | Expert Brewing Guide by Daga Tea",
    description:
      "Step-by-step tea brewing guide for making perfect Assam CTC chai. Learn pro tips used by tea experts and suppliers.",
    url: `${baseUrl}/brewguide`,
    siteName: "Daga Tea",
    images: [
      {
        url: `${baseUrl}/images/brewing-guide.jpg`,
        width: 1200,
        height: 630,
        alt: "How to Brew Perfect Assam CTC Tea - Daga Tea Guide",
      },
    ],
    locale: "en_IN",
    type: "article", // ✅ IMPORTANT CHANGE
    publishedTime: "2026-01-01T00:00:00.000Z", // update if needed
    authors: ["Daga Tea Traders"],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Brew Perfect Tea | Daga Tea Guide",
    description:
      "Master the art of brewing Assam CTC tea with expert tips on time, temperature, and taste.",
    images: [`${baseUrl}/gif/milk-tea.gif`],
  },

  alternates: {
    canonical: `${baseUrl}/brewguide`,
  },

  // 🔥 CONTENT CLASSIFICATION (HELPS SEO CONTEXT)
  category: "food",
  classification:
    "Tea Brewing Guide, Chai Recipe, Assam Tea Preparation, Beverage Guide",

  // 🔥 MOBILE OPTIMIZATION
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // 🔥 EXTRA SEO SIGNALS
  other: {
    "article:section": "Tea Brewing",
    "article:tag":
      "Tea, Assam Tea, CTC Tea, Chai, Brewing Guide, Tea Tips",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",

  "@id": `${baseUrl}/brewguide#article`,

  headline: "How to Brew Perfect Assam CTC Tea",

  description:
    "Learn how to brew the perfect cup of Assam CTC tea with the right temperature, time, and techniques used by tea experts.",

  image: [
    `${baseUrl}/gif/milk-tea.gif`
  ],

  author: {
    "@type": "Organization",
    name: "Daga Tea"
  },

  publisher: {
    "@type": "Organization",
    name: "Daga Tea",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.png`
    }
  },

  datePublished: "2026-03-21",
  dateModified: "2026-03-21",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${baseUrl}/brewguide`
  }
};

export default function Brewguide() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    <BrewingGuidePage />
    </>
  )
}