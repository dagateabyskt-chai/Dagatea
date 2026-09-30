import Image from "next/image";
import { cardData } from "@/data/productInfo";
import styles from "@/components/products/collection.module.css";

export type ProductFilter = "All Varieties" | "Assam CTC Tea" | "Green Tea" | "Kadak Blends";

const presentation: Record<string, { tone: string; liquor: string }> = {
  "Daga Tea Premium": { tone: "premium", liquor: "#98330e" },
  "Black Gold": { tone: "black", liquor: "#541e0e" },
  "Daga Tea Red": { tone: "red", liquor: "#a43220" },
  "Daga Tea Blue": { tone: "blue", liquor: "#d8840b" },
  "MTT Green Tea": { tone: "green", liquor: "#83a78b" },
};

export function filterProducts(filter: ProductFilter) {
  return cardData.filter((product) => {
    if (filter === "All Varieties") return true;
    if (filter === "Kadak Blends") return product.Specification["Ideal For"] === "Kadak chai lovers";
    return product.Category === filter;
  });
}

export default function Product({ filter = "All Varieties" }: { filter?: ProductFilter }) {
  return (
    <div className={styles.grid}>
      {filterProducts(filter).map((product) => {
        const specification = product.Specification;
        const appearance = presentation[product.Product];
        const productId = product.Product.toLowerCase().replace(/\s+/g, "-");

        return (
          <article
            key={product.Product}
            id={productId}
            aria-labelledby={`${productId}-title`}
            className={styles.card}
            data-tone={appearance?.tone}
          >
            <div className={styles.cardIntro}>
              <div className={styles.cardCopy}>
                <span className={styles.category}>{product.Category}</span>
                <span className={styles.badge}>{specification["Ideal For"]}</span>
                <h2 id={`${productId}-title`}>{product.Product}</h2>
                <p className={styles.description}>{product.Description}</p>
              </div>
              <div className={styles.productImage}>
                <Image
                  src={product.img}
                  alt={`${product.Product} - ${product.Category}`}
                  sizes="(max-width: 479px) 104px, (max-width: 767px) 144px, (max-width: 1199px) 128px, 160px"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.cardDetails}>
              <h3 className={styles.packHeading}>Available weight packs</h3>
              <ul className={styles.packs} aria-label={`${product.Product} pack prices`}>
                {product.Price.map((weight, index) => (
                  <li key={weight}>
                    <span>{weight}</span>
                    <strong>{product.Size[index]}</strong>
                  </li>
                ))}
              </ul>

              <dl className={styles.specifications}>
                <div className={styles.specRow}>
                  <dt>Liquor Hue</dt>
                  <dd className={styles.liquor}>
                    <span className={styles.swatch} style={{ backgroundColor: appearance?.liquor }} aria-hidden="true" />
                    {specification.Liquor}
                  </dd>
                </div>
                <div className={styles.specRow}>
                  <dt>Aroma &amp; Taste</dt>
                  <dd>{specification.Aroma} <span aria-hidden="true">•</span> {specification.Taste}</dd>
                </div>
                <div className={styles.specRow}>
                  <dt>Leaf Grade &amp; Origin</dt>
                  <dd>{specification["Leaf Grade"]} <span aria-hidden="true">•</span> {specification.Origin}</dd>
                </div>
                <div className={styles.specRow}>
                  <dt>Caffeine / Serving</dt>
                  <dd>{specification.Caffeine} <span aria-hidden="true">•</span> {specification["Best Served"]}</dd>
                </div>
                <div className={styles.specRow}>
                  <dt>Ideal For</dt>
                  <dd className={styles.idealFor}>{specification["Ideal For"]}</dd>
                </div>
              </dl>
            </div>
          </article>
        );
      })}
    </div>
  );
}
