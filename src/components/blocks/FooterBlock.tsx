"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandDiscord,
} from "@tabler/icons-react";

const footerLinks = {
    product: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Case Studies", href: "#portfolio" },
        { name: "Reviews", href: "#testimonials" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
    ],
    resources: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Status", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
};

const socialLinks = [
    { icon: IconBrandTwitter, href: "#", label: "Twitter" },
    { icon: IconBrandGithub, href: "#", label: "GitHub" },
    { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
    { icon: IconBrandDiscord, href: "#", label: "Discord" },
];

export function FooterBlock() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                                <span className="text-xl font-bold text-white">PortfolioHub</span>
                            </Link>
                            <p className="text-neutral-400 text-sm mb-6">
                                Building the future of digital experiences with AI-native solutions.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} PortfolioHub. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm">
                        Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
