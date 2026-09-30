import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";

export interface CategoryCardProps {
  name: string;
  iconSrc: any;
  href?: string;
}

export default function CategoryCard({
  name,
  iconSrc,
  href = "#",
}: CategoryCardProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-3 sm:p-6 bg-white border border-border rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/50 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <Image
          src={iconSrc}
          alt={name}
          width={32}
          height={32}
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
        />
      </div>
      <h3 className="text-sm sm:text-base font-medium text-secondary text-center group-hover:text-primary transition-colors">
        {name}
      </h3>
    </Card>
  );
}
