import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getPersonalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
    const personal = getPersonalInfo();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container flex flex-col items-center justify-center px-4 pt-32 pb-20 min-h-[calc(100vh-4rem)]">
                <div className="text-center max-w-md">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                        <Terminal className="h-8 w-8 text-primary" />
                    </div>

                    <p className="font-mono text-sm text-primary mb-3">404</p>
                    <h1 className="text-3xl font-bold tracking-tight mb-3">
                        Page not found
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                            <Button>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline">
                                View Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer socialLinks={personal.socialLinks} name={personal.name} />
        </main>
    );
}
