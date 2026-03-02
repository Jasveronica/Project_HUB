import { getImgPath } from "@/utils/image";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.5",
    description:
      "Our first 25 clients rated us out of 5 stars for speed, support, and clean code.",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "50+",
    description:
      "Final-year academic and freelance projects successfully delivered across multiple domains.",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "2x",
    description:
      "Revenue generated through student collaborations Project Hub is building revenue with purpose.",
  },
];

export const Progress = [
  { title: "Project Planning & Documentation", Progress: 95 },
  { title: "Frontend Development", Progress: 90 },
  { title: "UI/UX Design", Progress: 88 },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Web Development (Frontend)",
    description:
      "Clean and responsive websites with modern UI Landing pages, business sites, and portfolios Delivered with fast performance and smooth flow.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Mobile App UI (Android)",
    description:
      "Smooth app screens and clear navigation flows, API fetching, forms, and full UI interactions. Built to feel seamless and user-friendly.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "UI/UX Design & Custom Services",
    description:
      "Sleek and user-focused layouts for apps & sites Custom design support for any project need Crafted for clarity, flow, and visual impact.",
  },
];

export const portfolioinfo = [
  {
    image: getImgPath("/images/portfolio/Driver app.png"),
    alt: "Portfolio",
    title: "Driver Mobile App",
    slug: "drivex",
    info: "Drive Smarter, Earn Better",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/attendance_system.png"),
    alt: "Portfolio",
    title: "Digital Attendance",
    slug: "Mars",
    info: "Transforming Manual Logs into Smart Data.",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/dashboard.jpg"),
    alt: "Portfolio",
    title: "Admin Dashboard",
    slug: "everyday-humans",
    info: "Control, Configure & Monitor Everything.",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/coffee.png"),
    alt: "Portfolio",
    title: "Brew & Bite Café",
    slug: "rocket-squared",
    info: "Crafted Coffee, Fast Eats, Delicious Desserts.",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/app.png"),
    alt: "Portfolio",
    title: "E-Commerce Platform",
    slug: "panda-logo",
    info: "Launch Your Brand Across Web & Mobile Seamlessly.",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/movie.png"),
    alt: "Portfolio",
    title: "Book Your Movie",
    slug: "fusion-dynamics",
    info: "Choose Your Theater, Pick a Show, Grab Your Seats.",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/trion.png"),
    alt: "Portfolio",
    title: "Virtual Try-On",
    slug: "innovate-x-ventures",
    info: "Try Before You Buy - From Anywhere.",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/retail billing system.png"),
    alt: "Portfolio",
    title: "Retail Billing Software",
    slug: "nebula-holdings",
    info: "Fast Checkout. Accurate Billing. Better Management.",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/travel-website.png"),
    alt: "Portfolio",
    title: "Travel & Tour Packages",
    slug: "summit-partners",
    info: "Plan Your Journey, Live Your Story.",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/tomato.png"),
    alt: "Portfolio",
    title: "Gourmet Delivery App",
    slug: "apex-strategies",
    info: "Discover, Order & Enjoy from Nearby Restaurants.",
    Class: "md:mt-0",
  },
];
