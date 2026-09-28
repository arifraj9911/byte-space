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
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-white via-lime-50/40 to-blue-50/30">
      <Container>
        {/* Section Top Header: Title on Left, Description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary tracking-tight leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
