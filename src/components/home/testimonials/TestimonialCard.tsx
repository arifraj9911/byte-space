import React from "react";
import Image from "next/image";
import { TestimonialItem } from "@/types";

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  avatarSrc: any;
}

export default function TestimonialCard({
  testimonial,
  avatarSrc,
}: TestimonialCardProps) {
  const quoteText = testimonial.quote.startsWith('"')
    ? testimonial.quote
    : `"${testimonial.quote}"`;

  return (
    <div className="flex flex-col items-start p-7 sm:p-8 lg:p-9 bg-white rounded-[26px] sm:rounded-[30px] border border-gray-100/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 h-full">
      {/* 1. Avatar - Top Left Circle */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 mb-6">
        <Image
          src={avatarSrc}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 2. User Name */}
      <h3 className="font-bold text-secondary text-base sm:text-lg tracking-tight leading-tight">
        {testimonial.name}
      </h3>

      {/* 3. User Role */}
      <span className="text-sm font-normal text-primary mt-1 mb-6">
        {testimonial.role}
      </span>

      {/* 4. Quote */}
      <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-[1.65] flex-grow">
        {quoteText}
      </p>
    </div>
  );
}
