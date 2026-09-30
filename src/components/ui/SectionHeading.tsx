import React from "react";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className}`}>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-secondary leading-snug w-auto md:w-3/5 ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-relaxed font-light ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
