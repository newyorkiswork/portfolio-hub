"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

export function HeroSpotlight() {
    return (
        <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
                >
                    Build amazing
                    <br />
                    portfolios together.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"
                >
                    A modular component system for creating stunning portfolio websites.
                    Powered by Next.js 15, Tailwind CSS, and Aceternity UI.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-6 font-medium text-black transition hover:scale-105">
                        Get Started
                    </button>
                    <button className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-6 font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-900">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
