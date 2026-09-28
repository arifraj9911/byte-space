import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs font-semibold",
    md: "px-6 py-2.5 text-sm font-semibold",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-sm hover:shadow",
    accent:
      "bg-accent text-secondary hover:bg-accent-hover focus:ring-accent shadow-sm hover:shadow-md font-semibold",
    outline:
      "border border-border text-foreground hover:bg-muted-bg focus:ring-primary",
    ghost:
      "text-foreground hover:bg-black/5 dark:hover:bg-white/10 focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-muted focus:ring-secondary",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
