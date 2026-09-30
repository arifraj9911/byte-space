import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

import Brand1 from "@/assets/images/brand/brand1.svg";
import Brand2 from "@/assets/images/brand/brand2.svg";
import Brand3 from "@/assets/images/brand/brand3.svg";
import Brand4 from "@/assets/images/brand/brand4.svg";
import Brand5 from "@/assets/images/brand/brand5.svg";

export default function Brands() {
  const brands = [
    { name: "Logoipsum 1", src: Brand1 },
    { name: "Logoipsum 2", src: Brand2 },
    { name: "Logoipsum 3", src: Brand3 },
    { name: "Logoipsum 4", src: Brand4 },
    { name: "Logoipsum 5", src: Brand5 },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-6 sm:py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2 hover:opacity-100 transition-opacity"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={35}
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
