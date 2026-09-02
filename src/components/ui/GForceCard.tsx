import { useRef, useState } from "react";

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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
