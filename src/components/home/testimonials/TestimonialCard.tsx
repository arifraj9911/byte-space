import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { TestimonialItem } from "@/types";

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  avatarSrc: any;
}

export default function TestimonialCard({
  testimonial,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col p-6 sm:p-8 bg-white/95 backdrop-blur rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
      {/* User profile */}
      <div className="flex items-center gap-3.5 mb-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 ring-2 ring-primary/10">
          <Image
            src={avatarSrc}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-secondary text-base leading-tight">
            {testimonial.name}
          </h4>
          <span className="text-xs font-semibold text-primary">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm text-secondary-muted font-normal leading-relaxed flex-grow">
        {testimonial.quote}
      </p>
    </Card>
  );
}
