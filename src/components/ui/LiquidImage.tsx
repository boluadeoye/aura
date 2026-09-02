import { motion } from "framer-motion";
import { liquidReveal } from "../../utils/motion";

export const LiquidImage = ({ src, alt, className = "" }: any) => {
  return (
    <div className={`overflow-hidden rounded-2xl relative ${className}`}>
      <motion.img
        variants={liquidReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
