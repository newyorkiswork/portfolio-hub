"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    image?: string;
    gradient: string;
}

const ProjectCard = ({ title, description, category, gradient }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Gradient */}
            <div className={cn("aspect-[4/3] w-full", gradient)} />

            {/* Overlay */}
            <motion.div
                className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
            >
                <span className="text-xs text-violet-400 font-medium uppercase tracking-wider mb-2">
                    {category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <motion.p
                    className="text-neutral-300 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                >
                    {description}
                </motion.p>
                <motion.div
                    className="mt-4 flex items-center gap-2 text-white text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    View Case Study <IconExternalLink size={16} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const projects = [
    {
        title: "AI Dashboard Platform",
        description: "Real-time analytics dashboard with AI-powered insights for enterprise clients.",
        category: "Web Application",
        gradient: "bg-gradient-to-br from-violet-600 to-indigo-800",
    },
    {
        title: "E-Commerce Revolution",
        description: "Next-gen shopping experience with AR product visualization.",
        category: "E-Commerce",
        gradient: "bg-gradient-to-br from-pink-500 to-rose-700",
    },
    {
        title: "FinTech Mobile App",
        description: "Cross-platform mobile banking solution with biometric security.",
        category: "Mobile App",
        gradient: "bg-gradient-to-br from-emerald-500 to-teal-700",
    },
    {
        title: "Healthcare Portal",
        description: "Patient management system with telemedicine integration.",
        category: "Healthcare",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-700",
    },
    {
        title: "Autonomous CRM",
        description: "AI-driven customer relationship management with predictive analytics.",
        category: "Enterprise",
        gradient: "bg-gradient-to-br from-amber-500 to-orange-700",
    },
    {
        title: "Creative Studio",
        description: "Collaborative design platform for distributed creative teams.",
        category: "SaaS",
        gradient: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
    },
];

export function PortfolioBlock() {
    return (
        <section id="portfolio" className="py-20 px-4 bg-neutral-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Our Portfolio
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Explore our recent projects and case studies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
