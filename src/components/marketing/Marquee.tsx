"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    pauseOnHover?: boolean;
    className?: string;
}

export function Marquee({
    children,
    direction = "left",
    speed = 30,
    pauseOnHover = true,
    className,
}: MarqueeProps) {
    return (
        <div
            className={cn(
                "group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]",
                className
            )}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "flex shrink-0 gap-[var(--gap)]",
                        pauseOnHover && "group-hover:[animation-play-state:paused]"
                    )}
                    style={{
                        animation: `marquee ${speed}s linear infinite`,
                        animationDirection: direction === "right" ? "reverse" : "normal",
                    }}
                >
                    {children}
                </motion.div>
            ))}
        </div>
    );
}

// Tech logos marquee component
const techLogos = [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Framer", icon: "◈" },
    { name: "Vercel", icon: "▲" },
    { name: "Node.js", icon: "⬢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "◆" },
    { name: "Docker", icon: "🐳" },
];

export function TechMarquee() {
    return (
        <section className="py-12 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto mb-6 px-4">
                <p className="text-center text-neutral-500 text-sm uppercase tracking-wider">
                    Powered by modern technologies
                </p>
            </div>
            <Marquee speed={40} className="py-4">
                {techLogos.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 mx-2"
                    >
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-neutral-300 font-medium">{tech.name}</span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}

// Client logos marquee
const clientLogos = [
    "TechVentures",
    "StartupLab",
    "CloudScale",
    "DataFlow",
    "InnovateCo",
    "VisionAI",
    "QuantumLeap",
    "NexGen",
];

export function ClientMarquee() {
    return (
        <section className="py-16 bg-neutral-950">
            <div className="max-w-7xl mx-auto mb-8 px-4">
                <p className="text-center text-neutral-500 text-sm uppercase tracking-wider">
                    Trusted by innovative companies
                </p>
            </div>
            <Marquee speed={50} direction="right" className="py-4">
                {clientLogos.map((client, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-12 py-4 mx-4"
                    >
                        <span className="text-2xl font-bold text-neutral-600 hover:text-neutral-400 transition-colors">
                            {client}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
