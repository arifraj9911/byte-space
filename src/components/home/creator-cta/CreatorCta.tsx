import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Decorative 3D Floating Assets
import BannerLeftCurve from "@/assets/images/hero/banner_left_curve.svg";
import CurveWhiteSmall from "@/assets/images/hero/curve_white_small.svg";
import ConeWhiteCreator from "@/assets/images/cone_white_creator.svg";
import CircleColored from "@/assets/images/circle_colored.svg";
import TriangleColored from "@/assets/images/triangle_colored.svg";
import CylinderCone from "@/assets/images/cylinder_cone.svg";
import CurveRight from "@/assets/images/hero/curve_right.svg";

export default function CreatorCta() {
  return (
    <section className="relative w-full bg-primary py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden text-white">
      {/* Background Grid Pattern matching Hero Section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px)`,
          backgroundSize: "85px 85px",
        }}
      />

      {/* 1. Top Left Corner: Banner Left Curve (Lime green ribbon) */}
      <div className="absolute left-0 -top-28 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none select-none z-10">
        <Image
          src={BannerLeftCurve}
          alt="decorative lime curve"
          className="w-full h-auto"
        />
      </div>

      {/* 2. Top Left: Small White Curve (Floats between lime ribbon & title) */}
      <div className="absolute left-[6%] sm:left-[8%] md:left-[10%] lg:left-[12%] top-3 sm:top-5 md:top-8 w-14 sm:w-18 md:w-22 lg:w-36 pointer-events-none select-none z-10">
        <Image
          src={CurveWhiteSmall}
          alt="decorative small white curve"
          className="w-full h-auto"
        />
      </div>

      {/* 3. Mid-Left: White Cone (Flat cut base sits on left boundary) */}
      <div className="absolute left-0 top-[46%] sm:top-[48%] md:top-[65%] -translate-y-1/2 w-14 sm:w-18 md:w-22 lg:w-28 pointer-events-none select-none z-10">
        <Image
          src={ConeWhiteCreator}
          alt="decorative white cone"
          className="w-full h-auto"
        />
      </div>

      {/* 4. Bottom Left: Colored Torus Ring (Cut off at bottom) */}
      <div className="absolute left-1 sm:left-4 md:left-8 lg:left-10 bottom-0 w-36 sm:w-48 md:w-60 lg:w-72 pointer-events-none select-none z-10">
        <Image
          src={CircleColored}
          alt="decorative colored circle ring"
          className="w-full h-auto"
        />
      </div>

      {/* 5. Top Right: Colored Triangle / Pyramid (Floats left of white cylinder) */}
      <div className="absolute right-[8%] sm:right-[10%] md:right-[12%] lg:right-[14%] top-2 sm:top-4 md:top-6 lg:top-8 w-16 sm:w-22 md:w-28 lg:w-34 pointer-events-none select-none z-10">
        <Image
          src={TriangleColored}
          alt="decorative colored triangle"
          className="w-full h-auto"
        />
      </div>

      {/* 6. Top Right Corner: White Cylinder (Cut off on top and right boundary) */}
      <div className="absolute right-0 top-0 w-28 sm:w-36 md:w-48 lg:w-52 pointer-events-none select-none z-10">
        <Image
          src={CylinderCone}
          alt="decorative white cylinder"
          className="w-full h-auto"
        />
      </div>

      {/* 7. Bottom Right: Lime Curve (60% visible above bottom boundary) */}
      <div className="absolute right-2 sm:right-6 md:right-10 lg:right-14 bottom-0 translate-y-[38%] w-32 sm:w-44 md:w-60 lg:w-76 pointer-events-none select-none z-10">
        <Image
          src={CurveRight}
          alt="decorative lime curve right"
          className="w-full h-auto"
        />
      </div>

      {/* Content Container */}
      <Container className="relative z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
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
