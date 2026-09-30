"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useSyncExternalStore } from "react";
import { Eye, EyeOff, Leaf } from "lucide-react";
import styles from "./brewguide.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(motionQuery).matches;
}

function getServerMotionPreference() {
  return false;
}

type BrewingIllustrationProps = {
  id: string;
  image: StaticImageData;
  alt: string;
  label: string;
};

export default function BrewingIllustration({ id, image, alt, label }: BrewingIllustrationProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [showAnimation, setShowAnimation] = useState<boolean | null>(null);
  const isVisible = showAnimation ?? !reducedMotion;

  return (
    <figure
      className={styles.illustration}
      data-motion={showAnimation === null ? "auto" : "manual"}
      data-playing={isVisible}
    >
      <div id={id} className={styles.imageViewport}>
        {isVisible && (
          <Image
            src={image}
            alt={alt}
            className={styles.brewingImage}
            sizes="(max-width: 599px) 90vw, (max-width: 1023px) 520px, (max-width: 1500px) 34vw, 460px"
            unoptimized
          />
        )}
        <div className={styles.animationPlaceholder} aria-hidden={isVisible}>
          <Leaf size={30} aria-hidden="true" />
          <p>{label} illustration</p>
          <span>Animation hidden</span>
        </div>
      </div>
      <figcaption className={styles.imageFooter}>
        <span className={styles.imageLabel}>{label}</span>
        <button
          type="button"
          className={styles.animationToggle}
          onClick={() => setShowAnimation(!isVisible)}
          aria-controls={id}
          aria-label={`${isVisible ? "Hide" : "Show"} animation: ${label}`}
        >
          {isVisible ? <EyeOff size={15} aria-hidden="true" /> : <Eye size={15} aria-hidden="true" />}
          {isVisible ? "Hide animation" : "Show animation"}
        </button>
      </figcaption>
    </figure>
  );
}
