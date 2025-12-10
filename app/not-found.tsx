import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-foreground">
                ページが見つかりません
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
                お探しのページは削除されたか、URLが間違っている可能性があります。
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
                <Home className="h-5 w-5" />
                ホームに戻る
            </Link>
        </div>
    );
}
