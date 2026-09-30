"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";
import { COURSES_DATA } from "@/data/landingData";

import Skill1 from "@/assets/images/skills/skill_img1.svg";
import Skill2 from "@/assets/images/skills/skill_img2.svg";
import Skill3 from "@/assets/images/skills/skill_img3.svg";
import Skill4 from "@/assets/images/skills/skill_img4.svg";
import Skill5 from "@/assets/images/skills/skill_img5.svg";
import Skill6 from "@/assets/images/skills/skill_img6.svg";

const skillImages = [Skill1, Skill2, Skill3, Skill4, Skill5, Skill6];

export default function CourseShowcase() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  return (
    <section className="w-full bg-white py-12 sm:py-20">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          align="center"
        />

        <CourseFilter
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
        />

        {/* 6 Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {COURSES_DATA.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              imageSrc={skillImages[idx % skillImages.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
