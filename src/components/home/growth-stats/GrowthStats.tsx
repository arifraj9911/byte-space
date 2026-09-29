import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { GROWTH_STATS, COURSES_DATA } from "@/data/landingData";
import { LearningProgressCard } from "../hero/HeroFloatingCards";
import CourseCard from "../courses/CourseCard";

import BannerMan from "@/assets/images/hero/banner_man.svg";
import CurveRight from "@/assets/images/hero/curve_right.svg";
import Skill1 from "@/assets/images/skills/skill_img1.svg";

export default function GrowthStats() {
  return (
    <section
      className="relative w-full py-16 sm:py-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 750px 420px at 40% -8%, rgba(212, 251, 32, 0.48) 0%, rgba(212, 251, 32, 0.16) 52%, transparent 80%),
          radial-gradient(ellipse 550px 480px at -6% 52%, rgba(195, 220, 255, 0.55) 0%, rgba(195, 220, 255, 0.12) 55%, transparent 78%),
          radial-gradient(ellipse 500px 420px at 98% 12%, rgba(210, 228, 255, 0.45) 0%, rgba(210, 228, 255, 0.08) 55%, transparent 75%),
          #FFFFFF
        `,
      }}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy, and Stats */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-secondary tracking-tight leading-[1.2] max-w-lg">
              <span className="block">Your Path to Professional</span>
              <span>Growth Starts Here!</span>
            </h2>

            <p className="mt-6 text-sm sm:text-[15px] text-muted font-light leading-relaxed max-w-md">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* 3 Stats Counters */}
            <div className="flex items-center gap-10 sm:gap-14 mt-10">
              {GROWTH_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-medium text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-light text-muted mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition with Student & Floating Badges */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            {/* Unified Visual Cluster */}
            <div className="relative w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[510px] select-none">
              {/* Decorative Lime Spring (CurveRight) */}
              <div className="absolute top-[8%] sm:top-[14%] right-0 w-28 sm:w-32 md:w-40 z-[9999] pointer-events-none">
                <Image
                  src={CurveRight}
                  alt="decorative lime curve"
                  className="w-full h-auto drop-shadow-md"
                />
              </div>

              {/* Top-Left Course Card (Behind Student) */}
              <div className="absolute top-0 left-0 z-[1] w-[62%] sm:w-[60%] max-w-[290px] shadow-2xl shadow-black/8 pointer-events-none">
                <CourseCard
                  course={COURSES_DATA[0]}
                  imageSrc={Skill1}
                  hoverEffect={false}
                  className="border-slate-100"
                />
              </div>

              {/* Middle-Right Learning Progress Card (Behind Laptop) */}
              <div className="absolute top-[43%] sm:top-[45%] right-[1%] sm:right-[3%] z-[2] shadow-2xl shadow-black/8 pointer-events-none z-[999]">
                <LearningProgressCard className="border border-white/80" />
              </div>

              {/* Foreground Student Image */}
              <div className="relative z-10 w-[84%] sm:w-[95%] max-w-[450px] ml-[10%] sm:ml-[9%] mt-11 sm:mt-12">
                <Image
                  src={BannerMan}
                  alt="Professional student learning"
                  width={722}
                  height={515}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
