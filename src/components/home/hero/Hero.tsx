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
import BannerLeftCurve from "@/assets/images/hero/banner_left_curve.svg";
import CurveWhiteSmall from "@/assets/images/hero/curve_white_small.svg";
import CircleShape from "@/assets/images/hero/circle.svg";
import CornerTriangle from "@/assets/images/hero/corner_triangle.svg";
import TriangleWhite from "@/assets/images/hero/triangle_white.svg";
import CurveWhiteLarge from "@/assets/images/hero/curve_white_large.svg";

export default function Hero() {
  return (
    <section className="relative w-full bg-primary overflow-hidden pt-6 pb-0 md:pt-10">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px)`,
          backgroundSize: "85px 85px",
        }}
      />

      {/* Left Top: Banner Left Curve (Lime green spring, cut off on left edge) */}
      <div className="absolute left-0 top-4 sm:top-8 md:top-12 w-40 sm:w-48 md:w-52 lg:w-60 pointer-events-none select-none z-10">
        <Image
          src={BannerLeftCurve}
          alt="decorative green left curve"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Left Middle: White Curve Small (Floats below the lime curve) */}
      <div className="absolute left-4 sm:left-10 md:left-16 lg:left-24 top-[40%] sm:top-[42%] md:top-[44%] w-20 sm:w-28 md:w-36 lg:w-40 pointer-events-none select-none z-10">
        <Image
          src={CurveWhiteSmall}
          alt="decorative white small curve"
          className="w-full h-auto"
        />
      </div>

      {/* Left Bottom: Circle Torus/Donut (Cut off on left/bottom edge) */}
      <div className="absolute left-6 bottom-2 sm:bottom-4 md:bottom-6 w-56 sm:w-56 md:w-64 lg:w-72 pointer-events-none select-none z-50">
        <Image
          src={CircleShape}
          alt="decorative white circle donut"
          className="w-full h-auto"
        />
      </div>

      {/* Right Top: Colored Cylinder (Corner Triangle SVG, cut off on right edge) */}
      <div className="absolute right-0 top-4 sm:top-8 md:top-12 w-36 sm:w-40 md:w-48 lg:w-56 pointer-events-none select-none z-10">
        <Image
          src={CornerTriangle}
          alt="decorative colored cylinder"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Right Middle: White Triangle (Floats below colored cylinder) */}
      <div className="absolute right-6 sm:right-12 md:right-20 lg:right-28 top-[38%] sm:top-[40%] md:top-[42%] w-24 sm:w-32 md:w-38 lg:w-44 pointer-events-none select-none z-10">
        <Image
          src={TriangleWhite}
          alt="decorative white triangle"
          className="w-full h-auto"
        />
      </div>

      {/* Right Bottom: White Curve Large (Cut off on right edge) */}
      <div className="absolute right-12 bottom-4 sm:bottom-8 md:bottom-10 w-40 sm:w-48 md:w-56 lg:w-64 pointer-events-none select-none z-10">
        <Image
          src={CurveWhiteLarge}
          alt="decorative white large curve"
          className="w-full h-auto"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Hero Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 w-full flex justify-center">
            <SearchBar
              placeholder="Course, topic, creator"
              buttonText="Search"
              onSearch={(q) => console.log("Searching for:", q)}
            />
          </div>

          {/* Hero Banner Composition */}
          <div className="relative mt-8 sm:mt-12 w-full max-w-5xl mx-auto flex items-end justify-center">
            {/* Middle Ellipse (Lime Ring Backdrop behind Man) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[840px] md:w-[980px] lg:w-[980px] pointer-events-none select-none z-0">
              <Image
                src={MiddleEllipse}
                alt="Lime ring backdrop"
                priority
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {/* Main Student Image */}
            <div className="relative z-10 w-[290px] sm:w-[390px] md:w-[460px] lg:w-[600px]">
              <Image
                src={BannerMan}
                alt="Student with laptop"
                width={722}
                height={515}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
              />

              {/* Floating Card 1: UI/UX Design (Top Left) */}
              <div className="absolute top-10 sm:top-24 -left-6 sm:-left-16 md:-left-12 z-20 transition-transform hover:scale-105 text-left">
                <UiUxCard />
              </div>

              {/* Floating Card 2: Learning Progress (Top Right) */}
              <div className="absolute top-14 sm:top-28 -right-0 z-20 transition-transform hover:scale-105 text-left">
                <LearningProgressCard />
              </div>

              {/* Floating Card 3: Happy Students (Bottom Left) */}
              <div className="absolute bottom-8 sm:bottom-12 -left-8 sm:-left-20 md:-left-12 z-20 transition-transform hover:scale-105 text-left">
                <HappyStudentsCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
