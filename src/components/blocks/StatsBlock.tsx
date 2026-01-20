"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/marketing/AnimatedText";
import { BackgroundBeams } from "@/components/marketing/BackgroundEffects";

const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Available" },
];

export function StatsBlock() {
    return (
        <section className="relative py-20 px-4 bg-neutral-950 overflow-hidden">
            <BackgroundBeams />
            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        By the Numbers
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Our track record speaks for itself.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                            </div>
                            <div className="text-neutral-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
