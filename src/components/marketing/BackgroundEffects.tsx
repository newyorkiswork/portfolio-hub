"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
    const beams = [
        { top: "10%", left: "20%", delay: 0 },
        { top: "30%", left: "80%", delay: 0.5 },
        { top: "60%", left: "10%", delay: 1 },
        { top: "80%", left: "70%", delay: 1.5 },
    ];

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {beams.map((beam, index) => (
                <motion.div
                    key={index}
                    className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"
                    style={{
                        top: beam.top,
                        left: beam.left,
                        transformOrigin: "top center",
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scaleY: [0, 1, 1, 0],
                        y: [0, 100, 200, 300],
                    }}
                    transition={{
                        duration: 4,
                        delay: beam.delay,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                />
            ))}

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        </div>
    );
}

export function GridBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none", className)}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}

export function DotBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none", className)}>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
    );
}
