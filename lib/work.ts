export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  url: string;
  urlLabel: string;
  summary: string;
  scope: string[];
  context: string;
  features: string[];
  technology?: string[];
  maintenance: string;
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "orah-energy",
    name: "Orah Energy",
    industry: "Energy — smart metering, solar, and lighting",
    url: "https://orahenergy.co.za",
    urlLabel: "orahenergy.co.za",
    summary:
      "A public marketing website and client-facing operational platform for an energy company, maintained by TecHBK on an ongoing basis.",
    scope: [
      "Marketing website",
      "Operational dashboard",
      "Ongoing maintenance",
    ],
    context:
      "Orah Energy operates across solar energy (EPC), advanced lighting, and smart metering. The company needed a public website that presents its services clearly and supports lead generation, alongside client-facing operational tools.",
    features: [
      "Service presentation across solar, lighting, and smart metering",
      "Energy and metering information for customers",
      "Product and company information",
      "Customer resources and support information",
      "Contact and enquiry forms",
      "Client-facing operational tools",
    ],
    technology: ["Next.js", "Tailwind CSS"],
    maintenance:
      "TecHBK maintains the website and operational platform on an ongoing basis.",
    image: "/assets/work/orah-energy.png",
    imageAlt: "Orah Energy website homepage",
  },
  {
    slug: "intobeing-placements",
    name: "Intobeing Placements",
    industry: "Recruitment, headhunting, and talent acquisition",
    url: "https://intobeingplacements.co.za",
    urlLabel: "intobeingplacements.co.za",
    summary:
      "A recruitment website with candidate and vacancy workflows and an operational dashboard, maintained by TecHBK on an ongoing basis.",
    scope: [
      "Marketing website",
      "Operational dashboard",
      "Candidate and vacancy workflows",
      "Ongoing maintenance",
    ],
    context:
      "Intobeing Placements is a recruitment, headhunting, and talent-acquisition agency. The agency needed a public website that connects candidates and employers, and tooling that supports its day-to-day recruitment operation.",
    features: [
      "Job discovery for candidates",
      "CV submission",
      "Vacancy submission for employers",
      "Recruitment-service information",
      "Candidate and employer contact paths",
    ],
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    maintenance:
      "TecHBK maintains the website, workflows, and operational dashboard on an ongoing basis.",
    image: "/assets/work/intobeing-placements.png",
    imageAlt: "Intobeing Placements website homepage",
  },
  {
    slug: "amiez-studio",
    name: "Amiez Studio",
    industry: "Architecture, interior design, town planning, and construction",
    url: "https://amiezstudio.co.za",
    urlLabel: "amiezstudio.co.za",
    summary:
      "A public marketing and portfolio website for an architecture and design studio, maintained by TecHBK on an ongoing basis.",
    scope: [
      "Public marketing and portfolio website",
      "Project and service presentation",
      "Lead-generation paths",
      "Ongoing maintenance",
    ],
    context:
      "Amiez Studio is an architecture, interior design, and town planning studio delivering design solutions in South Africa and beyond. The studio needed a website that presents its projects and services and turns visitors into enquiries.",
    features: [
      "Project and portfolio presentation",
      "Service information",
      "Studio profile",
      "Enquiry and lead-generation paths",
    ],
    maintenance: "TecHBK maintains the website on an ongoing basis.",
    image: "/assets/work/amiez-studio.jpeg",
    imageAlt: "Amiez Studio website homepage",
  },
  {
    slug: "ppb-foundation",
    name: "PPB Foundation",
    industry: "Nonprofit — sustainable agriculture and community empowerment",
    url: "https://ppbfoundation.com",
    urlLabel: "ppbfoundation.com",
    summary:
      "A public website for the Prophet Philip Banda Foundation, maintained by TecHBK on an ongoing basis.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "The Prophet Philip Banda Foundation is a nonprofit organization working in sustainable agriculture and community empowerment. The foundation needed a website that presents its work and supports donations.",
    features: [
      "Foundation profile and core work presentation",
      "Donation paths",
      "Community and supporter contact paths",
    ],
    maintenance: "TecHBK maintains the website on an ongoing basis.",
    image: "/assets/work/ppb-foundation.jpeg",
    imageAlt: "Prophet Philip Banda Foundation website homepage",
  },
  {
    slug: "brave-risk-services",
    name: "Brave Risk Services",
    industry: "Security and risk services",
    url: "https://braveriskservices.co.za",
    urlLabel: "braveriskservices.co.za",
    summary:
      "A public website for a security and risk services company, maintained by TecHBK on an ongoing basis.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Brave Risk Services provides security, facility, and fleet support services in South Africa. The company needed a website that presents its service range and supports new business enquiries.",
    features: [
      "Service presentation across security, facility, and fleet support",
      "Company profile",
      "Enquiry and contact paths",
    ],
    maintenance: "TecHBK maintains the website on an ongoing basis.",
    image: "/assets/work/brave-risk-services.jpeg",
    imageAlt: "Brave Risk Services website homepage",
  },
  {
    slug: "emuna-group",
    name: "Emuna Group",
    industry: "Construction and maintenance",
    url: "https://emunagroup.co.za",
    urlLabel: "emunagroup.co.za",
    summary:
      "A public website for a Gauteng-based construction and maintenance company, maintained by TecHBK on an ongoing basis.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Emuna Group (Pty) Ltd is a Gauteng-based construction and maintenance partner delivering paving, waterproofing, painting, carpentry, and related services across public and private sectors. The company needed a website that presents its services and project footprint.",
    features: [
      "Service presentation",
      "Project footprint gallery",
      "Company profile",
      "Enquiry and contact paths",
    ],
    maintenance: "TecHBK maintains the website on an ongoing basis.",
    image: "/assets/work/emuna-group.jpeg",
    imageAlt: "Emuna Group website homepage",
  },
  {
    slug: "yohfee",
    name: "Yohfee",
    industry: "Aluminum and glass distribution",
    url: "https://yohfee.co.za",
    urlLabel: "yohfee.co.za",
    summary:
      "A public website for an architectural glass and aluminum distributor, maintained by TecHBK on an ongoing basis.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Yohfee supplies architectural glass, aluminum profiles, and project-ready glazing support to contractors, fabricators, developers, and interior projects in South Africa. The company needed a website that presents its product range and supports quotation requests.",
    features: [
      "Product range presentation",
      "Application and specification information",
      "Project-support information",
      "Quotation request paths",
    ],
    maintenance: "TecHBK maintains the website on an ongoing basis.",
    image: "/assets/work/yohfee.jpeg",
    imageAlt: "Yohfee website homepage",
  },
  {
    slug: "teach",
    name: "T.E.A.C.H.",
    industry:
      "Higher education — University of Johannesburg, Department of Industrial Psychology and People Management",
    url: "https://teach-tool.vercel.app",
    urlLabel: "teach-tool.vercel.app",
    summary:
      "An academic competency platform supporting academics across career stages, developed by TecHBK and maintained on an ongoing basis.",
    scope: ["Software platform development", "Ongoing maintenance"],
    context:
      "T.E.A.C.H. is an academic competency platform used in the University of Johannesburg's Department of Industrial Psychology and People Management. The platform supports academics in navigating their teaching development across career stages.",
    features: [
      "Academic competency model",
      "Self-assessment",
      "Learning resources",
      "Progress tracking",
      "Discussion capabilities",
      "Academic-development support",
    ],
    maintenance: "TecHBK maintains the platform on an ongoing basis.",
    image: "/assets/work/teach.jpeg",
    imageAlt: "T.E.A.C.H. platform homepage",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudy(slug: string, direction: 1 | -1) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return undefined;
  return caseStudies[(i + direction + caseStudies.length) % caseStudies.length];
}
