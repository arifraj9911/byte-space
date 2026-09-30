import type { Metadata } from "next";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import NotFoundHero from "@/components/not-found/NotFoundHero";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist. Try to use a correct url or go back to homepage to start again.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <Header />

      {/* 2. 404 Hero Section */}
      <main className="flex-grow flex flex-col">
        <NotFoundHero />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
