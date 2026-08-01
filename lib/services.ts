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
