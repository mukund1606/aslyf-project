"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <motion.div
      id="content"
      className="flex-col items-center gap-6 p-4 f lex md:p-6 xl:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="w-full h-full text-center md:text-left">
        <CardHeader>
          <CardTitle>The Silent Challenge</CardTitle>
          <CardDescription>
            Bridging Communication Gaps with ASL
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span>
            American Sign Language (ASL) overcomes communication barriers for
            the deaf community. With millions of users globally, ASL empowers
            deaf individuals to express and connect. However, limited knowledge
            and accessibility persist. Embracing ASL fosters inclusivity and
            breaks communication bounds.
          </span>
          <div className="container flex flex-row items-center justify-between">
            <motion.div
              whileInView={{ x: [-100, -50, 1], opacity: [0, 0, 1] }}
              transition={{ duration: 1 }}
              className="flex flex-row items-center justify-end w-1/2 gap-3 py-0 emoticons-left md:gap-10 lg:gap-20"
            >
              <Image
                height={200}
                width={100}
                className="w-[45px] md:w-[60px] lg:w-[90px]"
                src="/assets/Point_up.png"
                alt="emoticon"
              />
              <Image
                height={200}
                width={100}
                className="w-[40px] md:w-[55px] lg:w-[80px]"
                src="/assets/Victory.png"
                alt="emoticon"
              />
              <Image
                height={200}
                width={100}
                className=" w-[80px] md:w-[100px] lg:w-[120px]"
                src="/assets/heart-left.png"
                alt="emoticon"
              />
            </motion.div>
            <motion.div
              whileInView={{ x: [100, 50, -1], opacity: [0, 0, 1] }}
              transition={{ duration: 1 }}
              className="flex flex-row items-center justify-start w-1/2 gap-3 emoticons-left md:gap-10 lg:gap-20"
            >
              <Image
                height={200}
                width={100}
                className="w-[80px] md:w-[100px] lg:w-[120px]"
                src="/assets/heart-right.png"
                alt="emoticon"
              />
              <Image
                height={200}
                width={100}
                className="w-[55px] md:w-[75px] lg:w-[110px]"
                src="/assets/i_love_you.png"
                alt="emoticon"
              />
              <Image
                height={200}
                width={100}
                className="w-[45px] md:w-[60px] lg:w-[90px]"
                src="/assets/ok.png"
                alt="emoticon"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
