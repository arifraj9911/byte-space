import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "muted" | "outline" | "white";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "muted",
  size = "md",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs",
  };

  const variantStyles = {
    primary: "bg-primary-light text-primary font-semibold",
    accent: "bg-accent text-secondary font-semibold",
    muted: "bg-gray-100 text-muted hover:bg-gray-200 border border-transparent",
    outline: "border border-border text-muted hover:border-gray-400 bg-white",
    white: "bg-white/90 backdrop-blur text-secondary shadow-sm",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
