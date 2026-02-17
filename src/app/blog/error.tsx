"use client";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="container pt-32 px-4 flex flex-col items-center justify-center min-h-[60vh]">
                <div className="text-center max-w-md">
                    <p className="font-mono text-sm text-destructive mb-3">Error</p>
                    <h1 className="text-2xl font-bold tracking-tight mb-3">
                        Failed to load blog
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        {error.message || "Something went wrong while loading the blog."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button onClick={reset}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Try Again
                        </Button>
                        <Link href="/">
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
