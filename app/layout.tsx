import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from "next/font/google"; // Import a sans-serif font
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

// Load Bodoni Moda for headlines
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"], // Load multiple weights for versatility
});

// Load a sans-serif font for body text
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Load multiple weights
});

export const metadata: Metadata = {
  title: "Capital Max Interiors",
  description:
    "Where elegance meets excellence — see our curated interior transformations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {/* Set sans-serif as the body default */}
        <div className="min-h-screen bg-white text-gray-800">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
