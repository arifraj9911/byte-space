import React from "react";
import Image from "next/image";
import FbIcon from "@/assets/images/auth_image/fb.svg";
import GoogleIcon from "@/assets/images/auth_image/google.svg";

export default function SocialAuthButtons() {
  return (
    <div className="w-full">
      {/* "or" divider */}
      <div className="relative flex items-center justify-center my-6 sm:my-8">
        <div className="w-full border-t border-gray-200"></div>
        <span className="absolute bg-white px-3 text-xs text-gray-400 font-normal select-none">
          or
        </span>
      </div>

      {/* Social login buttons: Facebook & Google */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-[24px] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
        >
          <Image
            src={FbIcon}
            alt="Facebook"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </button>

        <button
          type="button"
          aria-label="Continue with Google"
          className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-[24px] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
        >
          <Image
            src={GoogleIcon}
            alt="Google"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  );
}
