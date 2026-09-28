"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/data/landingData";
import HeaderLogo from "@/assets/images/hero/logo/Header_Logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-white border-b border-white/10 relative z-30">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Image
              src={HeaderLogo}
              alt="ByteSpace Logo"
              width={140}
              height={36}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  item.isActive ? "text-white font-semibold" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-5">
            <Link
              href="/signin"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Button
              variant="accent"
              size="sm"
              className="rounded-full px-5 py-2 text-xs font-semibold"
            >
              Join Us
            </Button>
            <button
              aria-label="Shopping Cart"
              className="p-2 text-white/90 hover:text-white transition-colors relative hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              aria-label="Shopping Cart"
              className="p-1.5 text-white/90"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4 animate-in fade-in">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium py-1 px-2 rounded hover:bg-white/10 text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-3 border-t border-white/10">
              <Link
                href="/signin"
                className="text-sm font-medium text-white px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Button variant="accent" size="sm" className="w-full">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
