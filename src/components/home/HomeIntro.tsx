"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionValue } from "framer-motion";
import { ArrowRight, Award, Leaf, Package, Users } from "lucide-react";
import HomeReveal from "./HomeReveal";
import hero from "../../../public/images/hero-bg.png";
import garden from "../../../public/images/garden.png";
import styles from "./intro.module.css";

const trustBadges = [
  { icon: Package, label: "Retail Supply" },
  { icon: Users, label: "Wholesale" },
  { icon: Award, label: "Bulk Orders" },
];

// Fixed samples preserve the recorded drift and timing ranges without hydration randomness.
const leaves = [
  { duration: 22, delay: 0, scale: 0.7, fromX: "18%", toX: "63%" },
  { duration: 19, delay: 4, scale: 0.9, fromX: "76%", toX: "24%" },
  { duration: 20, delay: 1, scale: 0.6, fromX: "25%", toX: "82%" },
  { duration: 24, delay: 2, scale: 0.8, fromX: "65%", toX: "34%" },
  { duration: 18, delay: 3, scale: 0.65, fromX: "38%", toX: "70%" },
  { duration: 21, delay: 4.5, scale: 0.95, fromX: "81%", toX: "22%" },
  { duration: 23, delay: 1.5, scale: 0.55, fromX: "12%", toX: "53%" },
  { duration: 17, delay: 3.5, scale: 0.75, fromX: "90%", toX: "45%" },
];

type HomeIntroProps = {
  motionEnabled: boolean;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
  gardenY: MotionValue<string>;
};

export default function HomeIntro({ motionEnabled, heroY, heroOpacity, gardenY }: HomeIntroProps) {
  return (
    <div className={styles.intro} data-motion={motionEnabled ? "on" : "off"}>
      <section className={styles.hero} aria-labelledby="home-title">
        <motion.div className={styles.heroBackdrop} style={{ y: motionEnabled ? heroY : 0, opacity: motionEnabled ? heroOpacity : 1 }}>
          <Image src={hero} alt="Premium dark tea leaves" fill preload sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroTone} aria-hidden="true" />
          <div className={styles.heroShade} aria-hidden="true" />
        </motion.div>
        <div className={styles.floatingLeaves} aria-hidden="true">
          {leaves.map((leaf, index) => (
            <motion.span
              key={index}
              className={styles.floatingLeaf}
              initial={{ y: -100, x: leaf.fromX, opacity: 0, rotate: 0, scale: leaf.scale }}
              animate={motionEnabled ? { y: "100vh", x: leaf.toX, opacity: [0, 0.4, 0], rotate: 360 } : { opacity: 0 }}
              transition={motionEnabled ? { duration: leaf.duration, delay: leaf.delay, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            >
              <Leaf size={24} />
            </motion.span>
          ))}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.brandNames}>
            <span><Leaf size={12} aria-hidden="true" /> Shree Krishna Traders <Leaf size={12} aria-hidden="true" /></span>{" "}
            <span><Leaf size={12} aria-hidden="true" /> Daga Tea Traders <Leaf size={12} aria-hidden="true" /></span>
          </div>
          <h1 id="home-title">Premium Tea<br /><em>for Every Cup</em></h1>
          <p className={styles.heroDescription}>
            Discover the finest selection of loose and packet tea from Rajasthan&apos;s most trusted tea artisans.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products" className={styles.collectionButton}>
              <span>Explore Collection</span><ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a href="#wholesale" className={styles.partnerButton}>Partner With Us</a>
          </div>
        </div>
      </section>

      <motion.div
        className={styles.trustBar}
        initial={motionEnabled ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: motionEnabled ? 1 : 0, duration: motionEnabled ? 0.8 : 0 }}
      >
        <div className={styles.trustContent}>
          <p>Trusted Excellence</p>
          <ul aria-label="Supply options">
            {trustBadges.map((badge) => (
              <li key={badge.label}><badge.icon size={20} aria-hidden="true" /><span>{badge.label}</span></li>
            ))}
          </ul>
        </div>
      </motion.div>

      <section id="about" className={styles.heritage} aria-labelledby="heritage-title">
        <div className={styles.heritageContainer}>
          <div className={styles.heritageGrid}>
            <HomeReveal enabled={motionEnabled} margin="-100px" className={styles.heritageCopy}>
              <span className={styles.eyebrow}>Our Heritage</span>
              <h2 id="heritage-title">Tradition<br /><em>Meets</em><br />Excellence.</h2>
              <div className={styles.heritageText}>
                <p>At <strong>Shree Krishna Traders</strong>, we have dedicated years to curating the finest quality tea under our premium brand, <strong>Daga Tea</strong>. Rooted in the vibrant heart of Bikaner, Rajasthan, our passion is steeped in every leaf.</p>
                <p>Our unwavering commitment to quality has established us as a trusted partner for retailers and wholesalers alike. Every batch is a testament to our rigorous selection process, ensuring that only the richest aromas and most authentic tastes reach your cup.</p>
              </div>
              <div className={styles.storyAction}>
                <Link href="/about" className={styles.storyLink}>Read Our Full Story <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </HomeReveal>

            <div className={styles.heritageVisual}>
              <HomeReveal enabled={motionEnabled} x={40} y={0} scale={0.95} duration={1} margin="-100px" className={styles.gardenFrame}>
                <motion.div className={styles.gardenImage} style={{ y: motionEnabled ? gardenY : 0 }}>
                  <Image src={garden} alt="Lush tea plantation" fill sizes="(max-width: 1023px) 100vw, (max-width: 1600px) 48vw, 744px" />
                </motion.div>
                <div className={styles.gardenTone} aria-hidden="true" />
              </HomeReveal>
              <HomeReveal enabled={motionEnabled} delay={0.4} className={styles.masteryCard}>
                <strong>25+</strong>
                <span>Years of<br />Mastery</span>
              </HomeReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
