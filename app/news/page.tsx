import { getAllMarkdownFiles } from "@/lib/markdown";
import Link from "next/link";
import { Calendar, Megaphone } from "lucide-react";

export const metadata = {
    title: "お知らせ - Nami Server",
    description: "Nami Serverからの最新情報",
};

export default function NewsPage() {
    const news = getAllMarkdownFiles("news").reverse(); // Newest first

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                        お知らせ
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        アップデート情報やイベント告知など
                    </p>
                </div>

                <div className="space-y-4">
                    {news.map((item: any) => (
                        <Link
                            key={item.slug}
                            href={`/news/${item.slug}`}
                            className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-all hover:bg-secondary/50 hover:scale-[1.01]"
                        >
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary">
                                    <Megaphone className="h-3 w-3" />
                                    News
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {item.date}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                                {item.title}
                            </h2>
                            {item.description && (
                                <p className="text-muted-foreground">{item.description}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
