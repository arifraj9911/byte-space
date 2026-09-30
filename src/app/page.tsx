import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import Hero from "@/components/home/hero/Hero";
import Brands from "@/components/home/brands/Brands";
import CourseShowcase from "@/components/home/courses/CourseShowcase";
import Categories from "@/components/home/categories/Categories";
import GrowthStats from "@/components/home/growth-stats/GrowthStats";
import CourseManagement from "@/components/home/course-management/CourseManagement";
import CreatorCta from "@/components/home/creator-cta/CreatorCta";
import Testimonials from "@/components/home/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Partner Brands Logos */}
        <Brands />

        {/* 4. Course Showcase & Filters */}
        <CourseShowcase />

        {/* 5. Diverse Learning Paths / Categories */}
        <Categories />

        {/* 6. Professional Growth Stats */}
        <GrowthStats />

        {/* 7. Course Management & Creator Benefits */}
        <CourseManagement />

        {/* 8. Creator CTA Blue Banner */}
        <CreatorCta />

        {/* 9. Testimonials & Community Reviews */}
        <Testimonials />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
