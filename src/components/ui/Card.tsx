import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 ${
        hoverEffect ? "hover:shadow-lg hover:-translate-y-1 hover:border-gray-300" : "shadow-sm"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
