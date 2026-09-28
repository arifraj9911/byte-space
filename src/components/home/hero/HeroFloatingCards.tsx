import React from "react";
import Rating from "@/components/ui/Rating";
import AvatarGroup from "@/components/ui/AvatarGroup";

export function UiUxCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-3.5 sm:p-4 border border-white/60 flex items-center gap-3 backdrop-blur-sm ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary font-bold">
        <svg
          className="w-5 h-5 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </div>
      <div>
        <div className="text-xs sm:text-sm font-bold text-secondary">UI/UX Design</div>
        <div className="text-[10px] sm:text-xs text-muted">200 Courses • 1000+ Students</div>
      </div>
    </div>
  );
}

export function LearningProgressCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-white/60 min-w-[160px] sm:min-w-[180px] backdrop-blur-sm ${className}`}
    >
      <div className="text-xs text-muted font-medium mb-1">Learning Progress</div>
      <div className="text-2xl sm:text-3xl font-extrabold text-secondary mb-2">55%</div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="bg-accent h-full w-[55%] rounded-full transition-all duration-500" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-3.5 sm:p-4 border border-white/60 min-w-[180px] backdrop-blur-sm ${className}`}
    >
      <div className="text-xs font-bold text-secondary mb-1">Happy Students</div>
      <div className="mb-2">
        <Rating score={4.5} count={245} />
      </div>
      <AvatarGroup extraCount="2K+" size="sm" />
    </div>
  );
}
