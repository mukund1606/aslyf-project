"use client";
import { motion } from "framer-motion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Home } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  "video-url": z.string().url(),
});
export default function VideoToText() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "video-url": "",
    },
  });
  async function onSubmit(values) {
    setData("");
    setIsLoading(true);
    const res = await axios.post("/api/video-to-text", values);
    const data = await res.data;
    setData(data);
    setIsLoading(false);
  }
  return (
    <div className="relative w-full h-screen p-2 md:p-4 lg:p-6 xl:p-8">
      <Link className="absolute z-50 top-6 right-6" href="/">
        <Button variants="icon" className="p-3">
          <Home />
        </Button>
      </Link>
      <motion.img
        src="/herosection.png"
        alt="HeroImage"
        className="absolute inset-0 object-cover object-top w-full h-screen -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-start w-full p-4 py-16 space-y-6 overflow-y-auto bg-black bg-opacity-25 scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-thin h-4/5 xl:px-16 lg:px-12 md:px-8 backdrop-blur-sm rounded-xl ">
          <h1 className="text-4xl font-semibold text-center lg:text-6xl md:text-5xl">
            Video To Text
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="video-url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Youtube Video Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the youtube url of the video you want to convert to text"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Convert</Button>
            </form>
          </Form>
          <div className="flex flex-col items-start justify-center pt-8 mt-16 space-y-4">
            <h1 className="w-full text-2xl font-bold text-left">
              {isLoading ? "Loading..." : data?.title}
            </h1>
            <p className="w-full text-left">{data?.transcript}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
