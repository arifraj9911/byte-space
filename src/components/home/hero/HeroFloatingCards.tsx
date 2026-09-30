import React from "react";
import Image from "next/image";
import Review1 from "@/assets/images/reviews/review1.svg";
import Review2 from "@/assets/images/reviews/review2.svg";
import Review3 from "@/assets/images/reviews/review3.svg";
import Skill1 from "@/assets/images/skills/skill_img1.svg";
import Skill2 from "@/assets/images/skills/skill_img2.svg";

const heroAvatars = [Review1, Review2, Review3, Skill1, Skill2];

export function UiUxCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl px-5 py-3.5 border border-white/80 backdrop-blur-sm ${className}`}
    >
      <div className="text-xs sm:text-sm font-medium text-secondary whitespace-nowrap">
        UI/UX Design
      </div>
      <div className="text-[10px] sm:text-xs text-muted font-light mt-0.5 whitespace-nowrap">
        200 Courses • 1000+ Students
      </div>
    </div>
  );
}

export function LearningProgressCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-white/80 min-w-[170px] sm:min-w-[195px] backdrop-blur-sm ${className}`}
    >
      <div className="text-xs text-muted font-light mb-1 whitespace-nowrap">
        Learning Progress
      </div>
      <div className="text-2xl sm:text-3xl font-medium text-secondary mb-2">
        55%
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="bg-accent h-full w-[55%] rounded-full transition-all duration-500" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl shadow-black/5 px-4 py-3 border border-white/80 min-w-[190px] backdrop-blur-sm ${className}`}
    >
      <div className="text-sm font-medium text-[#0F172A] mb-1 leading-snug">
        Happy Students
      </div>
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="text-sm font-medium text-[#0F172A] leading-none">
          4.5
        </span>
        <span className="text-sm font-light text-[#64748B] leading-none">
          (240)
        </span>
        <svg
          className="w-3 h-3 text-[#F59E0B] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div className="flex items-center -space-x-1">
        {heroAvatars.map((avatar, idx) => (
          <div
            key={idx}
            style={{ zIndex: idx + 1 }}
            className="relative w-7 h-7 rounded-full ring-[1.5px] ring-white overflow-hidden bg-gray-100 flex-shrink-0"
          >
            <Image
              src={avatar}
              alt={`Student ${idx + 1}`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div
          style={{ zIndex: 0 }}
          className="relative w-8 h-8 rounded-full bg-accent text-black font-medium ring-[1.5px] ring-white flex items-center justify-center flex-shrink-0 text-[11px] pl-1.5"
        >
          <span>2K+</span>
        </div>
      </div>
    </div>
  );
}
