export type Service = {
  index: string;
  slug: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    index: "01",
    slug: "discovery-and-strategy",
    title: "Discovery and Strategy",
    summary:
      "Make sense of the problem before committing to a solution. We turn goals, constraints, and unknowns into a plan that can be built against.",
    items: [
      "Business and technical discovery",
      "Requirement definition",
      "Product planning",
      "Technical audits",
      "Architecture direction",
      "Technology selection",
      "Delivery roadmaps",
    ],
  },
  {
    index: "02",
    slug: "product-and-experience-design",
    title: "Product and Experience Design",
    summary:
      "Decide how the system should work before it is built. We make workflows, structures, and interfaces visible early, when change is still cheap.",
    items: [
      "User flows",
      "Information architecture",
      "Wireframes",
      "Interface design",
      "Interactive prototypes",
      "Design systems",
      "Accessibility planning",
    ],
  },
  {
    index: "03",
    slug: "software-development",
    title: "Software Development",
    summary:
      "Design and build the working system — from public websites to internal platforms, backend services, and bespoke software.",
    items: [
      "Marketing and corporate websites",
      "Web applications",
      "Operational dashboards",
      "Internal tools",
      "Customer and staff portals",
      "Backend services",
      "APIs and integrations",
      "Data-driven applications",
      "Bespoke software systems",
    ],
  },
  {
    index: "04",
    slug: "infrastructure-and-delivery",
    title: "Infrastructure and Delivery",
    summary:
      "Get the system into production and keep it predictable. We set up the environments, pipelines, and monitoring that dependable software needs.",
    items: [
      "Cloud infrastructure",
      "Deployment workflows",
      "CI/CD",
      "Environment configuration",
      "Performance optimization",
      "Monitoring and operational readiness",
    ],
  },
  {
    index: "05",
    slug: "improvement-and-maintenance",
    title: "Improvement and Maintenance",
    summary:
      "Stay responsible after launch. We maintain, support, and evolve live systems so they keep working as the organization changes.",
    items: [
      "Ongoing website and application maintenance",
      "Feature development",
      "Bug fixing",
      "Dependency updates",
      "Performance improvement",
      "Security improvements",
      "Technical support",
      "Product evolution",
    ],
  },
];

export const entryStates = [
  "Just an idea",
  "Unclear requirements",
  "Existing software",
  "Manual operations",
  "A system that will not scale",
  "A product ready to build",
  "A platform needing maintenance",
] as const;

export const lifecycleStages = [
  "Plan",
  "Design",
  "Build",
  "Ship",
  "Maintain",
] as const;
