import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { COURSE_MANAGEMENT_FEATURES } from "@/data/landingData";
import { HappyStudentsCard } from "../hero/HeroFloatingCards";

import WomenImage from "@/assets/images/women.svg";
import CircleColored from "@/assets/images/circle_colored.svg";

export default function CourseManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Instructor & Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
            {/* Decorative Ribbon Accent */}
            <div className="absolute -top-8 -left-4 sm:left-2 w-48 sm:w-64 opacity-80 pointer-events-none -z-0">
              <Image src={CircleColored} alt="decorative spiral" className="w-full h-auto" />
            </div>

            {/* Instructor Image */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md">
              <Image
                src={WomenImage}
                alt="Course creator woman"
                width={450}
                height={520}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Floating Revenue Badge 1 (Top Left) */}
            <div className="absolute top-6 left-0 sm:left-4 z-20 bg-primary text-white p-3.5 sm:p-4 rounded-2xl shadow-xl min-w-[130px] sm:min-w-[150px]">
              <div className="text-[11px] font-medium opacity-90">Total Revenue</div>
              <div className="text-[9px] opacity-75">July 1-28</div>
              <div className="text-lg sm:text-xl font-extrabold mt-1">$120.29</div>
            </div>

            {/* Floating Revenue Badge 2 (Middle Left) */}
            <div className="absolute top-1/2 -left-2 sm:left-2 z-20 bg-primary text-white p-3.5 sm:p-4 rounded-2xl shadow-xl min-w-[140px] sm:min-w-[160px]">
              <div className="text-[11px] font-medium opacity-90">Year to Date</div>
              <div className="text-[9px] opacity-75">2023</div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="text-lg sm:text-xl font-extrabold">$1,200.38</span>
                <span className="bg-accent text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +10%
                </span>
              </div>
            </div>

            {/* Floating Happy Students Card (Bottom Right) */}
            <div className="absolute bottom-4 right-0 sm:right-6 z-20 shadow-2xl">
              <HappyStudentsCard />
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and Feature Checklist */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted font-normal leading-relaxed">
              <strong className="text-secondary font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 space-y-4">
              {COURSE_MANAGEMENT_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-secondary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
