"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeedbackSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-4 md:p-6 xl:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl font-semibold">Feedback</h1>
      <div className="w-full gap-4">
        <Card className="w-full h-full text-center md:text-left">
          <CardHeader>
            <CardTitle>Help Us Serve You Better</CardTitle>
            <CardDescription>
              We greatly value your feedback! It plays a vital role in our
              ongoing efforts to enhance our services. Whether you have
              suggestions, compliments, or areas where we can improve, we want
              to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/feedback">
              <Button>Share Feedback</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
