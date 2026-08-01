export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "Learn how the organization works, what is changing, who the users are, and where the constraint exists.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "Turn the goal into requirements, scope, architecture, responsibilities, and a delivery plan.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Make the workflow, interface, and technical decisions visible before unnecessary complexity is introduced.",
  },
  {
    index: "04",
    title: "Build",
    description:
      "Develop the solution in reviewable increments with regular communication.",
  },
  {
    index: "05",
    title: "Verify",
    description:
      "Test usability, accessibility, reliability, performance, security, and operational readiness.",
  },
  {
    index: "06",
    title: "Launch",
    description:
      "Prepare production infrastructure, deployment, documentation, and handover.",
  },
  {
    index: "07",
    title: "Maintain",
    description:
      "Monitor, support, update, improve, and evolve the system after launch.",
  },
];
