import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { CourseItem } from "@/types";

import Review1 from "@/assets/images/reviews/review1.svg";
import Review2 from "@/assets/images/reviews/review2.svg";
import Review3 from "@/assets/images/reviews/review3.svg";
import Skill1 from "@/assets/images/skills/skill_img1.svg";

const courseAvatars = [Review2, Skill1, Review1, Review3];

export interface CourseCardProps {
  course: CourseItem;
  imageSrc?: string | any;
}

export default function CourseCard({ course, imageSrc }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full bg-white rounded-2xl border border-gray-200/80 p-3.5 sm:p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {/* Thumbnail (lessons, hours, comments are baked inside the SVG image) */}
      <div className="relative w-full aspect-[341/196] rounded-xl overflow-hidden bg-gray-100 mb-3.5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="font-bold text-secondary text-[16px] leading-snug truncate hover:text-primary transition-colors flex-1"
            title={course.title}
          >
            {course.title}
          </h3>

          <div className="flex items-center gap-1 text-sm font-normal text-gray-400 shrink-0">
            <span>{course.rating ? course.rating.toFixed(1) : "4.5"}</span>
            <svg
              className="w-3.5 h-3.5 text-gray-300 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Studio / Author */}
        <p className="text-xs text-gray-400 font-normal mb-3.5">
          by{" "}
          <span className="text-primary font-medium cursor-pointer hover:underline">
            {course.instructor || "purepearl studio"}
          </span>
        </p>

        {/* Level & Enrolled Avatars */}
        <div className="flex items-center justify-start mt-auto mb-3 gap-2">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 bg-gray-100/90 rounded-full px-2.5 py-1 text-xs text-gray-600 font-normal">
            <svg
              className="w-3 h-3 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="14" width="3.5" height="7" rx="0.5" />
              <rect x="9.5" y="9" width="3.5" height="12" rx="0.5" />
              <rect x="16" y="4" width="3.5" height="17" rx="0.5" />
            </svg>
            <span>{course.level || "Beginner"}</span>
          </div>

          {/* Enrolled Avatars */}
          <div className="flex items-center -space-x-1.5">
            {courseAvatars.map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-6 h-6 rounded-full ring-[1.5px] ring-white overflow-hidden bg-gray-200 shrink-0"
              >
                <Image
                  src={avatar}
                  alt="Enrolled student"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="relative w-6 h-6 rounded-full bg-accent text-secondary font-bold ring-[1.5px] ring-white flex items-center justify-center shrink-0 text-[9px]">
              <span>{course.enrolledStudentsCount || "26+"}</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold text-primary">
            ${course.price}
          </span>
          <span className="text-xs text-gray-400 font-normal">
            /{course.billingPeriod}
          </span>
        </div>
      </div>
    </Card>
  );
}
