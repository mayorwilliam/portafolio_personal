import { Navbar } from "@/components/layout/navbar";

export default function ProjectsLoading() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4">
                <div className="h-10 w-48 bg-muted rounded-lg animate-pulse mb-4" />
                <div className="h-5 w-96 max-w-full bg-muted/60 rounded-md animate-pulse mb-8" />

                <div className="flex gap-2 mb-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-9 w-24 bg-muted rounded-full animate-pulse" />
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                            <div className="aspect-video bg-muted animate-pulse" />
                            <div className="p-5 space-y-3">
                                <div className="h-6 w-3/4 bg-muted rounded-md animate-pulse" />
                                <div className="h-4 w-full bg-muted/60 rounded-md animate-pulse" />
                                <div className="h-4 w-2/3 bg-muted/60 rounded-md animate-pulse" />
                                <div className="flex gap-2 pt-2">
                                    {Array.from({ length: 3 }).map((_, j) => (
                                        <div key={j} className="h-5 w-16 bg-muted rounded-full animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
