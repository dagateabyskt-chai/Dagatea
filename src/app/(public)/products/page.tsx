import type { Metadata } from "next";
import ProductsPage from "./ProductsPage";
import { cardData } from "@/data/productInfo";

const baseUrl = process.env.NEXT_PUBLIC_HOST;

export const metadata: Metadata = {
  title: {
    default:
      "Buy Assam CTC Tea Online | Wholesale Tea Supplier in Rajasthan - Daga Tea",
    template: "%s | Daga Tea",
  },

  description:
    "Explore Daga Tea`s premium range of Assam CTC tea including Daga Tea Red, Premium, Green Tea, and loose tea. Trusted wholesale tea supplier in Bikaner, Rajasthan for bulk buyers, retailers, and distributors across India.",

  keywords: [
    "buy Assam CTC tea online",
    "tea wholesaler Rajasthan",
    "bulk tea supplier India",
    "loose tea supplier Bikaner",
    "Daga Tea products",
    "Daga Tea Red",
    "premium CTC tea India",
    "tea distributor Rajasthan",
    "black tea wholesale India",
    "green tea supplier India",
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

  // 🔥 LOCAL SEO BOOST
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Bikaner, Rajasthan, India",
    "geo.position": "28.0229;73.3119",
    ICBM: "28.0229, 73.3119",
  },

  // 🔥 OPEN GRAPH (PRODUCT DISCOVERY)
  openGraph: {
    title:
      "Daga Tea Products | Assam CTC Tea Supplier for Wholesale & Bulk Buyers",
    description:
      "Browse premium Assam CTC tea products from Daga Tea including loose and packaged tea for retailers and distributors across India.",
    url: `${baseUrl}/products`,
    siteName: "Daga Tea",
    images: [
      {
        url: `${baseUrl}/images/daga-products-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Daga Tea Products - Assam CTC Tea Supplier",
      },
    ],
    locale: "en_IN",
    type: "website", // ✅ FIXED (not "products")
  },

  // 🔥 TWITTER SEO
  twitter: {
    card: "summary_large_image",
    title: "Buy Assam Tea Online | Daga Tea Products",
    description:
      "Shop premium Assam CTC tea from Daga Tea. Bulk supply available for wholesalers and retailers across India.",
    images: [`${baseUrl}/images/daga-products-banner.jpg`],
  },

  alternates: {
    canonical: `${baseUrl}/products`,
  },

  // 🔥 CATEGORY + CLASSIFICATION
  category: "ecommerce",
  classification:
    "Tea Products, Assam CTC Tea, Wholesale Tea, Bulk Tea Supplier India",

  // 🔥 MOBILE SEO
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const generateProductSchemas = (products: typeof cardData) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",

    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,

      item: {
        "@type": "Product",

        "@id": `${baseUrl}/products#${product.Product
          .toLowerCase()
          .replace(/\s+/g, "-")}`,

        name: product.Product,
        description: product.Description,
        category: product.Category,

        image: [
          `${baseUrl}/images/${product.Product
            .toLowerCase()
            .replace(/\s+/g, "-")}.webp`
        ],

        brand: {
          "@type": "Brand",
          name: "Daga Tea"
        },

        // 🔥 Convert Specifications → Structured format
        additionalProperty: Object.entries(product.Specification).map(
          ([key, value]) => ({
            "@type": "PropertyValue",
            name: key,
            value: value
          })
        ),

        // 🔥 Use FIRST price as base price
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.Size[0].replace("₹", ""),
          availability: "https://schema.org/InStock",
          url: `${baseUrl}/products/${product.Product
            .toLowerCase()
            .replace(/\s+/g, "-")}`
        }
      }
    }))
  };
};

const schema = generateProductSchemas(cardData);

export default function Products() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ProductsPage />
    </>
  );
}