"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    image?: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setRotateX((y - centerY) / 10);
        setRotateY((centerX - x) / 10);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="relative h-full"
            style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div
                className={cn(
                    "h-full p-6 rounded-2xl",
                    "bg-gradient-to-br from-neutral-900 to-neutral-800",
                    "border border-white/10",
                    "shadow-xl hover:shadow-2xl transition-shadow duration-300"
                )}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div style={{ transform: "translateZ(50px)" }}>
                    <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                        "{quote}"
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                            {name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white font-medium text-sm">{name}</p>
                            <p className="text-neutral-500 text-xs">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const testimonials = [
    {
        quote: "The team at PortfolioHub transformed our digital presence. Their AI-driven approach cut our development time in half while delivering exceptional quality.",
        name: "Sarah Chen",
        title: "CTO, TechVentures",
    },
    {
        quote: "Working with their autonomous agents was like having an extra team of developers. The efficiency gains were remarkable.",
        name: "Marcus Rodriguez",
        title: "Founder, StartupLab",
    },
    {
        quote: "The most impressive agency we've worked with. They don't just build products—they build the future.",
        name: "Emily Watson",
        title: "VP Engineering, CloudScale",
    },
    {
        quote: "Their expertise in Next.js and modern web development is unmatched. Our new platform handles 10x the traffic with better performance.",
        name: "David Kim",
        title: "Product Lead, DataFlow",
    },
    {
        quote: "From concept to deployment in weeks, not months. That's the PortfolioHub difference.",
        name: "Lisa Thompson",
        title: "CEO, InnovateCo",
    },
    {
        quote: "The 3D interfaces they created for our product demos have significantly boosted our conversion rates.",
        name: "James Park",
        title: "Marketing Director, VisionAI",
    },
];

export function TestimonialsBlock() {
    return (
        <section id="testimonials" className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Trusted by innovative companies worldwide.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
