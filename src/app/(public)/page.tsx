import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

// Keep the site's existing title, description, social images, and business schema.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
