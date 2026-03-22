import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const metadata: Metadata = {
  title: {
    default: "About Daga Tea | Assam CTC Tea Supplier & Wholesaler in Rajasthan",
    template: "%s | Daga Tea"
  },

  description:
    "Daga Tea Traders and Shree Krishna Traders are leading suppliers of premium Assam CTC tea in Rajasthan. We provide high-quality loose and packet tea for wholesalers, retailers, and bulk buyers across India.",

  // Keywords (not very important but okay to include)
  keywords: [
    "Daga Tea",
    "Assam CTC tea supplier",
    "tea wholesaler Rajasthan",
    "bulk tea supplier India",
    "loose tea supplier",
    "Shree Krishna Traders",
    "tea distributor India",
    "chai trader",
    "Assam tea",
  ],

  // Author & branding
  authors: [{ name: "Daga Tea Traders" }],
  creator: "Daga Tea",
  publisher: "Daga Tea Traders",

  // SEO robots control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (for WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "About Daga Tea | Premium Assam Tea Supplier",
    description:
      "Learn about Daga Tea Traders & Shree Krishna Traders - trusted suppliers of Assam CTC tea in Rajasthan for wholesale and retail markets.",
    url: `${baseUrl}/about`,
    siteName: "Daga Tea",
    images: [
      {
        url: `${baseUrl}/images/daga-premium-tea.webp`, // replace with real image
        width: 1200,
        height: 630,
        alt: "Daga Tea - Assam CTC Tea Supplier",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "About Daga Tea | Assam Tea Supplier",
    description:
      "Trusted tea supplier in Rajasthan offering premium Assam CTC tea for wholesale and retail.",
    images: [`${baseUrl}/images/daga-premium-tea.webp`],
  },

  // Canonical URL (VERY IMPORTANT)
  alternates: {
    canonical: `${baseUrl}/about`,
  },

  // Category
  category: "business",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",

  "@id": `${baseUrl}/about#about`,

  name: "About Daga Tea",
  url: `${baseUrl}/about`,

  description:
    "Daga Tea Traders and Shree Krishna Traders are leading suppliers of premium Assam CTC tea in Bikaner, Rajasthan, serving wholesalers, retailers, and bulk buyers across India.",

  mainEntity: {
    "@type": "LocalBusiness",

    "@id": `${baseUrl}/#business`,

    name: "Daga Tea Traders",
    alternateName: "Shree Krishna Traders",

    url: `${baseUrl}`,

    image: `${baseUrl}/images/logo.png`,
    logo: `${baseUrl}/images/logo.png`,

    telephone: "+91-8005714740",
    email: "dagakrishna70@gmail.com",

    // 🔥 CONTACT POINT
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8005714740",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8005714740",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi"]
      }
    ],

    // 📍 ADDRESS
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pugal Rd, Bangla Nagar",
      addressLocality: "Bikaner",
      addressRegion: "Rajasthan",
      postalCode: "334004",
      addressCountry: "IN"
    },

    // 🌍 GEO
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.0229,
      longitude: 73.3119
    },

    // 🔥 BUSINESS INFO
    priceRange: "₹50 ₹500",

    // 🔥 BRAND
    brand: {
      "@type": "Brand",
      name: "Daga Tea"
    },
  }
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <AboutClient />
    </>
  )
}