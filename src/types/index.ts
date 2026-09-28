export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface BrandPartner {
  id: string;
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

export interface CourseItem {
  id: string;
  title: string;
  instructor: string;
  instructorStudio: string;
  rating: number;
  reviewsCount?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  price: number;
  billingPeriod: "lifetime" | "month" | "year";
  thumbnail: string;
  studentAvatars?: string[];
  enrolledStudentsCount: string;
  category: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  coursesCount?: number;
}

export interface GrowthStat {
  value: string;
  label: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface FooterLinkGroup {
  title?: string;
  links: { label: string; href: string }[];
}
