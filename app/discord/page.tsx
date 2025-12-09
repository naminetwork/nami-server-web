import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Discord - Nami Server",
    description: "Join our Discord community.",
};

export default function DiscordPage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-6xl">
                コミュニティに参加しよう
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                他のプレイヤーと交流したり、サポートを受けたり、最新情報をゲットしましょう。
            </p>

            <div className="mt-12 overflow-hidden rounded-xl bg-[#5865F2] shadow-2xl">
                {/* Discord Widget iframe would go here if provided, or a custom huge button */}
                <div className="flex flex-col items-center gap-6 p-12">
                    <Link
                        href="https://discord.com/invite/cd33Z4ts3U"
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xl font-bold text-[#5865F2] transition-transform hover:scale-105"
                    >
                        Discordに参加する
                        <ArrowRight className="h-6 w-6" />
                    </Link>
                    <p className="text-white/80">
                        最新情報やコミュニティはこちら
                    </p>
                </div>
            </div>
        </div>
    );
}
