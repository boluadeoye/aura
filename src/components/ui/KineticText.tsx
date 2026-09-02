import React from "react";
import { motion } from "framer-motion";
import { letterRevealContainer, letterRevealItem } from "../../utils/motion";

interface KineticTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export default function KineticText({ text, className = "", tag: Tag = "h1", delay = 0 }: KineticTextProps) {
  if (!text) return null;

  // Split into atomic words to guarantee zero syllable breaks
  const words = text.split(" ");

  return (
    <Tag className={className} style={{ perspective: "1200px" }}>
      <motion.span
        variants={letterRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={delay}
        style={{ display: "inline-block" }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.26em]"
            style={{ overflow: "hidden", verticalAlign: "bottom" }}
          >
            {Array.from(word).map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                }}
              >
                <motion.span
                  variants={letterRevealItem}
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
