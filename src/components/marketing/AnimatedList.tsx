"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";

interface AnimatedListItemProps {
    children: React.ReactNode;
    delay?: number;
}

export function AnimatedListItem({ children, delay = 0 }: AnimatedListItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-violet-500/50 transition-colors"
        >
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                <IconCheck size={12} className="text-violet-400" />
            </div>
            <div className="text-neutral-300">{children}</div>
        </motion.div>
    );
}

interface AnimatedListProps {
    items: string[];
    className?: string;
}

export function AnimatedList({ items, className }: AnimatedListProps) {
    return (
        <div className={cn("space-y-3", className)}>
            {items.map((item, index) => (
                <AnimatedListItem key={index} delay={index * 0.1}>
                    {item}
                </AnimatedListItem>
            ))}
        </div>
    );
}

const features = [
    "AI-powered code generation and review",
    "Real-time collaboration with distributed teams",
    "Automated testing and deployment pipelines",
    "24/7 monitoring and incident response",
    "Custom integrations with your existing tools",
    "Dedicated technical account manager",
    "Priority support with 1-hour response time",
    "Quarterly business reviews and roadmap planning",
];

export function FeaturesListBlock() {
    return (
        <section className="py-20 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Everything You Need
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Comprehensive solutions for modern development teams.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                    <AnimatedList items={features.slice(0, 4)} />
                    <AnimatedList items={features.slice(4)} />
                </div>
            </div>
        </section>
    );
}
