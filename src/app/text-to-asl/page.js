"use client";
import { motion, AnimatePresence } from "framer-motion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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

const possibleCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const sleep = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

const formSchema = z.object({
  text: z.string().max(5000),
});
export default function TextToAudio() {
  const [data, setData] = useState("");
  const [imagesData, setImagesData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });
  async function onSubmit() {
    setIsSubmitted(true);
    setData(form.getValues().text.trim().toLowerCase());
    for (const i in data) {
      const letter = data[i];
      if (possibleCharacters.includes(letter)) {
        setImagesData([
          { link: `/asl-images/${letter}.jpeg`, description: letter },
        ]);
        await sleep(0.75);
        setImagesData([]);
        await sleep(0.4);
      } else if (letter === " ") {
        setImagesData([]);
        await sleep(1.5);
      }
    }
    setIsSubmitted(false);
  }

  return (
    <>
      {possibleCharacters.map((letter) => (
        <img
          key={letter}
          src={`/asl-images/${letter}.jpeg`}
          className="hidden"
        />
      ))}
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
          <div className="flex flex-col items-center justify-start w-full h-full p-4 py-16 space-y-6 bg-black bg-opacity-25 xl:px-16 lg:px-12 md:px-8 backdrop-blur-sm rounded-xl">
            <h1 className="text-4xl font-semibold text-center lg:text-6xl md:text-5xl">
              Text to ASL
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
                          placeholder="Enter text to convert to ASL"
                          className="resize-none"
                          {...field}
                          disabled={isSubmitted}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button onClick={onSubmit} disabled={isSubmitted}>
                  Convert
                </Button>
              </form>
            </Form>
            <div id="player" className="flex justify-center w-full gap-2 mt-16">
              {imagesData.map((image, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <AnimatePresence>
                    <motion.img
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      src={image.link}
                      height={128}
                      width={128}
                      className="object-cover w-40 rounded-md md:w-52 lg:w-64 xl:w-72 aspect-square"
                      alt={image.description}
                    />
                  </AnimatePresence>
                  <h1 className="p-4 text-3xl font-bold">
                    {image.description.toUpperCase()}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
