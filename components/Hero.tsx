"use client";

import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { WaveBackground } from "@/components/WaveBackground";

const SERVER_IP = "nami.mcsv.win"; // Real server IP

export function Hero() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(SERVER_IP);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center sm:min-h-[90vh]">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative mb-8 h-48 w-48 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-primary/30 ring-4 ring-white/20"
            >
                <Image
                    src="/images/nami icon.png"
                    alt="Nami Server Icon"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            <WaveBackground />


            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
            >
                Nami Networks
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
                24時間誰でも参加可能。
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-6"
            >
                {/* Connection Details Card */}
                <div className="flex flex-col gap-4 rounded-3xl bg-secondary/50 p-6 backdrop-blur-sm border border-border max-w-md w-full">

                    {/* Main IP */}
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-muted-foreground">Java版 / 統合版 IP</span>
                        <button
                            onClick={copyToClipboard}
                            className="group flex items-center justify-between gap-3 rounded-xl bg-background p-3 ring-1 ring-border transition-all hover:ring-primary/50 active:scale-[0.98]"
                        >
                            <span className="font-mono text-lg font-bold tracking-wide">{SERVER_IP}</span>
                            {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />}
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Port */}
                        <div className="flex-1 flex flex-col gap-1">
                            <span className="text-sm font-medium text-muted-foreground">統合版ポート</span>
                            <div className="rounded-xl bg-background p-3 text-center ring-1 ring-border">
                                <span className="font-mono font-bold">3128</span>
                            </div>
                        </div>
                        {/* Friend ID */}
                        <div className="flex-1 flex flex-col gap-1">
                            <span className="text-sm font-medium text-muted-foreground">フレンド参加</span>
                            <div className="rounded-xl bg-background p-3 text-center ring-1 ring-border">
                                <span className="font-mono font-bold">nami79156</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Link
                    href="https://discord.com/invite/cd33Z4ts3U"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                >
                    <span>Discordに参加</span>
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </motion.div>
        </div>
    );
}
