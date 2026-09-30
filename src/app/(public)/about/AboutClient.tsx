import Image from "next/image";
import { Award, BookOpen, CalendarDays, Eye, Users, Zap } from "lucide-react";
import { collectionFont as aboutFont } from "@/components/products/fonts";
import skt from "../../../../public/images/shree-krishna-traders.jpeg";
import styles from "./about.module.css";

export default function AboutClient() {
  const yearEstablish = 1999;
  const years = new Date().getFullYear() - yearEstablish;

  return (
    <main className={`${styles.page} ${aboutFont.className}`}>
      <section className={styles.heritageBand} aria-label="Our heritage">
        <p className={styles.heritageName}>Daga Tea Traders (Since 1999)</p>
        <p className={styles.heritageTrust}>
          Premium Quality • Strong Taste • {years} Years of Trust
        </p>
        <p className={styles.heritageLocation}>
          Serving from Nokha &amp; Bikaner and working towards delivering quality tea across India.
        </p>
      </section>

      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="about-title">
          <p className={styles.eyebrow}>Rajasthan&apos;s heritage tea merchant</p>
          <h1 id="about-title">About Daga Tea - Trusted Tea Trader in Rajasthan</h1>
          <p className={styles.heroDescription}>
            Premium Quality Tea with a Strong and Authentic Taste - Serving customers
            for over {years} years from Nokha and Bikaner.
          </p>
        </section>

        <section className={styles.story} aria-label="The Daga Tea story">
          <figure className={styles.photoFrame}>
            <div className={styles.photoMat}>
              <Image
                src={skt}
                alt="Business picture"
                sizes="(max-width: 767px) 85vw, (max-width: 1400px) 34vw, 440px"
                loading="eager"
              />
            </div>
            <figcaption>
              <span>Shree Krishna Traders • Bikaner</span>
              <span>Estd. {yearEstablish}</span>
            </figcaption>
          </figure>

          <div className={styles.storyCopy}>
            <span className={styles.traditionBadge}>
              <CalendarDays size={13} aria-hidden="true" />
              {years}+ Years of Tradition
            </span>
            <p className={styles.storyLead}>
              <strong>Daga Tea Traders</strong> is a trusted name in the tea industry
              with over <strong>{years} years of experience</strong> in delivering
              <strong> premium quality tea with a strong and rich taste</strong>.
              Our journey began with a simple vision — to provide high-quality raw
              tea that satisfies both everyday tea lovers and business partners in
              the tea trade.
            </p>
            <p>
              We proudly operate through two locations that help us serve customers
              efficiently across the region.
            </p>
            <div className={styles.hubs}>
              <h2>Operating hubs</h2>
              <ul className={styles.list}>
                <li><strong>Daga Tea Traders – Nokha</strong></li>
                <li><strong>Shree Krishna Traders – Bikaner</strong></li>
              </ul>
            </div>
            <p>
              Through these two centers, we serve a wide range of customers including
              individual buyers, retailers, wholesalers, and distributors.
            </p>
          </div>
        </section>

        <div className={styles.featureGrid}>
          <section className={styles.featureCard} aria-labelledby="expertise-title">
            <h2 id="expertise-title" className={styles.cardHeading}>
              <span className={styles.iconCircle}><BookOpen size={19} aria-hidden="true" /></span>
              Our Expertise
            </h2>
            <p>
              With more than two decades of experience in the tea business, we have
              developed deep knowledge in selecting and supplying high-grade raw tea
              leaves. Our focus has always been on maintaining:
            </p>
            <ul className={styles.list}>
              <li>Premium Quality</li>
              <li>Strong and Refreshing Taste</li>
              <li>Reliable Supply</li>
              <li>Trusted Business Relationships</li>
            </ul>
            <p className={styles.cardNote}>
              Every batch of tea we supply is carefully sourced to ensure our
              customers receive consistent quality and authentic flavor.
            </p>
          </section>

          <section className={styles.featureCard} aria-labelledby="customers-title">
            <h2 id="customers-title" className={styles.cardHeading}>
              <span className={styles.iconCircle}><Users size={19} aria-hidden="true" /></span>
              Who We Serve
            </h2>
            <p>We proudly supply tea to a wide network of customers including:</p>
            <ul className={styles.list}>
              <li>Retail Shop Owners</li>
              <li>Wholesalers</li>
              <li>Distributors</li>
              <li>Individual Customers</li>
            </ul>
            <p className={styles.cardNote}>
              Whether you are a small tea seller or a large distributor, we ensure
              you receive the best quality tea at competitive prices.
            </p>
          </section>
        </div>

        <div className={styles.purposeGrid}>
          <section className={styles.purposeCard} aria-labelledby="mission-title">
            <h2 id="mission-title" className={styles.cardHeading}>
              <span className={`${styles.iconCircle} ${styles.missionIcon}`}><Zap size={17} aria-hidden="true" /></span>
              Our Mission
            </h2>
            <p>
              Our mission is to continue delivering high-quality tea products with
              honesty, consistency, and dedication while expanding our network to
              serve customers across India.
            </p>
          </section>

          <section className={styles.purposeCard} aria-labelledby="vision-title">
            <h2 id="vision-title" className={styles.cardHeading}>
              <span className={styles.iconCircle}><Eye size={17} aria-hidden="true" /></span>
              Our Vision
            </h2>
            <p>
              We aim to grow Daga Tea Traders into a recognized tea supplier across
              India, known for premium quality, strong taste, and trustworthy
              service.
            </p>
          </section>
        </div>

        <section className={styles.commitment} aria-labelledby="quality-title">
          <p className={styles.commitmentEyebrow}>
            <Award size={16} aria-hidden="true" />
            Uncompromising standards
          </p>
          <h2 id="quality-title">Commitment to Quality</h2>
          <p className={styles.commitmentDescription}>
            At Daga Tea Traders, tea is not just a product — it is our passion. For
            the last <strong>{years} years</strong>, we have built our reputation by
            focusing on quality, trust, and long-term relationships with our
            customers.
          </p>
        </section>
      </div>
    </main>
  );
}
