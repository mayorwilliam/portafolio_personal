import { Navbar } from "@/components/layout/navbar";

export default function BlogPostLoading() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-3xl mx-auto">
                <div className="h-4 w-28 bg-muted/60 rounded-md animate-pulse mb-8" />

                <div className="flex gap-2 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-5 w-18 bg-muted rounded-full animate-pulse" />
                    ))}
                </div>

                <div className="h-10 w-4/5 bg-muted rounded-lg animate-pulse mb-4" />

                <div className="flex gap-4 mb-10">
                    <div className="h-4 w-32 bg-muted/40 rounded-md animate-pulse" />
                    <div className="h-4 w-24 bg-muted/40 rounded-md animate-pulse" />
                </div>

                <div className="space-y-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-4 bg-muted/40 rounded-md animate-pulse" style={{ width: `${70 + Math.random() * 30}%` }} />
                    ))}
                    <div className="h-8 w-1/3 bg-muted rounded-md animate-pulse mt-8" />
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-4 bg-muted/40 rounded-md animate-pulse" style={{ width: `${75 + Math.random() * 25}%` }} />
                    ))}
                </div>
            </div>
        </main>
    );
}
