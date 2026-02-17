import { Navbar } from "@/components/layout/navbar";

export default function BlogLoading() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-4xl mx-auto">
                <div className="h-10 w-32 bg-muted rounded-lg animate-pulse mb-4" />
                <div className="h-5 w-80 max-w-full bg-muted/60 rounded-md animate-pulse mb-12" />

                <div className="space-y-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="rounded-xl border border-border bg-card p-6 space-y-3">
                            <div className="flex gap-2">
                                {Array.from({ length: 2 }).map((_, j) => (
                                    <div key={j} className="h-5 w-20 bg-muted rounded-full animate-pulse" />
                                ))}
                            </div>
                            <div className="h-6 w-3/4 bg-muted rounded-md animate-pulse" />
                            <div className="h-4 w-full bg-muted/60 rounded-md animate-pulse" />
                            <div className="h-4 w-1/2 bg-muted/60 rounded-md animate-pulse" />
                            <div className="flex gap-4 pt-1">
                                <div className="h-4 w-28 bg-muted/40 rounded-md animate-pulse" />
                                <div className="h-4 w-20 bg-muted/40 rounded-md animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
