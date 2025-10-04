"use client";

import { motion } from "motion/react";
import { Particles } from "../ui/particles";
import { HeroVideoDialog } from "../ui/hero-video-dialog";
import { Lobster_Two, Lora, Merriweather } from "next/font/google"; // Import Lora and Merriweather
import Link from "next/link";
const lora = Lora({ subsets: ["latin"], weight: ["700"] }); // Lora for headline, bold for impact
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const lobsterTwo = Lobster_Two({ subsets: ["latin"], weight: ["700"] });

export function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center rounded-4xl ">
      <Particles className="absolute inset-0 z-0" />
      <div className="absolute inset-y-0 left-0 h-full w-px  bg-neutral-800/80 rounded-2xl">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent " />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80 rounded-2xl">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-800/80 rounded-2xl">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1
          className={`relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-slate-300 ${lora.className}`}
        >
          {"When the Sun whispers Earth listens 🌞"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className={`relative z-10 mx-auto max-w-xl py-8 text-center text-lg font-normal text-neutral-200 ${lobsterTwo.className}`}
        >
          Sunflare is a playful digital storybook that brings the science of
          solar storms, flares, and auroras to life for kids. Discover how space
          weather affects farmers, pilots, astronauts, and even you!
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/Stories">
            <button
              className={`w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 ${merriweather.className}`}
            >
              Start the Adventure
            </button>
          </Link>

          <Link href="/aurora-cast">
            <button
              className={`w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 ${merriweather.className}`}
            >
              Meet the Characters
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-left"
            videoSrc="https://www.youtube.com/embed/RoCRONr_Enk"
            thumbnailSrc="/videothumbnail.jpg.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block mt-10"
            animationStyle="from-left"
            videoSrc="https://www.youtube.com/embed/RoCRONr_Enk"
            thumbnailSrc="/videothumbnail.jpg.png"
            thumbnailAlt="Hero Video"
          />
        </motion.div>
      </div>
    </div>
  );
}
