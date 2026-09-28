import React from "react";

export interface AvatarGroupProps {
  avatars?: string[];
  extraCount?: string;
  size?: "sm" | "md";
  className?: string;
}

export default function AvatarGroup({
  avatars = [],
  extraCount = "26+",
  size = "sm",
  className = "",
}: AvatarGroupProps) {
  const sizeMap = {
    sm: "w-6 h-6 text-[10px]",
    md: "w-8 h-8 text-xs",
  };

  // Default fallback avatar colors if images are not provided
  const placeholderColors = ["bg-blue-400", "bg-emerald-400", "bg-amber-400", "bg-rose-400"];

  return (
    <div className={`inline-flex items-center -space-x-2 ${className}`}>
      {(avatars.length > 0 ? avatars.slice(0, 4) : [0, 1, 2]).map((avatar, idx) => (
        <div
          key={idx}
          className={`${sizeMap[size]} rounded-full ring-2 ring-white overflow-hidden flex items-center justify-center font-bold text-white shadow-xs ${
            typeof avatar === "string" ? "bg-gray-200" : placeholderColors[idx % placeholderColors.length]
          }`}
        >
          {typeof avatar === "string" ? (
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <span className="opacity-90">{String.fromCharCode(65 + idx)}</span>
          )}
        </div>
      ))}

      {extraCount && (
        <div
          className={`${sizeMap[size]} rounded-full bg-accent text-secondary font-bold ring-2 ring-white flex items-center justify-center shadow-xs px-1`}
        >
          <span>{extraCount}</span>
        </div>
      )}
    </div>
  );
}
