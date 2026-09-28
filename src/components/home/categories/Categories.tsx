import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "./CategoryCard";

import DesignIcon from "@/assets/images/tech_skill/design.svg";
import DevIcon from "@/assets/images/tech_skill/dev.svg";
import SoftwareIcon from "@/assets/images/tech_skill/software.svg";
import BusinessIcon from "@/assets/images/tech_skill/business.svg";
import MarketingIcon from "@/assets/images/tech_skill/marketing.svg";
import PhotoIcon from "@/assets/images/tech_skill/photo.svg";

export default function Categories() {
  const categories = [
    { name: "Design", icon: DesignIcon },
    { name: "Development", icon: DevIcon },
    { name: "IT & Software", icon: SoftwareIcon },
    { name: "Business", icon: BusinessIcon },
    { name: "Marketing", icon: MarketingIcon },
    { name: "Photography", icon: PhotoIcon },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              name={cat.name}
              iconSrc={cat.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
