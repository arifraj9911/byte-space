"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";
import {
  UiUxCard,
  LearningProgressCard,
  HappyStudentsCard,
} from "./HeroFloatingCards";

import BannerMan from "@/assets/images/hero/banner_man.svg";
import MiddleEllipse from "@/assets/images/hero/middle_ellipse.svg";
import CircleShape from "@/assets/images/hero/circle.svg";
import CurveWhiteSmall from "@/assets/images/hero/curve_white_small.svg";
import CurveWhiteLarge from "@/assets/images/hero/curve_white_large.svg";
import TriangleWhite from "@/assets/images/hero/triangle_white.svg";
import CylinderCone from "@/assets/images/cylinder_cone.svg";
import CornerTriangle from "@/assets/images/corner_triangle.svg";

export default function Hero() {
  return (
    <section className="relative w-full bg-primary overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating 3D Geometric Accents */}
      <div className="absolute -top-10 -left-10 w-44 md:w-64 opacity-90 pointer-events-none animate-pulse duration-1000">
        <Image src={CornerTriangle} alt="decorative 3D shape" className="w-full h-auto" />
      </div>

      <div className="absolute top-12 right-2 md:right-12 w-32 md:w-48 opacity-90 pointer-events-none">
        <Image src={CylinderCone} alt="decorative cone" className="w-full h-auto" />
      </div>

      <div className="absolute top-1/2 left-4 md:left-12 w-20 md:w-32 opacity-80 pointer-events-none">
        <Image src={CurveWhiteSmall} alt="decorative curve" className="w-full h-auto" />
      </div>

      <div className="absolute top-1/3 right-8 md:right-28 w-24 md:w-36 opacity-85 pointer-events-none">
        <Image src={TriangleWhite} alt="decorative triangle" className="w-full h-auto" />
      </div>

      <div className="absolute bottom-16 right-4 md:right-16 w-24 md:w-40 opacity-80 pointer-events-none">
        <Image src={CurveWhiteLarge} alt="decorative curve" className="w-full h-auto" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Hero Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 w-full flex justify-center">
            <SearchBar onSearch={(q) => console.log("Searching for:", q)} />
          </div>

          {/* Hero Banner Composition */}
          <div className="relative mt-12 sm:mt-16 w-full max-w-2xl mx-auto flex items-center justify-center">
            {/* Backdrop Ring/Ellipse */}
            <div className="absolute -inset-4 sm:-inset-10 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[300px] sm:w-[460px] md:w-[540px] h-[300px] sm:h-[460px] md:h-[540px] rounded-full border-[18px] sm:border-[28px] border-accent/90 opacity-90 shadow-2xl" />
            </div>

            {/* Main Student Image */}
            <div className="relative z-10 w-[280px] sm:w-[380px] md:w-[440px]">
              <Image
                src={BannerMan}
                alt="Student with laptop"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Card 1: UI/UX Design (Top Left) */}
            <div className="absolute top-4 -left-2 sm:-left-12 z-20 transition-transform hover:scale-105">
              <UiUxCard />
            </div>

            {/* Floating Card 2: Learning Progress (Top Right) */}
            <div className="absolute top-10 -right-2 sm:-right-12 z-20 transition-transform hover:scale-105">
              <LearningProgressCard />
            </div>

            {/* Floating Card 3: Happy Students (Bottom Left) */}
            <div className="absolute bottom-6 -left-4 sm:-left-16 z-20 transition-transform hover:scale-105">
              <HappyStudentsCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
