"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/marketing/BentoGrid";
import {
    IconBrain,
    IconCode,
    IconRocket,
    IconUsers,
    IconDeviceMobile,
    IconCloud,
} from "@tabler/icons-react";

export function ServicesBlock() {
    return (
        <section className="py-20 px-4 bg-black">
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Core Services
                </h2>
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                    Everything you need to build, launch, and scale your digital presence.
                </p>
            </div>
            <BentoGrid className="max-w-5xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
    {
        title: "AI-Powered Development",
        description:
            "Leverage cutting-edge AI to accelerate your development workflow and build smarter applications.",
        header: <Skeleton />,
        icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web Applications",
        description:
            "Modern, responsive web apps built with Next.js, React, and the latest technologies.",
        header: <Skeleton />,
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mobile Development",
        description:
            "Native and cross-platform mobile applications for iOS and Android.",
        header: <Skeleton />,
        icon: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Autonomous Agents",
        description:
            "Build intelligent agents that automate complex workflows and decision-making processes. From customer service to data analysis, our agents work 24/7.",
        header: <Skeleton />,
        icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Scalable, secure cloud solutions that grow with your business.",
        header: <Skeleton />,
        icon: <IconCloud className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Team Augmentation",
        description:
            "Expert developers ready to integrate with your existing team.",
        header: <Skeleton />,
        icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    },
];
