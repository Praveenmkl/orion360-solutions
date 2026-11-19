import webDevIcon from "../assets/web dev.webp";
import mobileDevIcon from "../assets/mobile dev.webp";
import uiuxIcon from "../assets/uiux.webp";
import cloudDevIcon from "../assets/cloud and dev.webp";

const servicesData = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    href: "#services/web-development",
    tagline: "Building digital experiences that drive growth.",
    description:
      "We create modern, responsive websites and powerful web applications that help businesses grow.",
    icon: webDevIcon,
    tags: ["React & Next.js", "APIs & Backends", "Performance & SEO"],
    deliverables: [
      "Custom responsive websites & full-stack web apps",
      "Scalable REST & GraphQL API architecture",
      "Core Web Vitals optimization & technical SEO",
      "Clean, maintainable React & TypeScript codebases",
    ],
  },
  {
    id: "mobile-dev",
    number: "02",
    title: "Mobile App Development",
    href: "#services/mobile-development",
    tagline: "Bringing your ideas to life, one tap at a time.",
    description:
      "We build intuitive, high-performance mobile applications that connect businesses with their customers.",
    icon: mobileDevIcon,
    tags: ["iOS & Android", "React Native", "Flutter"],
    deliverables: [
      "Cross-platform iOS & Android mobile experiences",
      "Fluid 60fps native-feel animations & gestures",
      "Offline sync, push notifications & secure auth",
      "End-to-end App Store & Google Play deployment",
    ],
  },
  {
    id: "uiux-design",
    number: "03",
    title: "UI/UX Design",
    href: "#services/ui-ux-development",
    tagline: "Creating experiences people love to use.",
    description:
      "We craft intuitive interfaces, cohesive design systems, and user-centered experiences that engage users and elevate your brand.",
    icon: uiuxIcon,
    tags: ["Design Systems", "Prototyping", "User Flows"],
    deliverables: [
      "User research, information architecture & wireframes",
      "Interactive Figma prototypes & clickable user flows",
      "Scalable component libraries & design tokens",
      "Accessible, conversion-focused interface design",
    ],
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud & DevOps",
    href: "#services/cloud-devops",
    tagline: "Powering technology with reliability and scale.",
    description:
      "We build reliable, secure, and scalable cloud infrastructure with streamlined CI/CD deployment workflows.",
    icon: cloudDevIcon,
    tags: ["AWS & GCP", "CI/CD Pipelines", "Docker & Scaling"],
    deliverables: [
      "High-availability cloud architecture on AWS & GCP",
      "Automated CI/CD testing & zero-downtime deploys",
      "Containerization with Docker & scalable orchestration",
      "Observability, security hardening & cost optimization",
    ],
  },
];

export default servicesData;
