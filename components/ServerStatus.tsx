"use client";

import { useEffect, useState } from "react";
import { Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

const SERVER_IP = "nami.mcsv.win"; // Real server IP

interface ServerData {
    online: boolean;
    players: {
        online: number;
        max: number;
    };
    version?: string;
}

export function ServerStatus() {
    const [status, setStatus] = useState<ServerData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                // Using mcstatus.io as it provides reliable real-time data
                const res = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`);
                const data = await res.json();

                if (data.online) {
                    setStatus({
                        online: true,
                        players: {
                            online: data.players.online,
                            max: data.players.max
                        },
                        version: data.version?.name_clean || data.version?.name || "Unknown"
                    });
                } else {
                    setStatus({
                        online: false,
                        players: { online: 0, max: 0 },
                        version: "-"
                    });
                }
            } catch (error) {
                console.error("Failed to fetch status", error);
                setStatus({
                    online: false,
                    players: { online: 0, max: 0 },
                    version: "-"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 30000); // 30s update
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="h-20 animate-pulse bg-white/5" />;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-xl backdrop-blur-sm"
        >
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/30">
                        <Activity className="h-8 w-8" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground">サーバーステータス</h3>
                        <p className="text-muted-foreground">
                            {status?.online ? "稼働中" : "オフライン"}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-8 border-l border-border pl-8">
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">オンライン人数</p>
                        <div className="flex items-baseline gap-1">
                            <Users className="h-5 w-5 text-primary" />
                            <span className="text-3xl font-bold text-foreground">{status?.players?.online || 0}</span>
                            <span className="text-muted-foreground">/ {status?.players?.max || 100}</span>
                        </div>
                    </div>
                    <div className="hidden sm:block text-center">
                        <p className="text-sm text-muted-foreground mb-1">バージョン</p>
                        <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
                            {status?.version || "1.20.4"}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
