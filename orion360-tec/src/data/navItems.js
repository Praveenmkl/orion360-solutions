const navItems = [
  { label: "HOME", href: "#home" },
  {
    label: "SERVICES",
    href: "#services",
    children: [
      {
        label: "Web Development",
        description: "Modern websites & web applications",
        href: "#services/web-development",
      },
      {
        label: "UI/UX Development",
        description: "Design systems & user experiences",
        href: "#services/ui-ux-development",
      },
      {
        label: "Cloud & DevOps",
        description: "Scalable infrastructure & CI/CD",
        href: "#services/cloud-devops",
      },
      {
        label: "Mobile Development",
        description: "Cross-platform iOS & Android apps",
        href: "#services/mobile-development",
      },
    ],
  },
  { label: "OUR WORKS", href: "#works" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default navItems;
