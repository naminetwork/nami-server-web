export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 py-8 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Nami Server. All rights reserved.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/50">
                    Mojang Studiosとは一切関係ありません。
                </p>
            </div>
        </footer>
    );
}
