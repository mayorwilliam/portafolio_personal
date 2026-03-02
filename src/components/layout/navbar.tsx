"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-border bg-background/85 backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-foreground transition-colors"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold font-display">
                        G
                    </span>
                    <span className="text-sm font-semibold tracking-tight hidden sm:block">
                        portfolio
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-1 rounded-full border border-border p-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative z-10 px-4 py-1.5 text-sm font-medium transition-colors rounded-full",
                                pathname === item.path
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 rounded-full bg-foreground"
                                    style={{ zIndex: -1 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden border-t border-border bg-background/98 backdrop-blur-md overflow-hidden"
                    >
                        <div className="container px-4 py-3 flex flex-col gap-1">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                                            pathname === item.path
                                                ? "text-primary-foreground bg-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
