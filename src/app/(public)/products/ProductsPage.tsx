"use client";

import { ArrowRight, Check, Leaf, Package, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Product, { filterProducts, type ProductFilter } from "@/components/all/Product";
import { collectionFont } from "@/components/products/fonts";
import styles from "@/components/products/collection.module.css";

const filters: ProductFilter[] = ["All Varieties", "Assam CTC Tea", "Green Tea", "Kadak Blends"];

export default function ProductsPage() {
  const [filter, setFilter] = useState<ProductFilter>("All Varieties");
  const productCount = filterProducts(filter).length;

  return (
    <main className={`${styles.page} ${collectionFont.className}`}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="collection-title">
          <span className={styles.eyebrow}>
            <Leaf size={15} aria-hidden="true" />
            Assam tea · Loose &amp; packet varieties
          </span>
          <h1 id="collection-title">Our Tea Collection</h1>
          <p>Explore our premium selection of loose and packet tea varieties</p>

          <nav className={styles.filters} aria-label="Tea varieties">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                aria-controls="tea-collection"
                className={styles.filter}
              >
                {category}
              </button>
            ))}
            <a href="#wholesale-enquiries" className={styles.bulkFilter}>Wholesale &amp; Bulk</a>
          </nav>
        </section>

        <section id="tea-collection" aria-label="Tea collection">
          <p className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
            Showing {productCount} {productCount === 1 ? "tea" : "teas"}: {filter}.
          </p>
          <Product filter={filter} />
        </section>

        <section id="wholesale-enquiries" className={styles.wholesale} aria-labelledby="wholesale-title" tabIndex={-1}>
          <div className={styles.wholesaleCopy}>
            <span className={styles.wholesaleBadge}>
              <Package size={15} aria-hidden="true" />
              Wholesale &amp; bulk enquiries
            </span>
            <h2 id="wholesale-title">Looking for Loose Tea &amp; Personalized Packaging?</h2>
            <p>
              Ready to partner with Rajasthan&apos;s most trusted tea supplier? Fill out the form
              and our team will get back to you within 24 hours.
            </p>
            <ul className={styles.wholesaleFeatures}>
              {["Competitive wholesale pricing", "Flexible packaging options", "Quality assurance on every batch"].map((feature) => (
                <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>
              ))}
            </ul>
          </div>
          <div className={styles.wholesaleActions}>
            <a className={styles.phoneButton} href="tel:+918005714740">
              <Phone size={18} aria-hidden="true" />
              Commercial Desk: +91 80057 14740
            </a>
            <Link className={styles.enquiryButton} href="/#wholesale">
              Contact Us Now! <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
