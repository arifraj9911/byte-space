"use client";

import React, { useState } from "react";
import { COURSE_FILTERS } from "@/data/landingData";

export interface CourseFilterProps {
  activeFilter?: string;
  onSelectFilter?: (filter: string) => void;
}

export default function CourseFilter({
  activeFilter = "Featured",
  onSelectFilter,
}: CourseFilterProps) {
  const [selected, setSelected] = useState(activeFilter);

  const handleSelect = (filter: string) => {
    setSelected(filter);
    if (onSelectFilter) {
      onSelectFilter(filter);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-4xl mx-auto my-8">
      {COURSE_FILTERS.map((filter) => {
        const isActive = selected === filter;
        return (
          <button
            key={filter}
            onClick={() => handleSelect(filter)}
            className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-accent text-secondary font-semibold shadow-sm scale-105"
                : "bg-white text-muted hover:text-secondary hover:border-gray-400 border border-border"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
