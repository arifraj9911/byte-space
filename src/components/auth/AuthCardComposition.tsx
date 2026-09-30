import React from "react";
import Image from "next/image";
import CourseCard from "@/components/home/courses/CourseCard";
import { COURSES_DATA } from "@/data/landingData";

// Course thumbnails
import SkillImg2 from "@/assets/images/skills/skill_img2.svg";
import SkillImg3 from "@/assets/images/skills/skill_img3.svg";

// 3D Floating Assets
import CircleColored from "@/assets/images/auth_image/circle_colored.svg";
import PyramidColored from "@/assets/images/auth_image/pyramid_colored.svg";
import CurveWhite from "@/assets/images/auth_image/curve_white.svg";

// Student Avatars for Happy Students Badge
import Review1 from "@/assets/images/reviews/review1.svg";
import Review2 from "@/assets/images/reviews/review2.svg";
import Review3 from "@/assets/images/reviews/review3.svg";
import Skill1 from "@/assets/images/skills/skill_img1.svg";

const badgeAvatars = [Review1, Review2, Review3, Skill1, SkillImg2];

function AuthHappyStudentsBadge() {
  return (
    <div className="bg-[#D4FB20] rounded-2xl shadow-xl px-4 py-3 min-w-[210px] sm:min-w-[230px] border border-white/20 select-none">
      <div className="text-sm font-semibold text-secondary mb-0.5 leading-snug">
        Happy Students
      </div>
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="text-xs sm:text-sm font-semibold text-secondary leading-none">
          4.5
        </span>
        <span className="text-xs sm:text-sm font-normal text-secondary/70 leading-none">
          (240)
        </span>
        {/* Blue Star matching image */}
        <svg
          className="w-3.5 h-3.5 text-primary fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div className="flex items-center -space-x-1.5">
        {badgeAvatars.map((avatar, idx) => (
          <div
            key={idx}
            style={{ zIndex: idx + 1 }}
            className="relative w-7 h-7 rounded-full ring-[1.5px] ring-white overflow-hidden bg-gray-100 flex-shrink-0"
          >
            <Image
              src={avatar}
              alt={`Student ${idx + 1}`}
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div
          style={{ zIndex: badgeAvatars.length + 1 }}
          className="relative w-7 h-7 rounded-full bg-[#1E293B] text-white font-medium ring-[1.5px] ring-white flex items-center justify-center flex-shrink-0 text-[10px]"
        >
          <span>2K+</span>
        </div>
      </div>
    </div>
  );
}

export default function AuthCardComposition() {
  const course2 = COURSES_DATA[1]; // Build Digital Asset
  const course3 = COURSES_DATA[2]; // the Power of Big Data

  return (
    <div className="relative w-fit select-none pt-4 pb-14 pr-12 sm:pr-14">
      {/* 1. Background Left Course Card ("Build Digital Asset") - Aligned to left margin */}
      <div className="absolute left-0 top-10 sm:top-28 w-[270px] sm:w-[300px] z-10 pointer-events-none">
        <CourseCard
          course={course2}
          imageSrc={SkillImg2}
          hoverEffect={false}
          className="shadow-xl"
        />

        {/* 3D Lime Pyramid: Anchored to bottom-left corner of Card 2 */}
        <div className="absolute -bottom-8 -left-8 sm:-bottom-18 sm:-left-6 w-28 sm:w-34 z-40 pointer-events-none drop-shadow-xl">
          <Image
            src={PyramidColored}
            alt="decorative 3D pyramid"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* 2. Foreground Main Center Course Card ("the Power of Big Data") - Shifted right */}
      <div className="relative ml-[85px] sm:ml-[105px] w-[290px] sm:w-full z-20">
        {/* 3D Lime Donut: Sits on the seam between Card 2 and Card 1's thumbnail */}
        <div className="absolute -top-3 -left-12 sm:top-8 sm:-left-18 w-24 sm:w-30 z-40 pointer-events-none drop-shadow-lg">
          <Image
            src={CircleColored}
            alt="decorative 3D donut"
            className="w-full h-auto"
          />
        </div>

        <CourseCard
          course={course3}
          imageSrc={SkillImg3}
          hoverEffect={false}
          className="shadow-2xl ring-1 ring-black/5"
        />

        {/* 3D White Squiggle: Floats on the right edge of Card 1 and overlaps Happy Students */}
        <div className="absolute -right-8 sm:-right-10 bottom-8 sm:-bottom-20 w-22 sm:w-36 z-40 pointer-events-none drop-shadow-md">
          <Image
            src={CurveWhite}
            alt="decorative 3D white curve"
            className="w-full h-auto"
          />
        </div>

        {/* Overlapping Lime "Happy Students" Card: Anchored to bottom-right of Card 1 */}
        <div className="absolute -bottom-24 -right-8 sm:-bottom-36 sm:-right-10 z-30">
          <AuthHappyStudentsBadge />
        </div>
      </div>
    </div>
  );
}
