"use client";
import { motion } from "framer-motion";
export default function AnimatedTest({ text, delay = 0, animationTime = 0.5 }) {
  const totalLength = text.length;
  const perLetterDelay = animationTime / totalLength;
  return (
    <>
      {text.split("").map((word, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: perLetterDelay,
              ease: "easeOut",
              delay: Number(delay) + index * perLetterDelay,
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}
