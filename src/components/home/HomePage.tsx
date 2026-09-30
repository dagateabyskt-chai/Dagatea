"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ToastContainer, Bounce } from "react-toastify";
import { MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Leaf, Shield, TrendingUp } from "lucide-react";
import WholesaleSection from "@/components/all/WholesaleSection";
import { collectionFont as homeFont } from "@/components/products/fonts";
import HomeReveal from "./HomeReveal";
import HomeIntro from "./HomeIntro";
import styles from "./home.module.css";
import cup1 from "../../../public/images/cup1.png";

const features = [
  { icon: Shield, title: "Quality Assurance", description: "Every batch is meticulously tested for purity, aroma, and freshness before it reaches your cup." },
  { icon: TrendingUp, title: "Competitive Pricing", description: "We offer the best market rates for wholesale and bulk orders without compromising on quality." },
  { icon: Package, title: "Bulk Availability", description: "Ensuring a consistent and reliable supply chain for your business needs, year-round." },
];

const products = [
  { name: "Daga Premium CTC", type: "Strong & Bold", description: "Perfect for chai lovers who prefer a robust, full-bodied flavor", highlight: "Best Seller" },
  { name: "Daga Assam Gold", type: "Rich & Malty", description: "Authentic Assam tea with a distinctive malty character", highlight: "Premium" },
  { name: "Daga Special Blend", type: "Balanced & Smooth", description: "A carefully crafted blend for the perfect cup every time", highlight: "Signature" },
];

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionPreference() {
  return false;
}

export default function HomePage() {
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, getServerMotionPreference);
  const motionEnabled = !reducedMotion;
  const { resolvedTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const gardenY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const quoteY = useTransform(scrollYProgress, [0.3, 0.7], ["-20%", "20%"]);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <main id="home-content" tabIndex={-1} className={`${styles.page} ${homeFont.className}`} data-motion={motionEnabled ? "on" : "off"}>
        <a className={styles.skipLink} href="#home-content">Skip to main content</a>
        <noscript><style>{`#home-content [style*="opacity"] { opacity: 1 !important; transform: none !important; }`}</style></noscript>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={resolvedTheme === "dark" ? "dark" : "light"} transition={Bounce} />

        <HomeIntro motionEnabled={motionEnabled} heroY={heroY} heroOpacity={heroOpacity} gardenY={gardenY} />

        <section className={styles.quoteSection} aria-labelledby="tea-quote">
          <motion.div className={styles.quoteImage} style={{ y: motionEnabled ? quoteY : 0 }}>
            <Image src={cup1} alt="Tea pouring aesthetic" fill sizes="100vw" />
          </motion.div>
          <div className={styles.quoteShade} aria-hidden="true" />
          <HomeReveal enabled={motionEnabled} y={0} scale={0.9} duration={1} className={styles.quoteCopy}>
            <Leaf size={48} strokeWidth={1.4} aria-hidden="true" />
            <h2 id="tea-quote">&quot;A simple cup of tea is far from a simple matter.&quot;</h2>
          </HomeReveal>
        </section>

        <section className={styles.difference} aria-labelledby="difference-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <HomeReveal enabled={motionEnabled}>
                <span className={styles.eyebrow}>The Daga Difference</span>
                <h2 id="difference-title">Your Trusted<br /><em>Tea Partner.</em></h2>
              </HomeReveal>
              <HomeReveal enabled={motionEnabled} y={0} delay={0.3}>
                <p>We combine generations of traditional expertise with modern quality standards to deliver exceptional value to our partners.</p>
              </HomeReveal>
            </div>
            <div className={styles.featureGrid}>
              {features.map((feature, index) => (
                <HomeReveal enabled={motionEnabled} key={feature.title} delay={index * 0.2} duration={0.6} margin="-50px">
                  <article className={styles.featureCard}>
                    <div className={styles.featureTop}>
                      <span className={styles.featureIcon}><feature.icon size={27} strokeWidth={1.5} aria-hidden="true" /></span>
                      <span className={styles.cardNumber} aria-hidden="true">0{index + 1}</span>
                    </div>
                    <h3>{feature.title}</h3><p>{feature.description}</p>
                  </article>
                </HomeReveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.container}>
            <HomeReveal enabled={motionEnabled} className={styles.collectionHeading}>
              <span className={styles.eyebrow}>Our Premium Brand</span>
              <h2 id="collection-title">Daga Tea Collection</h2>
              <p>Experience the finest tea varieties under our premium Daga Tea brand</p>
            </HomeReveal>
            <div className={styles.productGrid}>
              {products.map((product, index) => (
                <HomeReveal enabled={motionEnabled} key={product.name} delay={index * 0.15} duration={0.6}>
                  <article className={styles.productCard} data-blend={index}>
                    <div className={styles.productTop}>
                      <span className={styles.productBadge}>{product.highlight}</span>
                      <span className={styles.productLeaf}><Leaf size={46} strokeWidth={1.2} aria-hidden="true" /></span>
                    </div>
                    <h3>{product.name}</h3>
                    <p className={styles.productType}>{product.type}</p>
                    <p className={styles.productDescription}>{product.description}</p>
                    <Link href="/products" className={styles.productLink} aria-label={`View Details: ${product.name}`}>View Details <ArrowRight size={18} aria-hidden="true" /></Link>
                  </article>
                </HomeReveal>
              ))}
            </div>
          </div>
        </section>
        <WholesaleSection motionEnabled={motionEnabled} />
      </main>
    </MotionConfig>
  );
}
