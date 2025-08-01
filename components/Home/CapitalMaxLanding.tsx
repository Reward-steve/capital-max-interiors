import React from "react";
import { Button } from "../ui/Button";
import HeroSection from "./HeroSection";
import OurWorkSection from "./OurWork";
import WhyChooseUsSection from "./Why_Choose_Us";
import WhatsAppButton from "../ui/WhatsappBtn";

export default function CapitalMaxLanding() {
  return (
    <>
      <HeroSection />

      <OurWorkSection />

      <WhyChooseUsSection />

      <section className="bg-neutral-gray py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Design the Space of Your Dreams
          </h3>
          <p className="mb-6">
            Whether you're revamping your home, styling your office, or
            upgrading your lounge — we turn every corner into a masterpiece.
          </p>
          <Button
            variant="primary"
            className="bg-primary text-background-light"
          >
            <a href="mailto:capitalmax@example.com">Contact Us</a>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,60 350,0 500,60 L500,00 L0,0 Z"
              className="fill-primary"
            />
          </svg>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
}
