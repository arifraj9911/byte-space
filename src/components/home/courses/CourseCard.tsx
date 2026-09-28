import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Rating from "@/components/ui/Rating";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { CourseItem } from "@/types";

export interface CourseCardProps {
  course: CourseItem;
  imageSrc?: string | any;
}

export default function CourseCard({ course, imageSrc }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full bg-white rounded-2xl border border-border p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Thumbnail with overlay badges */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-4">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={course.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white font-medium">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
              {course.lessonsCount} Lessons
            </span>
            <span className="bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
              {course.duration}
            </span>
            <span className="bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px]">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-1">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-secondary text-base leading-snug line-clamp-1 hover:text-primary transition-colors">
            {course.title}
          </h3>
          <Rating score={course.rating} />
        </div>

        {/* Studio / Author */}
        <p className="text-xs text-muted font-normal mb-4">
          {course.instructorStudio}
        </p>

        {/* Level & Enrolled Avatars */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto mb-3">
          <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
            {/* Level signal icon */}
            <svg
              className="w-3.5 h-3.5 text-muted"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="14" width="3.5" height="7" rx="1" />
              <rect x="10" y="9" width="3.5" height="12" rx="1" />
              <rect x="17" y="4" width="3.5" height="17" rx="1" opacity="0.3" />
            </svg>
            <span>{course.level}</span>
          </div>

          <AvatarGroup extraCount={course.enrolledStudentsCount} size="sm" />
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-gray-100 flex items-baseline gap-1">
          <span className="text-lg font-bold text-primary">${course.price}</span>
          <span className="text-xs text-muted">/{course.billingPeriod}</span>
        </div>
      </div>
    </Card>
  );
}
