import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { COURSE_MANAGEMENT_FEATURES } from "@/data/landingData";
import { HappyStudentsCard } from "../hero/HeroFloatingCards";

import WomenImage from "@/assets/images/women.svg";
import CurveLeft from "@/assets/images/hero/curve_left.svg";

export default function CourseManagement() {
  return (
    <section
      className="relative w-full py-12 sm:py-16 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 750px 600px at -5% 92%, rgba(212, 251, 32, 0.85) 0%, rgba(226, 251, 122, 0.65) 28%, rgba(236, 249, 181, 0.3) 55%, transparent 75%),
          radial-gradient(ellipse 650px 520px at 105% 90%, rgba(203, 213, 246, 0.75) 0%, rgba(203, 213, 246, 0.28) 48%, transparent 75%),
          radial-gradient(ellipse 600px 480px at -5% 8%, rgba(215, 223, 247, 0.7) 0%, rgba(215, 223, 247, 0.25) 45%, transparent 72%),
          #FFFFFF
        `,
      }}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual with Instructor & Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            {/* Unified Visual Cluster */}
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[540px] select-none">
              {/* Floating Revenue Badge 1 (Top Left, Behind Instructor: z-0) */}
              <div className="absolute top-4 sm:top-5 left-0 z-0 w-[155px] sm:w-[272px] bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-blue-900/25 border border-white/20 backdrop-blur-sm pointer-events-none">
                <div className="text-[11px] sm:text-xs font-light text-white/90">
                  Total Revenue
                </div>
                <div className="text-[9px] sm:text-[10px] font-light text-white/70 mt-0.5">
                  July 1-28
                </div>
                <div className="text-lg sm:text-xl font-medium text-white tracking-tight mt-1">
                  $120.29
                </div>
                <div className="w-full bg-white/25 h-1.5 sm:h-2 rounded-full overflow-hidden mt-2.5">
                  <div className="bg-accent h-full w-[65%] rounded-full" />
                </div>
              </div>

              {/* Floating Revenue Badge 2 (Middle Left, Behind Instructor: z-0) */}
              <div className="absolute top-[37%] sm:top-[39%] left-0 z-0 w-[155px] sm:w-[172px] bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-blue-900/25 border border-white/20 backdrop-blur-sm pointer-events-none">
                <div className="text-[11px] sm:text-xs font-light text-white/90">
                  Year to Date
                </div>
                <div className="text-[9px] sm:text-[10px] font-light text-white/70 mt-0.5">
                  2023
                </div>
                <div className="text-lg sm:text-xl font-medium text-white tracking-tight mt-1">
                  $1,200.38
                </div>
                <div className="mt-2">
                  <span className="inline-flex items-center bg-accent text-secondary text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                    +12$
                  </span>
                </div>
              </div>

              {/* Decorative Lime Spring Curve (CurveLeft, Right of Instructor: z-0) */}
              <div className="absolute top-[22%] sm:top-[24%] right-[2%] sm:right-[4%] lg:right-[5%] w-32 sm:w-36 md:w-40 lg:w-44 z-50 pointer-events-none">
                <Image
                  src={CurveLeft}
                  alt="decorative lime curve"
                  className="w-full h-auto drop-shadow-md"
                />
              </div>

              {/* Instructor Image (Middle Layer: z-10) */}
              <div className="relative z-10 w-[74%] sm:w-[78%] max-w-[390px] ml-auto mr-[6%] sm:mr-[8%]">
                <Image
                  src={WomenImage}
                  alt="Course creator woman"
                  width={579}
                  height={719}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Happy Students Card (Bottom Right, Foreground: z-20) */}
              <div className="absolute bottom-4 sm:bottom-6 right-0 sm:right-2 z-20 shadow-2xl shadow-black/10 pointer-events-none">
                <HappyStudentsCard />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and Feature Checklist */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary tracking-tight leading-[1.2] max-w-lg">
              <span className="block">Create & Manage</span>
              <span>Courses Easily.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted font-light leading-relaxed max-w-md">
              <strong className="text-secondary font-medium">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
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
                  <span className="text-sm sm:text-base font-medium text-secondary">
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
