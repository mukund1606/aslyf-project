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

export default function ContentSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-4 md:p-6 xl:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl font-semibold">Features</h1>
      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2">
        <Card className="w-full h-full text-center md:text-left">
          <CardHeader>
            <CardTitle>Text to ASL</CardTitle>
            <CardDescription>
              Easily convert text into a series of images or a video with hand
              signs depicting the input text. This is a great way to learn ASL
              or to communicate with someone who uses sign language.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/text-to-asl">
              <Button>Get Started</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full h-full text-center md:text-left">
          <CardHeader>
            <CardTitle>Video to Text</CardTitle>
            <CardDescription>
              Convert a video (without subtitles) into text. This is a great way
              to access information that is not available in a sign language
              format. You can also use this feature to transcribe videos for
              people who are deaf or hard of hearing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/video-to-text">
              <Button>Get Started</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full h-full text-center md:text-left">
          <CardHeader>
            <CardTitle>Text to Audio</CardTitle>
            <CardDescription>
              Convert text into audio. This is a great way to learn how to
              pronounce words in ASL or to communicate with someone who uses
              sign language.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/text-to-audio">
              <Button>Get Started</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full h-full text-center md:text-left">
          <CardHeader>
            <CardTitle>ASL to Text (Coming Soon..)</CardTitle>
            <CardDescription>
              Convert a live video of a person using ASL into text version. This
              is a great way to follow a conversation in sign language or to
              provide real-time translation for people who are deaf or hard of
              hearing.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </motion.div>
  );
}
