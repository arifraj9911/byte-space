import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/assets/images/auth_image/logo_icon.svg";
import AuthCardComposition from "./AuthCardComposition";

export interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-primary overflow-hidden flex flex-col justify-between py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 text-white">
      {/* Background Step Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px)`,
          backgroundSize: "85px 85px",
        }}
      />

      {/* Top Header: ByteSpace Logo Icon */}
      <header className="relative z-20 w-full mb-6 sm:mb-8">
        <Link
          href="/"
          className="inline-flex items-center transition-transform hover:scale-110 active:scale-95"
          title="Back to ByteSpace Home"
        >
          <Image
            src={LogoIcon}
            alt="ByteSpace"
            width={29}
            height={32}
            className="w-7 sm:w-8 h-auto"
            priority
          />
        </Link>
      </header>

      {/* Main Auth Content: 2-Column Grid */}
      <main className="relative z-10 w-full max-w-7xl mx-auto my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Subtitle & 3D Card Composition */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-lg mb-8 sm:mb-10">
              {subtitle}
            </p>

            {/* Overlapping Cards Composition with 3D Assets */}
            <div className="w-full flex justify-center lg:justify-start">
              <AuthCardComposition />
            </div>
          </div>

          {/* Right Column: Auth Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            {children}
          </div>
        </div>
      </main>

      {/* Footer Space / Bottom Padding */}
      <footer className="relative z-10 w-full py-2"></footer>
    </div>
  );
}
