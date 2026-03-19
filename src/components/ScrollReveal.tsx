"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return <div ref={ref}>{children}</div>;
}
