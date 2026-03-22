import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/all/Header";
import { ThemeProvider } from "@/context/theme-provider";
import Footer from "@/components/all/Footer";

const poppins = Poppins(
  {
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
  }
);

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const metadata: Metadata = {
  title: {
    default:
      "Daga Tea | Assam CTC Tea Supplier, Wholesaler & Distributor in Rajasthan",
    template: "%s | Daga Tea",
  },

  description:
    "Daga Tea Traders & Shree Krishna Traders are leading suppliers of premium Assam CTC tea in Bikaner, Rajasthan. We offer high-quality loose and packet tea for wholesalers, retailers, and bulk buyers across India at competitive prices.",

  keywords: [
    "Daga Tea",
    "Assam CTC tea supplier India",
    "tea wholesaler Rajasthan",
    "bulk tea supplier India",
    "loose tea supplier Bikaner",
    "tea distributor Rajasthan",
    "buy tea in bulk India",
    "premium Assam tea supplier",
    "CTC tea wholesale India",
  ],

  authors: [{ name: "Daga Tea Traders" }],
  creator: "Daga Tea",
  publisher: "Daga Tea Traders",

  metadataBase: new URL(baseUrl),

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

  // 🔥 LOCAL SEO BOOST (VERY IMPORTANT)
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Bikaner, Rajasthan, India",
    "geo.position": "28.0229;73.3119",
    ICBM: "28.0229, 73.3119",
  },

  // 🔥 OPEN GRAPH (SOCIAL + BRANDING)
  openGraph: {
    title:
      "Daga Tea | Premium Assam CTC Tea Supplier in Rajasthan (Wholesale & Bulk)",
    description:
      "Trusted tea supplier offering high-quality Assam CTC tea for wholesalers, retailers, and bulk buyers across India.",
    url: baseUrl,
    siteName: "Daga Tea",
    images: [
      {
        url: `${baseUrl}/images/daga-premium-tea.webp`,
        width: 1200,
        height: 630,
        alt: "Daga Tea - Assam CTC Tea Supplier Rajasthan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // 🔥 TWITTER SEO
  twitter: {
    card: "summary_large_image",
    title: "Daga Tea | Assam Tea Supplier India",
    description:
      "Premium Assam CTC tea supplier for wholesale and retail across Rajasthan and India.",
    images: [`${baseUrl}/images/daga-premium-tea.webp`],
  },

  alternates: {
    canonical: baseUrl,
  },

  // 🔥 CATEGORY + BRAND SIGNAL
  category: "business",
  classification:
    "Tea Supplier, Assam CTC Tea, Wholesale Tea, Bulk Tea Distributor India",

  // 🔥 MOBILE CONVERSION BOOST
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // 🔥 APP EXPERIENCE
  appleWebApp: {
    capable: true,
    title: "Daga Tea",
    statusBarStyle: "default",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#business`,

  name: "Daga Tea Traders",
  alternateName: "Shree Krishna Traders",

  image: `${baseUrl}/images/logo.png`,
  url: baseUrl,

  telephone: "+91-8005714740",

  // 🔥 LOCATION (VERY IMPORTANT)
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pugal Rd, Bangla Nagar",
    addressLocality: "Bikaner",
    addressRegion: "Rajasthan",
    postalCode: "334004",
    addressCountry: "IN"
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.0229,
    longitude: 73.3119
  },

  // 🔥 BUSINESS INFO
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "09:00",
      closes: "20:00"
    }
  ],

  priceRange: "₹50 ₹500",

  // 🔥 BRAND CONNECTION
  brand: {
    "@type": "Brand",
    name: "Daga Tea"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased bg-[#f6eee0] dark:bg-[#69481d] min-h-screen max-w-480 mx-auto `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}