"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let rotation = 0;

        const resize = () => {
            const size = Math.min(canvas.parentElement?.clientWidth || 400, 400);
            canvas.width = size;
            canvas.height = size;
        };

        resize();
        window.addEventListener("resize", resize);

        const drawGlobe = () => {
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) / 2.5;

            ctx.clearRect(0, 0, width, height);

            // Globe glow
            const gradient = ctx.createRadialGradient(
                centerX,
                centerY,
                radius * 0.8,
                centerX,
                centerY,
                radius * 1.2
            );
            gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)");
            gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Globe outline
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Latitude lines
            for (let i = -2; i <= 2; i++) {
                const y = centerY + (i * radius) / 3;
                const latRadius = Math.sqrt(radius * radius - ((i * radius) / 3) ** 2);

                ctx.beginPath();
                ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
                ctx.stroke();
            }

            // Longitude lines (rotating)
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3 + rotation;

                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.ellipse(0, 0, radius * 0.1, radius, 0, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
                ctx.stroke();

                ctx.restore();
            }

            // Connection dots
            const dots = [
                { lat: 0.3, lng: rotation },
                { lat: -0.2, lng: rotation + 1 },
                { lat: 0.5, lng: rotation + 2 },
                { lat: -0.4, lng: rotation + 3.5 },
                { lat: 0.1, lng: rotation + 4.5 },
            ];

            dots.forEach((dot, index) => {
                const x = centerX + Math.cos(dot.lng) * radius * 0.8 * Math.cos(dot.lat);
                const y = centerY + Math.sin(dot.lat) * radius * 0.8;

                // Only draw if on the visible side
                if (Math.cos(dot.lng) > -0.3) {
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(139, 92, 246, 0.8)";
                    ctx.fill();

                    // Draw connection lines between adjacent dots
                    if (index > 0) {
                        const prevDot = dots[index - 1];
                        const prevX = centerX + Math.cos(prevDot.lng) * radius * 0.8 * Math.cos(prevDot.lat);
                        const prevY = centerY + Math.sin(prevDot.lat) * radius * 0.8;

                        if (Math.cos(prevDot.lng) > -0.3) {
                            ctx.beginPath();
                            ctx.moveTo(prevX, prevY);
                            ctx.lineTo(x, y);
                            ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }
            });

            rotation += 0.005;
            animationId = requestAnimationFrame(drawGlobe);
        };

        drawGlobe();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className={cn("relative", className)}>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}

export function GlobalReachBlock() {
    const locations = [
        { city: "San Francisco", country: "USA", offset: "-8:00" },
        { city: "London", country: "UK", offset: "+0:00" },
        { city: "Tokyo", country: "Japan", offset: "+9:00" },
        { city: "Sydney", country: "Australia", offset: "+11:00" },
    ];

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
                        Global Reach
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Serving clients across every timezone, 24/7.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <Globe className="w-80 h-80" />
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location.city}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800"
                            >
                                <div className="text-violet-400 text-xs font-medium mb-1">
                                    UTC {location.offset}
                                </div>
                                <div className="text-white font-semibold">{location.city}</div>
                                <div className="text-neutral-500 text-sm">{location.country}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
