"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampEffect({ className }: { className?: string }) {
    return (
        <div className={cn("relative", className)}>
            {/* Lamp cone */}
            <motion.div
                initial={{ opacity: 0.5, width: "15rem" }}
                whileInView={{ opacity: 1, width: "30rem" }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="absolute inset-auto z-30 h-36 -translate-y-[6rem] bg-violet-400 blur-2xl"
                style={{
                    backgroundImage:
                        "conic-gradient(from 90deg at 50% 100%, transparent 60%, rgba(139, 92, 246, 0.8) 75%, transparent 90%)",
                }}
            />

            {/* Lamp glow */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-violet-500 blur-3xl"
                style={{
                    backgroundImage: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                }}
            />
        </div>
    );
}

export function LampHero() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-violet-950/20 to-transparent" />
            </div>

            {/* Lamp container */}
            <div className="relative flex w-full flex-1 items-center justify-center">
                {/* Top border line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                />

                {/* Lamp bulb */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 z-50 h-4 w-4 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_40px_10px_rgba(139,92,246,0.4)]"
                />

                {/* Lamp rays */}
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 z-40 h-80 w-[40rem] origin-top"
                    style={{
                        background:
                            "conic-gradient(from 90deg at 50% 0%, transparent 40%, rgba(139, 92, 246, 0.15) 50%, transparent 60%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-50 flex flex-col items-center px-4 pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl font-bold tracking-tight text-white md:text-7xl"
                >
                    Illuminate Your
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Digital Vision
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-6 max-w-lg text-center text-neutral-400"
                >
                    We bring clarity to complex challenges, lighting the path to
                    innovative solutions that transform businesses.
                </motion.p>
            </div>
        </div>
    );
}
