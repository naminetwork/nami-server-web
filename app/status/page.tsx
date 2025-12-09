import { ServerStatus } from "@/components/ServerStatus";

export const metadata = {
    title: "Status - Nami Server",
    description: "Check the current status of Nami Server.",
};

export default function StatusPage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground sm:text-6xl">
                    サーバーステータス
                </h1>
                <p className="mt-4 text-muted-foreground">
                    Nami Serverのリアルタイム稼働状況
                </p>
            </div>

            <div className="w-full max-w-4xl">
                <ServerStatus />
            </div>


        </div>
    );
}
