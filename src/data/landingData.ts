import {
  NavItem,
  BrandPartner,
  CourseItem,
  CategoryItem,
  GrowthStat,
  TestimonialItem,
  FooterLinkGroup,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { id: "1", name: "Logoipsum 1", logo: "/assets/images/brand/brand1.svg" },
  { id: "2", name: "Logoipsum 2", logo: "/assets/images/brand/brand2.svg" },
  { id: "3", name: "Logoipsum 3", logo: "/assets/images/brand/brand3.svg" },
  { id: "4", name: "Logoipsum 4", logo: "/assets/images/brand/brand4.svg" },
  { id: "5", name: "Logoipsum 5", logo: "/assets/images/brand/brand5.svg" },
];

export const COURSE_FILTERS: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img1.svg",
    enrolledStudentsCount: "26+",
    category: "UI/UX Design",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img2.svg",
    enrolledStudentsCount: "26+",
    category: "Graphic Design",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img3.svg",
    enrolledStudentsCount: "26+",
    category: "Data Science",
  },
  {
    id: "course-4",
    title: "Balancing Productivity an...",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img4.svg",
    enrolledStudentsCount: "26+",
    category: "Productivity",
  },
  {
    id: "course-5",
    title: "Mastering Money Manage...",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img5.svg",
    enrolledStudentsCount: "26+",
    category: "Business",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Succ...",
    instructor: "purepearl studio",
    instructorStudio: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    billingPeriod: "lifetime",
    thumbnail: "/assets/images/skills/skill_img6.svg",
    enrolledStudentsCount: "26+",
    category: "Freelance & Entrepreneurship",
  },
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "cat-design",
    name: "Design",
    icon: "/assets/images/tech_skill/design.svg",
  },
  {
    id: "cat-dev",
    name: "Development",
    icon: "/assets/images/tech_skill/dev.svg",
  },
  {
    id: "cat-it-software",
    name: "IT & Software",
    icon: "/assets/images/tech_skill/software.svg",
  },
  {
    id: "cat-business",
    name: "Business",
    icon: "/assets/images/tech_skill/business.svg",
  },
  {
    id: "cat-marketing",
    name: "Marketing",
    icon: "/assets/images/tech_skill/marketing.svg",
  },
  {
    id: "cat-photo",
    name: "Photography",
    icon: "/assets/images/tech_skill/photo.svg",
  },
];

export const GROWTH_STATS: GrowthStat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const COURSE_MANAGEMENT_FEATURES: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/reviews/review1.svg",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/reviews/review2.svg",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "test-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/reviews/review3.svg",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    links: [
      { label: "Featured Courses", href: "#" },
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    links: [
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];
