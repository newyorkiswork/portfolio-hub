"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Seeded random number generator for deterministic values
function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
}

// Animated Stars Background - uses useEffect so no hydration issue
export function StarsBackground({ className }: { className?: string }) {
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!starsRef.current) return;

        const stars: HTMLDivElement[] = [];
        const container = starsRef.current;

        // Create stars on client only
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.className = "absolute rounded-full bg-white";
            const size = seededRandom(i * 1.1) * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${seededRandom(i * 2.2) * 100}%`;
            star.style.top = `${seededRandom(i * 3.3) * 100}%`;
            star.style.opacity = `${seededRandom(i * 4.4) * 0.7 + 0.3}`;
            star.style.animation = `twinkle ${seededRandom(i * 5.5) * 3 + 2}s ease-in-out infinite`;
            star.style.animationDelay = `${seededRandom(i * 6.6) * 5}s`;
            container.appendChild(star);
            stars.push(star);
        }

        return () => {
            stars.forEach((star) => star.remove());
        };
    }, []);

    return (
        <div
            ref={starsRef}
            className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
        />
    );
}

// Floating Particles - uses deterministic seeded values
export function FloatingParticles({ className }: { className?: string }) {
    // Use deterministic values based on index
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: seededRandom(i * 1.1) * 6 + 2,
        x: seededRandom(i * 2.2) * 100,
        y: seededRandom(i * 3.3) * 100,
        duration: seededRandom(i * 4.4) * 20 + 15,
        delay: seededRandom(i * 5.5) * 5,
        xMove: seededRandom(i * 6.6) * 50 - 25,
    }));

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: `radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, particle.xMove, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Aurora/Gradient Waves - no random values, no issue
export function AuroraBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                className="absolute -inset-[100%] opacity-50"
                animate={{
                    background: [
                        "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.3), transparent)",
                        "radial-gradient(ellipse 80% 50% at 80% 60%, rgba(139, 92, 246, 0.3), transparent)",
                        "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(217, 70, 239, 0.3), transparent)",
                        "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.3), transparent)",
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -inset-[100%] opacity-30"
                animate={{
                    background: [
                        "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(217, 70, 239, 0.4), transparent)",
                        "radial-gradient(ellipse 60% 40% at 30% 70%, rgba(139, 92, 246, 0.4), transparent)",
                        "radial-gradient(ellipse 60% 40% at 60% 50%, rgba(120, 119, 198, 0.4), transparent)",
                        "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(217, 70, 239, 0.4), transparent)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

// 3D Animated Grid - no random values, no issue
export function AnimatedGrid({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    transform: "perspective(500px) rotateX(60deg)",
                    transformOrigin: "center top",
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "0px 60px"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
    );
}

// Floating Orbs - no random values, no issue
export function FloatingOrbs({ className }: { className?: string }) {
    const orbs = [
        { color: "rgba(139, 92, 246, 0.4)", size: 400, x: "20%", y: "30%", duration: 20 },
        { color: "rgba(217, 70, 239, 0.3)", size: 300, x: "70%", y: "60%", duration: 25 },
        { color: "rgba(59, 130, 246, 0.3)", size: 350, x: "50%", y: "20%", duration: 22 },
        { color: "rgba(168, 85, 247, 0.25)", size: 250, x: "80%", y: "80%", duration: 18 },
    ];

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {orbs.map((orb, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        background: orb.color,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Meteor Shower Effect - uses deterministic seeded values
export function MeteorShower({ className }: { className?: string }) {
    // Use deterministic values based on index
    const meteors = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: seededRandom(i * 1.1) * 10,
        duration: seededRandom(i * 2.2) * 1 + 0.5,
        left: seededRandom(i * 3.3) * 100,
        repeatDelay: seededRandom(i * 4.4) * 15 + 5,
    }));

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {meteors.map((meteor) => (
                <motion.div
                    key={meteor.id}
                    className="absolute w-[2px] h-[100px] bg-gradient-to-b from-violet-500 to-transparent"
                    style={{
                        left: `${meteor.left}%`,
                        top: "-100px",
                        transform: "rotate(45deg)",
                    }}
                    animate={{
                        y: ["-100px", "calc(100vh + 200px)"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: meteor.duration,
                        delay: meteor.delay,
                        repeat: Infinity,
                        repeatDelay: meteor.repeatDelay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

// Combined Hero Background
export function HeroBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0", className)}>
            <StarsBackground />
            <FloatingOrbs />
            <AuroraBackground />
            <MeteorShower />
        </div>
    );
}
