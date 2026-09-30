"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Svg404 from "@/assets/images/404.svg";

export default function NotFoundHero() {
  return (
    <section className="relative w-full bg-primary flex flex-col items-center justify-center overflow-hidden py-14 sm:py-18 md:py-24 lg:py-28 min-h-[640px] lg:min-h-[calc(100vh-80px)] text-white">
      {/* Background Grid Pattern matching 404_page.svg (120px grid at 0.12 opacity) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)`,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Large 404 Illustration with lime-to-white gradient */}
        <div className="w-full flex justify-center pointer-events-none select-none">
          <Image
            src={Svg404}
            alt="404 Error"
            priority
            className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[886px] h-auto transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Text Container overlapping the lower fading gradient of the 404 number */}
        <div className="-mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32 w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18] drop-shadow-sm">
            The page you are looking <br className="hidden sm:inline" />
            for doesn&apos;t exist
          </h1>

          <p className="text-[#E5E6E8] text-sm sm:text-base md:text-[17px] font-normal mt-5 sm:mt-6 max-w-xl mx-auto leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Action Button: Back to Home */}
          <Link href="/" className="inline-block mt-8 sm:mt-9">
            <button className="h-[46px] px-8 rounded-full bg-[#D4FB20] text-[#0A0A0A] font-semibold text-sm transition-all duration-300 hover:bg-[#c2e817] hover:shadow-lg hover:shadow-[#D4FB20]/25 hover:scale-105 active:scale-95 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
