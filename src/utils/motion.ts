import type { Variants } from "framer-motion";

// ─── 1. AERO-PHYSICAL SPRING CONSTANTS ──────────────────────────────────
export const PHYSICS = {
  heavyBillet: {
    type: "spring" as const,
    stiffness: 75,
    damping: 18,
    mass: 1.8,
  },
  machSnap: {
    type: "spring" as const,
    stiffness: 450,
    damping: 14,
    mass: 0.45,
  },
  liquidAir: {
    type: "spring" as const,
    stiffness: 25,
    damping: 28,
    mass: 2.2,
  },
};

// ─── 2. 3D CHARACTER-LEVEL KINETIC TYPOGRAPHY ───────────────────────────
export const letterRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: customDelay * 0.06,
    },
  }),
};

export const letterRevealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -95,
    z: -120,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 13,
      mass: 0.5,
    },
  },
};

// ─── 3. 3D SECTION AERODYNAMIC FOLD ─────────────────────────────────────
export const aeroSectionFold: Variants = {
  hidden: {
    opacity: 0,
    y: 140,
    rotateX: 22,
    scale: 0.94,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 85,
      damping: 18,
      mass: 1.6,
    },
  },
};

// ─── 4. HIGH-AMPLITUDE CARD STAGGER ─────────────────────────────────────
export const aeroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const aeroCardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.88,
    rotateZ: 2,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 14,
      mass: 0.8,
    },
  },
};

// ─── 5. MECHANICAL SQUASH & STRETCH ─────────────────────────────────────
export const squashHover = {
  scaleX: 1.06,
  scaleY: 0.94,
  y: -3,
  transition: { type: "spring" as const, stiffness: 450, damping: 12 },
};

export const squashTap = {
  scaleX: 0.92,
  scaleY: 1.12,
  y: 2,
  transition: { type: "spring" as const, stiffness: 600, damping: 10 },
};
