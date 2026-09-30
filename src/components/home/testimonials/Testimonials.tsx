import React from "react";
import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_DATA } from "@/data/landingData";

import Review1 from "@/assets/images/reviews/review1.svg";
import Review2 from "@/assets/images/reviews/review2.svg";
import Review3 from "@/assets/images/reviews/review3.svg";

const avatars = [Review1, Review2, Review3];

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-white">
      {/* Background Ambient Glows matching the design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Right / Top-Right Radiant Lime Glow */}
        <div
          className="absolute -top-[15%] -right-[15%] sm:-right-[10%] w-[550px] sm:w-[700px] lg:w-[850px] h-[550px] sm:h-[700px] lg:h-[850px] rounded-full blur-[100px] sm:blur-[130px] "
          style={{
            background:
              "radial-gradient(circle, rgba(205, 255, 0, 0.45) 0%, rgba(226, 253, 55, 0.25) 45%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Center-Top Soft Lime Ambient */}
        <div
          className="absolute -top-[10%] left-[45%] -translate-x-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full blur-[90px] sm:blur-[120px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 251, 32, 0.35) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Bottom-Left Soft Sky-Blue Radial Glow */}
        <div
          className="absolute -bottom-[20%] -left-[15%] sm:-left-[8%] w-[480px] sm:w-[600px] lg:w-[750px] h-[480px] sm:h-[600px] lg:h-[750px] rounded-full blur-[100px] sm:blur-[130px] opacity-50 sm:opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, rgba(191, 219, 254, 0.3) 45%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Top Header: Title on Left, Description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-secondary tracking-tight leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              avatarSrc={avatars[idx % avatars.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
