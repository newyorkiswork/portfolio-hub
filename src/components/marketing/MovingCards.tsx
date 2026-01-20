"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card {
    id: number;
    title: string;
    description: string;
    gradient: string;
    icon: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: "AI Development",
        description: "Build intelligent applications with cutting-edge AI",
        gradient: "from-violet-600 to-indigo-600",
        icon: "🤖",
    },
    {
        id: 2,
        title: "Web Platforms",
        description: "Modern, scalable web applications for enterprise",
        gradient: "from-pink-600 to-rose-600",
        icon: "🌐",
    },
    {
        id: 3,
        title: "Mobile Apps",
        description: "Native experiences across iOS and Android",
        gradient: "from-emerald-600 to-teal-600",
        icon: "📱",
    },
    {
        id: 4,
        title: "Cloud Solutions",
        description: "Scalable infrastructure that grows with you",
        gradient: "from-amber-600 to-orange-600",
        icon: "☁️",
    },
    {
        id: 5,
        title: "Data Analytics",
        description: "Turn data into actionable insights",
        gradient: "from-blue-600 to-cyan-600",
        icon: "📊",
    },
];

export function MovingCards() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 px-4 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        What We Do Best
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Expertise across the full technology spectrum.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative h-80 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {cards.map((card, index) => {
                            const offset = index - activeIndex;
                            const absOffset = Math.abs(offset);

                            // Only render visible cards
                            if (absOffset > 2) return null;

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: absOffset === 0 ? 1 : 0.5 - absOffset * 0.2,
                                        scale: 1 - absOffset * 0.15,
                                        x: offset * 280,
                                        zIndex: cards.length - absOffset,
                                        rotateY: offset * 10,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                                    className={cn(
                                        "absolute w-64 h-72 rounded-2xl p-6 cursor-pointer",
                                        "bg-gradient-to-br",
                                        card.gradient,
                                        "shadow-2xl"
                                    )}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div className="text-4xl mb-4">{card.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                                    <p className="text-white/80 text-sm">{card.description}</p>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                index === activeIndex ? "bg-violet-500 w-6" : "bg-neutral-600"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
