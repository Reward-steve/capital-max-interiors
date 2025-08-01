"use client";

import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import logo from "@/public/capital-max.jpg";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-background-light shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Logo className="flex-shrink-0" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          <a href="#services" className="hover:underline transition">
            Services
          </a>
          <a href="#about" className="hover:underline transition">
            About
          </a>
          <a href="#contact" className="hover:underline transition">
            Contact
          </a>
          <Button variant="secondary" className="bg-accent-gold">
            <a
              // href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-background-light focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[300px] px-6 pb-4" : "max-h-0 px-6"
        }`}
      >
        <nav className="flex flex-col gap-4 text-sm">
          <a href="#services" className="hover:underline transition">
            Services
          </a>
          <a href="#about" className="hover:underline transition">
            About
          </a>
          <a href="#contact" className="hover:underline transition">
            Contact
          </a>
          <Button variant="secondary" className="bg-accent-gold">
            <a
              // href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
