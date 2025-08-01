// components/Logo.tsx
import React from "react";
import Link from "next/link"; // or "next/link" if using Next.js

interface LogoProps {
  text?: string;
  className?: string;
  href?: string;
}

export function Logo({
  text = "CAPITAL MAX INTERIOR",
  className = "",
  href = "/",
}: LogoProps) {
  return (
    <div className={`flex items-center font-bold text-xl ${className}`}>
      <Link href={href}>
        <h2 className="tracking-wide text-[--color-primary] hover:opacity-90 transition">
          {text}
        </h2>
      </Link>
    </div>
  );
}
