import { getAllMarkdownFiles, getMarkdownContent } from "@/lib/markdown";
import { MoveRight } from "lucide-react";

export const metadata = {
    title: "Rules - Nami Server",
    description: "Server rules and guidelines.",
};

export default async function RulePage() {
    const rulesList = getAllMarkdownFiles("rules");
    // Fetch full content for each rule
    const rules = await Promise.all(
        rulesList.map(async (rule: any) => {
            const data = await getMarkdownContent("rules", `${rule.slug}.md`);
            return data;
        })
    );

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                        Server Rules
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        Please read and follow these rules to ensure a fun experience for everyone.
                    </p>
                </div>

                <div className="space-y-8">
                    {rules.length === 0 ? (
                        <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
                            No rules found. Please check back later.
                        </div>
                    ) : (
                        rules.map((rule: any) => (
                            <div
                                key={rule.slug}
                                className="overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-sm transition-all"
                            >
                                <div className="border-b border-border bg-secondary/30 px-6 py-4">
                                    <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                                        <MoveRight className="h-5 w-5 text-primary" />
                                        {rule.title}
                                    </h2>
                                </div>
                                <div
                                    className="prose prose-invert max-w-none p-6 prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline"
                                    dangerouslySetInnerHTML={{ __html: rule.contentHtml }}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
