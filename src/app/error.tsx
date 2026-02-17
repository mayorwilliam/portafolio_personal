"use client";

import { Button } from "@/components/ui/button";
import { Terminal, RotateCcw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/20 mb-8">
                    <Terminal className="h-8 w-8 text-destructive" />
                </div>

                <p className="font-mono text-sm text-destructive mb-3">Error</p>
                <h1 className="text-3xl font-bold tracking-tight mb-3">
                    Something went wrong
                </h1>
                <p className="text-muted-foreground mb-8">
                    {error.message || "An unexpected error occurred. Please try again."}
                </p>

                <Button onClick={reset}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            </div>
        </div>
    );
}
