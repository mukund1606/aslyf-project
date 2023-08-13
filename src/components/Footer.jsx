"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <motion.div
        className="grid items-center gap-6 p-4 py-8 text-center md:text-left md:grid-cols-2 md:py-12 xl:py-16 md:p-6 xl:p-8 bg-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center h-full">
          <div>
            <h1 className="text-4xl font-bold">ASLYF</h1>
            <p>Transform ideas into ASL effortlessly</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 w-fit">
            <h1 className="font-bold">Useful Link</h1>
            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
              <Link
                className="px-4 py-2 text-center hover:underline md:text-left"
                href="/"
              >
                Home
              </Link>
              <Link
                className="px-4 py-2 text-center hover:underline md:text-left"
                href="/text-to-asl"
              >
                Text to ASL
              </Link>
              <Link
                className="px-4 py-2 text-center hover:underline md:text-left"
                href="/video-to-text"
              >
                Video to Text
              </Link>
              <Link
                className="px-4 py-2 text-center hover:underline md:text-left"
                href="/text-to-audio"
              >
                Text to Audio
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center gap-2">
        Made with ❤️ by <span className="font-semibold">404: Found</span>
      </div>
    </>
  );
}
