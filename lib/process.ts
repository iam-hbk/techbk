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
      "We learn how the organisation works, who uses the software and what is getting in the way.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "We agree on requirements, scope, responsibilities and a delivery plan.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "We make key workflows and technical choices visible before development begins.",
  },
  {
    index: "04",
    title: "Build",
    description:
      "We deliver working software in small increments and review it with you as we go.",
  },
  {
    index: "05",
    title: "Verify",
    description:
      "We test what matters for the project, including accessibility, reliability, performance and security.",
  },
  {
    index: "06",
    title: "Launch",
    description:
      "We prepare production, documentation and handover, then release the work.",
  },
  {
    index: "07",
    title: "Maintain",
    description:
      "After launch, we fix problems, apply updates and make improvements as needs change.",
  },
];
