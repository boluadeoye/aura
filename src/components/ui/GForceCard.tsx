import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GForceCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
}

export default function GForceCard({ children, className = "", tiltIntensity = 12 }: GForceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -tiltIntensity;
    const rotateY = ((x - width / 2) / (width / 2)) * tiltIntensity;

    setTilt({ rotateX, rotateY, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: tilt.scale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px", willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
