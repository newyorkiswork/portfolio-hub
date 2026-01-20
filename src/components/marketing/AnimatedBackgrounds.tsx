"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animated Stars Background
export function StarsBackground({ className }: { className?: string }) {
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!starsRef.current) return;

        const stars: HTMLDivElement[] = [];
        const container = starsRef.current;

        // Create stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.className = "absolute rounded-full bg-white";
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            star.style.animationDelay = `${Math.random() * 5}s`;
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

// Floating Particles with 3D movement
export function FloatingParticles({ className }: { className?: string }) {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
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
                        x: [0, Math.random() * 50 - 25, 0],
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

// Aurora/Gradient Waves
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

// 3D Animated Grid
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

// Floating Orbs with blur
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

// Meteor Shower Effect
export function MeteorShower({ className }: { className?: string }) {
    const meteors = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 10,
        duration: Math.random() * 1 + 0.5,
        left: Math.random() * 100,
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
                        repeatDelay: Math.random() * 15 + 5,
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
