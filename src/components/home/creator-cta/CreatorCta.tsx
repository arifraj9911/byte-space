import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import CurveCreator from "@/assets/images/curve_creator.svg";
import ConeWhiteCreator from "@/assets/images/cone_white_creator.svg";
import CylinderCone from "@/assets/images/cylinder_cone.svg";
import CornerTriangle from "@/assets/images/hero/corner_triangle.svg";

export default function CreatorCta() {
  return (
    <section className="relative w-full bg-primary py-16 sm:py-24 overflow-hidden text-white">
      {/* 3D Decorative Floating Assets */}
      <div className="absolute top-4 left-4 sm:left-12 w-28 sm:w-44 opacity-80 pointer-events-none">
        <Image
          src={CurveCreator}
          alt="decorative curve"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-4 right-4 sm:right-16 w-28 sm:w-40 opacity-85 pointer-events-none">
        <Image
          src={CylinderCone}
          alt="decorative cone"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-2 left-6 sm:left-20 w-24 sm:w-36 opacity-85 pointer-events-none">
        <Image
          src={ConeWhiteCreator}
          alt="decorative white cone"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -bottom-10 right-4 sm:right-24 w-36 sm:w-52 opacity-80 pointer-events-none">
        <Image
          src={CornerTriangle}
          alt="decorative triangle"
          className="w-full h-auto"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>

          <p className="mt-5 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-2xl">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <div className="mt-8 sm:mt-10">
            <Button
              variant="accent"
              size="lg"
              className="rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl"
            >
              Join as Creator
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
