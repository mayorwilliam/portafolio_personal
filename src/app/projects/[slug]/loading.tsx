import { Navbar } from "@/components/layout/navbar";

export default function ProjectDetailLoading() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 max-w-4xl mx-auto">
                <div className="h-4 w-32 bg-muted/60 rounded-md animate-pulse mb-8" />

                <div className="flex gap-2 mb-4">
                    <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                    <div className="h-6 w-24 bg-muted rounded-full animate-pulse" />
                </div>

                <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse mb-4" />
                <div className="h-5 w-full bg-muted/60 rounded-md animate-pulse mb-2" />
                <div className="h-5 w-2/3 bg-muted/60 rounded-md animate-pulse mb-8" />

                <div className="flex gap-3 mb-8">
                    <div className="h-10 w-32 bg-muted rounded-md animate-pulse" />
                    <div className="h-10 w-36 bg-muted/60 rounded-md animate-pulse" />
                </div>

                <div className="aspect-video w-full bg-muted rounded-xl animate-pulse mb-10" />

                <div className="flex flex-wrap gap-2 mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                    ))}
                </div>

                <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-4 w-full bg-muted/40 rounded-md animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
                    ))}
                </div>
            </div>
        </main>
    );
}
