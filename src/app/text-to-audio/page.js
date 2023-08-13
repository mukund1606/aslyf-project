"use client";
import { motion } from "framer-motion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Home } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  text: z.string().min(10).max(5000),
});
export default function TextToAudio() {
  const [speech, setSpeech] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });
  function onSubmit(values) {
    speech.text = values.text;
    speech.volume = 1;
    speech.rate = 0.6;
    setIsSubmitted(true);
  }

  function playAudio() {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
  useEffect(() => {
    setSpeech(new SpeechSynthesisUtterance());
    // Cancel speech synthesis on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
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
        <div className="flex flex-col items-center justify-start w-full p-4 py-16 space-y-6 bg-black bg-opacity-25 h-4/5 xl:px-16 lg:px-12 md:px-8 backdrop-blur-sm rounded-xl">
          <h1 className="text-4xl font-semibold text-center lg:text-6xl md:text-5xl">
            Text to Audio
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text to Convert</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter text to convert to speech"
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
          {isSubmitted && (
            <div className="mt-16">
              <Button onClick={playAudio}>Play Audio</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
