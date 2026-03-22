import type { Metadata } from "next";
import ContactPage from "./ContactPage";

const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const metadata: Metadata = {
  title: {
    default:
      "Contact Daga Tea | Bulk Assam CTC Tea Supplier in Bikaner, Rajasthan",
    template: "%s | Daga Tea",
  },

  description:
    "Contact Daga Tea Traders & Shree Krishna Traders for premium Assam CTC tea in Bikaner, Rajasthan. Call or enquire for wholesale, retail, and bulk tea supply across India at best prices.",

  keywords: [
    "contact Daga Tea",
    "tea supplier contact Rajasthan",
    "bulk tea supplier Bikaner",
    "Assam CTC tea contact India",
    "tea wholesaler phone number",
    "tea distributor Rajasthan contact",
    "buy tea in bulk India",
  ],

  authors: [{ name: "Daga Tea Traders" }],
  creator: "Daga Tea",
  publisher: "Daga Tea Traders",

  metadataBase: new URL(baseUrl),

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔥 GEO + LOCAL SEO BOOST
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Bikaner, Rajasthan, India",
    "geo.position": "28.0229;73.3119",
    ICBM: "28.0229, 73.3119",
  },

  openGraph: {
    title:
      "Contact Daga Tea | Assam CTC Tea Supplier in Rajasthan (Wholesale & Bulk)",
    description:
      "Get in touch with Daga Tea Traders for high-quality Assam CTC tea. Serving wholesalers and retailers across Rajasthan and India.",
    url: `${baseUrl}/contact`,
    siteName: "Daga Tea",
    images: [
      {
        url: `${baseUrl}/images/daga-premium-tea.jpeg`,
        width: 1200,
        height: 630,
        alt: "Daga Tea - Contact Assam Tea Supplier Rajasthan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Daga Tea | Bulk Tea Supplier Rajasthan",
    description:
      "Reach out to Daga Tea Traders for wholesale Assam CTC tea supply in Bikaner and across India.",
    images: [`${baseUrl}/images/daga-premium-tea.webp`],
  },

  alternates: {
    canonical: `${baseUrl}/contact`,
  },

  // 🔥 ADVANCED: CONTACT INTENT SIGNAL
  category: "business",
  classification: "Tea Supplier, Tea Wholesaler, Tea Distributor",

  // 🔥 APPLE / MOBILE SEO
  appleWebApp: {
    capable: true,
    title: "Daga Tea Contact",
    statusBarStyle: "default",
  },

  // 🔥 FORMAT DETECTION (AUTO LINK PHONE/EMAIL)
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Daga Tea",
  url: `${baseUrl}/contact`,

  mainEntity: {
    "@type": "LocalBusiness",
    name: "Daga Tea Traders",
    alternateName: "Shree Krishna Traders",
    telephone: "+91-8005714740",

    // 🔥 CONTACT POINT (MAIN PART)
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

    // 🔥 ADDRESS (MATCH YOUR BUSINESS)
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pugal Rd, Bangla Nagar",
      addressLocality: "Bikaner",
      addressRegion: "Rajasthan",
      postalCode: "334004",
      addressCountry: "IN"
    },

    // 🔥 GEO (LOCAL SEO BOOST)
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.0229,
      longitude: 73.3119
    },

    // 🔥 OPTIONAL BUT POWERFUL
    email: "dagakrishna70@gmail.com",
  }
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <ContactPage />
    </>
  )
}