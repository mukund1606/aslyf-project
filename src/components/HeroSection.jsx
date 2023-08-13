"use client";
import AnimatedTest from "./AnimatedText";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <motion.img
        src="/herosection.png"
        alt="HeroImage"
        className="absolute inset-0 object-cover object-top w-full h-screen -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      />
      <div>
        <h1 className="text-4xl font-semibold text-center xl:text-8xl lg:text-6xl md:text-5xl">
          <AnimatedTest text="Transform ideas into" animationTime={1} />
          <br />
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text">
            <AnimatedTest text="ASL" animationTime={0.2} delay={1} />
          </span>
          <br />
          <AnimatedTest text="effortlessly" animationTime={0.3} delay={1.2} />
        </h1>
        <div className="relative flex justify-center">
          <motion.a
            href="#content"
            className="absolute flex flex-col items-center justify-center p-2 mt-6 text-black transition-all duration-200 ease-linear scale-150 bg-white rounded-full hover:mt-12 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <MoveDown />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
