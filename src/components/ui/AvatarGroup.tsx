import Image from "next/image";

export interface AvatarGroupProps {
  avatars?: any[];
  extraCount?: string;
  size?: "sm" | "md";
  className?: string;
}

export default function AvatarGroup({
  avatars = [],
  extraCount = "2K+",
  size = "sm",
  className = "",
}: AvatarGroupProps) {
  const sizeMap = {
    sm: "w-6 h-6 text-[10px]",
    md: "w-8 h-8 text-xs",
  };

  const placeholderColors = ["bg-blue-400", "bg-emerald-400", "bg-amber-400", "bg-rose-400"];

  return (
    <div className={`inline-flex items-center -space-x-1.5 ${className}`}>
      {avatars.map((avatar, idx) => (
        <div
          key={idx}
          className={`${sizeMap[size]} rounded-full ring-2 ring-white overflow-hidden flex items-center justify-center font-bold text-white shadow-xs relative bg-gray-200`}
        >
          {typeof avatar === "string" ? (
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          ) : avatar?.src ? (
            <Image src={avatar} alt="avatar" width={28} height={28} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full ${placeholderColors[idx % placeholderColors.length]} flex items-center justify-center`}>
              <span className="opacity-90">{String.fromCharCode(65 + idx)}</span>
            </div>
          )}
        </div>
      ))}

      {extraCount && (
        <div
          className={`${sizeMap[size]} rounded-full bg-accent text-secondary font-bold ring-2 ring-white flex items-center justify-center shadow-xs px-1 text-[9px]`}
        >
          <span>{extraCount}</span>
        </div>
      )}
    </div>
  );
}
