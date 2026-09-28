import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { GROWTH_STATS } from "@/data/landingData";
import { LearningProgressCard } from "../hero/HeroFloatingCards";
import Card from "@/components/ui/Card";

import BannerMan from "@/assets/images/hero/banner_man.svg";
import CircleColored from "@/assets/images/circle_colored.svg";
import Skill1 from "@/assets/images/skills/skill_img1.svg";

export default function GrowthStats() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Copy, and Stats */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted font-normal leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Stats Counters */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              {GROWTH_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition with Student & Floating Badges */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Decorative Spiral / Ring Ribbon */}
            <div className="absolute -top-10 -right-4 sm:-right-8 w-40 sm:w-56 opacity-90 pointer-events-none -z-0">
              <Image
                src={CircleColored}
                alt="decorative ribbon"
                className="w-full h-auto"
              />
            </div>

            {/* Main Character Image */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              <Image
                src={BannerMan}
                alt="Professional student learning"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating Mini Course Card (Left) */}
            <div className="absolute bottom-6 -left-2 sm:left-4 z-20 w-48 sm:w-56 shadow-2xl">
              <Card className="p-2.5 sm:p-3 bg-white/95 backdrop-blur-md rounded-xl border border-white">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-2">
                  <Image src={Skill1} alt="Figma course preview" fill className="object-cover" />
                  <div className="absolute bottom-1 left-1 flex gap-1 text-[8px] text-white bg-black/60 px-1.5 py-0.5 rounded-full">
                    <span>17 Lessons</span>
                    <span>2h 16m</span>
                  </div>
                </div>
                <div className="text-xs font-bold text-secondary truncate">Learn Figma from...</div>
                <div className="text-[10px] text-muted mb-1">by purepearl studio</div>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-gray-100">
                  <span className="text-muted text-[10px]">Beginner</span>
                  <span className="font-bold text-primary">$25<span className="text-[9px] text-muted font-normal">/lifetime</span></span>
                </div>
              </Card>
            </div>

            {/* Floating Progress Card (Right) */}
            <div className="absolute top-1/4 -right-2 sm:right-4 z-20 shadow-2xl">
              <LearningProgressCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
