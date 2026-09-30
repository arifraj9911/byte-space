import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  endAdornment?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = "",
      containerClassName = "",
      endAdornment,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className={`w-full flex flex-col ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs sm:text-sm font-medium text-secondary mb-2 select-none"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            ref={ref}
            id={inputId}
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-white text-secondary text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${
              endAdornment ? "pr-11" : ""
            } ${
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            } ${className}`}
            {...props}
          />
          {endAdornment && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
              {endAdornment}
            </div>
          )}
        </div>
        {error && (
          <span className="mt-1 text-xs text-red-500 font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
