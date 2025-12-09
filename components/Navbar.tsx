"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "ホーム", href: "/" },
    { name: "お知らせ", href: "/news" },
    { name: "ルール", href: "/rule" },
    { name: "Wiki", href: "/wiki" },
    { name: "マップ", href: "http://nami-kokka-map.mcsv.win:3347/", external: true },
    { name: "ステータス", href: "/status" },
    { name: "Discord", href: "https://discord.com/invite/cd33Z4ts3U", external: true },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-primary/20 transition-all group-hover:ring-primary/50">
                        <Image
                            src="/images/nami icon.png"
                            alt="Nami"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        Nami Server
                    </span>
                </Link>

                <div className="hidden md:flex md:items-center md:gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="ml-2 border-l border-border pl-4">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button & Theme Toggle for Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl"
                    >
                        <div className="space-y-1 px-4 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-4 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
