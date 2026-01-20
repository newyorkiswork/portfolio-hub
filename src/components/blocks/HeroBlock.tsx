"use client";

import React from "react";
import { Spotlight } from "@/components/marketing/Spotlight";
import { Button } from "@/components/ui/button";
import {
    HeroBackground,
    AnimatedGrid,
} from "@/components/marketing/AnimatedBackgrounds";

export function HeroBlock() {
    return (
        <div className="min-h-screen w-full flex md:items-center md:justify-center bg-black relative overflow-hidden">
            {/* 3D Animated Background */}
            <HeroBackground />

            {/* Animated 3D Grid */}
            <AnimatedGrid className="opacity-40" />

            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Content */}
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-32 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    AI Native <br /> is the new standard.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    We build the infrastructure for the next generation of business.
                    Web, App, and Autonomous Agents seamlessly integrated.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button variant="default" size="lg">Start Building</Button>
                    <Button variant="outline" size="lg">View Case Studies</Button>
                </div>
            </div>
        </div>
    );
}
