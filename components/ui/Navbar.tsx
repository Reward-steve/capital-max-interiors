"use client";

import { useState } from "react";
import { Button } from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="bg-primary text-background-light shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo className="flex-shrink-0" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          {routes.map((route) => (
            <a
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              href={route.href}
              className="hover:underline transition"
            >
              {route.text}
            </a>
          ))}
          <Button variant="secondary" className="bg-accent-gold">
            <a
              href="https://api.whatsapp.com/send?phone=+2349121865839"
              target="_blank"
              title=" Chat on WhatsApp"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 rounded-full fixed bottom-2 z-20 right-2 bg-green-500 text-white hover:bg-green-600 transition duration-200"
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
          {mobileMenuOpen ? (
            <FaTimes className="w-7 h-7 transition-transform" />
          ) : (
            <FaBars className="w-7 h-7 transition-transform" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
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
