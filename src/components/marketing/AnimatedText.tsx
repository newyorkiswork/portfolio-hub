"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export function TypewriterText({
    words,
    className,
    cursorClassName,
}: TypewriterTextProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentText.length < word.length) {
                        setCurrentText(word.slice(0, currentText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    if (currentText.length > 0) {
                        setCurrentText(word.slice(0, currentText.length - 1));
                    } else {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className={cn("inline-flex", className)}>
            <span>{currentText}</span>
            <motion.span
                className={cn(
                    "inline-block w-[2px] h-[1em] bg-violet-500 ml-1",
                    cursorClassName
                )}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </span>
    );
}

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
}

export function GradientText({
    children,
    className,
    colors = ["#8b5cf6", "#d946ef", "#8b5cf6"],
}: GradientTextProps) {
    return (
        <motion.span
            className={cn("inline-block bg-clip-text text-transparent", className)}
            style={{
                backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
                backgroundSize: "200% 100%",
            }}
            animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </motion.span>
    );
}

interface FlipWordsProps {
    words: string[];
    className?: string;
    duration?: number;
}

export function FlipWords({
    words,
    className,
    duration = 3000,
}: FlipWordsProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, [words.length, duration]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.4 }}
                className={cn("inline-block", className)}
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    );
}

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export function CountUp({
    end,
    duration = 2,
    suffix = "",
    prefix = "",
    className,
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setHasAnimated(true);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`count-${end}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span id={`count-${end}`} className={className}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
