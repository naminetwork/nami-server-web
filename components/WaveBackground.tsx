"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function WaveBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Adjust opacity based on theme if needed, but CSS handles colors.
    // Using a simple SVG wave animation at the bottom or covering background.
    // Given the user wants "background animation", a subtle moving wave at the bottom 
    // of the Hero or fixed in background is best.

    return (
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <svg
                className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[200px] md:h-[30vh] min-h-[100px] translate-y-2"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" className="animate-[move-forever_25s_cubic-bezier(.55,.5,.45,.5)_infinite] fill-primary/10 dark:fill-primary/5" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" className="animate-[move-forever_20s_cubic-bezier(.55,.5,.45,.5)_infinite] fill-primary/20 dark:fill-primary/10" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" className="animate-[move-forever_15s_cubic-bezier(.55,.5,.45,.5)_infinite] fill-primary/30 dark:fill-primary/20" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" className="animate-[move-forever_10s_cubic-bezier(.55,.5,.45,.5)_infinite] fill-primary/40 dark:fill-primary/30" />
                </g>
            </svg>
            <style jsx>{`
                @keyframes move-forever {
                    0% {
                        transform: translate3d(-90px,0,0);
                    }
                    100% { 
                        transform: translate3d(85px,0,0);
                    }
                }
            `}</style>
        </div>
    );
}
