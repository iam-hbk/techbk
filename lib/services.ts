export type Service = {
  index: string;
  slug: string;
  title: string;
  compactTitle: string;
  preview: string;
  highlights: string[];
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    index: "01",
    slug: "discovery-and-strategy",
    title: "Discovery and Strategy",
    compactTitle: "Discovery & Strategy",
    preview:
      "Clarify the problem, constraints and practical route before anyone starts building.",
    highlights: ["Requirements definition", "Technical audits", "Delivery roadmaps"],
    summary:
      "Before anyone starts building, we clarify the problem, the people involved and the constraints. You get agreed requirements and a practical delivery plan.",
    items: [
      "Business and technical discovery",
      "Requirements definition",
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
    compactTitle: "Product Design",
    preview:
      "Make key journeys and interfaces visible while changes are still inexpensive.",
    highlights: ["User flows", "Interactive prototypes", "Design systems"],
    summary:
      "See how the product will work before development begins. We map the main journeys, test the structure and design the interfaces while changes are still inexpensive.",
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
    compactTitle: "Development",
    preview:
      "Turn agreed requirements into websites, applications and internal tools.",
    highlights: ["Web applications", "Internal tools", "APIs and integrations"],
    summary:
      "We build public websites, web applications, internal tools and the services behind them. You see working software throughout the project, not only at the end.",
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
    compactTitle: "Infrastructure",
    preview:
      "Set up repeatable hosting, deployments and monitoring for confident releases.",
    highlights: ["Cloud infrastructure", "CI/CD", "Performance optimisation"],
    summary:
      "We set up hosting, deployments and monitoring so releases are repeatable and problems are easier to spot.",
    items: [
      "Cloud infrastructure",
      "Deployment workflows",
      "CI/CD",
      "Environment configuration",
      "Performance optimisation",
      "Monitoring and operational readiness",
    ],
  },
  {
    index: "05",
    slug: "improvement-and-maintenance",
    title: "Improvement and Maintenance",
    compactTitle: "Maintenance",
    preview:
      "Keep live software secure, useful and improving as the organisation changes.",
    highlights: ["Feature development", "Bug fixing", "Security improvements"],
    summary:
      "Live software needs regular attention. We fix problems, ship improvements and keep products useful as the organisation changes.",
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
  "An early idea",
  "Requirements to clarify",
  "Existing software",
  "A manual process",
  "Software that will not scale",
  "A product ready to build",
  "A platform that needs maintenance",
] as const;

export const lifecycleStages = [
  "Plan",
  "Design",
  "Build",
  "Ship",
  "Maintain",
] as const;
