"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconSend, IconCheck, IconLoader2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextarea?: boolean;
}

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    isTextarea = false,
}: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputClasses = cn(
        "w-full bg-neutral-900 border rounded-lg px-4 py-3 text-white placeholder:text-neutral-500",
        "focus:outline-none transition-all duration-300",
        isFocused ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "border-neutral-700"
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2"
        >
            <label className="text-sm text-neutral-400 font-medium">{label}</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={cn(inputClasses, "min-h-[120px] resize-none")}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={inputClasses}
                />
            )}
        </motion.div>
    );
};

export function ContactBlock() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
        setFormState({ name: "", email: "", company: "", message: "" });

        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="py-20 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Let's Build Together
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                        Ready to transform your ideas into reality? Get in touch with our team.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    <InputField
                        label="Company"
                        name="company"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formState.message}
                        onChange={handleChange}
                        isTextarea
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className={cn(
                                "w-full h-12 text-base font-medium transition-all duration-300",
                                status === "success" && "bg-emerald-500 hover:bg-emerald-500"
                            )}
                        >
                            {status === "idle" && (
                                <>
                                    Send Message <IconSend className="ml-2" size={18} />
                                </>
                            )}
                            {status === "loading" && (
                                <>
                                    Sending... <IconLoader2 className="ml-2 animate-spin" size={18} />
                                </>
                            )}
                            {status === "success" && (
                                <>
                                    Message Sent! <IconCheck className="ml-2" size={18} />
                                </>
                            )}
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
}
