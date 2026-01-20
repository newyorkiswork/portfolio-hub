"use client";

import { NavHeader } from "@/components/blocks/NavHeader";
import { LampHero } from "@/components/marketing/LampEffect";
import { FooterBlock } from "@/components/blocks/FooterBlock";

// Cult UI-inspired experimental layout sections
function HeroSection() {
    return (
        <div className="relative">
            <LampHero />
        </div>
    );
}

function StorySection() {
    return (
        <section className="py-32 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                            Our Story
                        </span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                            Born from a
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                simple idea
                            </span>
                        </h2>
                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            In 2020, we started with a question: What if building digital
                            experiences could be as intuitive as having a conversation? Today,
                            we&apos;re a team of engineers, designers, and visionaries making that
                            vision reality.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1">
                            <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                                <span className="text-8xl">🚀</span>
                            </div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-violet-500/20 backdrop-blur-sm border border-violet-500/30" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-500/30" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValuesSection() {
    const values = [
        {
            number: "01",
            title: "Innovation First",
            description:
                "We don&apos;t follow trends—we set them. Every project pushes the boundaries of what&apos;s possible.",
        },
        {
            number: "02",
            title: "Human-Centered",
            description:
                "Technology serves people, not the other way around. We design for humans first.",
        },
        {
            number: "03",
            title: "Radical Transparency",
            description:
                "No black boxes. We share our process, our challenges, and our learnings openly.",
        },
        {
            number: "04",
            title: "Sustainable Growth",
            description:
                "We build for the long term—for our clients, our team, and our planet.",
        },
    ];

    return (
        <section className="py-32 px-4 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                        What We Believe
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Our Core Values
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-violet-500/50 transition-all duration-500"
                        >
                            <span className="absolute top-8 right-8 text-7xl font-bold text-neutral-800 group-hover:text-violet-500/20 transition-colors">
                                {value.number}
                            </span>
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamSection() {
    const team = [
        { name: "Alex Chen", role: "CEO & Founder", emoji: "👨‍💼" },
        { name: "Sarah Kim", role: "CTO", emoji: "👩‍💻" },
        { name: "Marcus Johnson", role: "Head of Design", emoji: "🎨" },
        { name: "Emily Davis", role: "Head of Engineering", emoji: "⚙️" },
        { name: "David Park", role: "Head of AI", emoji: "🤖" },
        { name: "Lisa Wang", role: "Head of Operations", emoji: "📊" },
    ];

    return (
        <section className="py-32 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                        The Humans
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                        Meet Our Team
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors"
                        >
                            <div className="text-6xl mb-4">{member.emoji}</div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-violet-400 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-32 px-4 bg-gradient-to-b from-neutral-950 to-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to Build
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Something Amazing?
                    </span>
                </h2>
                <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                    Let&apos;s turn your vision into reality. Get in touch and let&apos;s start
                    building the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/#contact"
                        className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                    >
                        Start a Project
                    </a>
                    <a
                        href="/#portfolio"
                        className="px-8 py-4 rounded-full border border-neutral-700 text-white font-medium hover:border-neutral-500 transition-colors"
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function AboutPageClient() {
    return (
        <main className="min-h-screen bg-black">
            <NavHeader />
            <HeroSection />
            <StorySection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
            <FooterBlock />
        </main>
    );
}
