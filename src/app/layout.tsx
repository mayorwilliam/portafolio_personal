import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteConfig, getPersonalInfo } from "@/lib/data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const site = getSiteConfig();
const personal = getPersonalInfo();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.siteName,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  openGraph: {
    title: site.siteName,
    description: personal.bio,
    url: site.siteUrl,
    siteName: site.siteName,
    locale: site.locale,
    type: "website",
    ...(site.ogImage && { images: [{ url: site.ogImage }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: site.siteName,
    description: personal.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.locale} className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t){document.documentElement.className=t}else if(window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.className="dark"}else{document.documentElement.className="light"}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${syne.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
