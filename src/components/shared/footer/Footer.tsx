"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FooterLogo from "@/assets/images/footer_logo.svg";
import { FOOTER_LINK_GROUPS } from "@/data/landingData";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Brand, Tagline, Newsletter Form */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-6 transition-transform hover:scale-[1.02]">
              <Image
                src={FooterLogo}
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-8 sm:h-9 w-auto"
                priority
              />
            </Link>

            <p className="text-sm sm:text-[15px] text-[#242528] font-normal mb-7 max-w-lg leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form: Standalone Input Pill + Standalone Button Pill */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-[280px] md:w-[300px] rounded-full border border-gray-300 px-5 py-3 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-all bg-white"
              />
              <Button
                type="submit"
                variant="accent"
                className="rounded-full px-7 py-3 text-sm font-semibold text-secondary hover:bg-accent-hover shadow-none shrink-0"
              >
                Search
              </Button>
            </form>

            <p className="mt-4 sm:mt-5 text-xs text-muted max-w-sm leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Navigation Link Columns (Aligned with subtitle underneath logo) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 lg:pt-[60px]">
            {FOOTER_LINK_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col space-y-4 sm:space-y-4.5">
                {group.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-sm text-[#242528] hover:text-primary transition-colors font-normal leading-normal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
