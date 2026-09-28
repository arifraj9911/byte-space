"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeaderLogo from "@/assets/images/hero/logo/Header_Logo.svg";
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
    <footer className="w-full bg-white border-t border-border py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image
                src={HeaderLogo}
                alt="ByteSpace"
                width={130}
                height={32}
                className="h-7 w-auto"
              />
            </Link>

            <p className="text-xs sm:text-sm text-secondary font-normal mb-5 max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="flex items-center rounded-full border border-border p-1 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-primary transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-secondary placeholder-gray-400 focus:outline-none"
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="sm"
                  className="rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap shadow-none"
                >
                  Search
                </Button>
              </div>
            </form>

            <p className="mt-3 text-[11px] text-muted max-w-xs leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINK_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col space-y-3">
                {group.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="text-xs sm:text-sm text-secondary hover:text-primary transition-colors font-medium"
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
