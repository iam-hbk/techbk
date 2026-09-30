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
  maintenance?: string;
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "orah-energy",
    name: "Orah Energy",
    industry: "Energy — smart metering, solar and lighting",
    url: "https://orahenergy.co.za",
    urlLabel: "orahenergy.co.za",
    summary:
      "Orah Energy's public website presents its solar, lighting and smart metering services alongside a client-facing operational platform.",
    scope: [
      "Marketing website",
      "Operational dashboard",
      "Ongoing maintenance",
    ],
    context:
      "Orah Energy works across solar energy (EPC), advanced lighting and smart metering. The brief combined a public website that explains these services and supports enquiries with client-facing operational tools.",
    features: [
      "Solar energy (EPC), advanced lighting and smart metering service information",
      "Energy and metering information for customers",
      "Product and company information",
      "Customer resources and support information",
      "Contact and enquiry forms",
      "Client-facing operational dashboard and tools",
    ],
    technology: ["Next.js", "Tailwind CSS"],
    maintenance:
      "We maintain both Orah Energy's public website and its operational platform.",
    image: "/assets/work/orah-energy.png",
    imageAlt: "Orah Energy website homepage",
  },
  {
    slug: "intobeing-placements",
    name: "Intobeing Placements",
    industry: "Recruitment, headhunting and talent acquisition",
    url: "https://intobeingplacements.co.za",
    urlLabel: "intobeingplacements.co.za",
    summary:
      "A recruitment website and operational dashboard for job discovery, CV submissions, vacancy submissions and contact between candidates and employers.",
    scope: [
      "Marketing website",
      "Operational dashboard",
      "Candidate and vacancy workflows",
      "Ongoing maintenance",
    ],
    context:
      "Intobeing Placements is a recruitment, headhunting and talent-acquisition agency. It needed a public website connecting candidates and employers, backed by tools for its day-to-day recruitment work.",
    features: [
      "Job discovery for candidates",
      "CV submissions from candidates",
      "Vacancy submissions from employers",
      "Recruitment, headhunting and talent-acquisition service information",
      "Contact options for candidates and employers",
    ],
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    maintenance:
      "Our maintenance covers the website, recruitment workflows and operational dashboard.",
    image: "/assets/work/intobeing-placements.png",
    imageAlt: "Intobeing Placements website homepage",
  },
  {
    slug: "amiez-studio",
    name: "Amiez Studio",
    industry: "Architecture, interior design, town planning and construction",
    url: "https://amiezstudio.co.za",
    urlLabel: "amiezstudio.co.za",
    summary:
      "A portfolio website presenting Amiez Studio's architecture, interior design and town planning work, with clear ways to enquire.",
    scope: [
      "Public marketing and portfolio website",
      "Project and service presentation",
      "Enquiry and lead generation",
      "Ongoing maintenance",
    ],
    context:
      "Amiez Studio provides architecture, interior design and town planning services in South Africa and beyond. The site needed to present the studio's work and services clearly and give visitors direct ways to enquire.",
    features: [
      "Project portfolio",
      "Architecture, interior design and town planning service information",
      "Amiez Studio profile",
      "Enquiry and lead-generation options",
    ],
    maintenance: "We continue to maintain the Amiez Studio website.",
    image: "/assets/work/amiez-studio.jpeg",
    imageAlt: "Amiez Studio website homepage",
  },
  {
    slug: "ppb-foundation",
    name: "PPB Foundation",
    industry: "Non-profit — sustainable agriculture and community empowerment",
    url: "https://ppbfoundation.com",
    urlLabel: "ppbfoundation.com",
    summary:
      "A public website presenting the Prophet Philip Banda Foundation's work in sustainable agriculture and community empowerment, with ways to donate and get in touch.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "The Prophet Philip Banda Foundation is a non-profit organisation focused on sustainable agriculture and community empowerment. Its website needed to explain this work and support donations.",
    features: [
      "Prophet Philip Banda Foundation profile",
      "Sustainable agriculture and community empowerment work",
      "Donation options",
      "Contact options for community members and supporters",
    ],
    maintenance: "We continue to maintain the foundation's website.",
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
      "A public website outlining Brave Risk Services' security, facility and fleet support services in South Africa, with routes for new business enquiries.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Brave Risk Services provides security, facility and fleet support services in South Africa. The website needed to present the full service range and support new business enquiries.",
    features: [
      "Security service information",
      "Facility support service information",
      "Fleet support service information",
      "Brave Risk Services company profile",
      "New business enquiry and contact options",
    ],
    maintenance: "We continue to maintain the Brave Risk Services website.",
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
      "A public website presenting Emuna Group (Pty) Ltd's construction and maintenance services and project footprint.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Emuna Group (Pty) Ltd is based in Gauteng and delivers paving, waterproofing, painting, carpentry and related services across public and private sectors. Its website needed to present these services and show its project footprint.",
    features: [
      "Paving, waterproofing, painting and carpentry service information",
      "Related construction and maintenance services",
      "Project footprint gallery",
      "Emuna Group (Pty) Ltd company profile",
      "Enquiry and contact options",
    ],
    maintenance: "Our work with Emuna Group includes website maintenance.",
    image: "/assets/work/emuna-group.jpeg",
    imageAlt: "Emuna Group website homepage",
  },
  {
    slug: "yohfee",
    name: "Yohfee",
    industry: "Aluminium and glass distribution",
    url: "https://yohfee.co.za",
    urlLabel: "yohfee.co.za",
    summary:
      "A public website presenting Yohfee's architectural glass and aluminium profiles, with application and specification information and a route to request a quotation.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Yohfee supplies architectural glass and aluminium profiles to contractors, fabricators, developers and interior projects in South Africa, with project-ready glazing support. The website needed to present the product range and support quotation requests.",
    features: [
      "Architectural glass and aluminium profile range",
      "Application and specification information",
      "Project-ready glazing support information",
      "Quotation request options",
    ],
    maintenance: "We maintain the Yohfee website.",
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
      "An academic competency platform we developed and maintain, used in the University of Johannesburg's Department of Industrial Psychology and People Management.",
    scope: ["Software platform development", "Ongoing maintenance"],
    context:
      "T.E.A.C.H. supports academics in the University of Johannesburg's Department of Industrial Psychology and People Management as they navigate teaching development across career stages.",
    features: [
      "Academic competency model",
      "Self-assessment for academics",
      "Learning resources for teaching development",
      "Teaching-development progress tracking",
      "Academic discussion capabilities",
    ],
    maintenance: "We also maintain the T.E.A.C.H. platform.",
    image: "/assets/work/teach.jpeg",
    imageAlt: "T.E.A.C.H. platform homepage",
  },
  {
    slug: "zoera",
    name: "Zoera Jewellery",
    industry: "Jewellery retail",
    url: "https://zoera.co.za",
    urlLabel: "zoera.co.za",
    summary:
      "A public website for Zoera Jewellery, bringing together its curated collections, brand story, style gallery and direct contact through WhatsApp.",
    scope: ["Public website", "Ongoing maintenance"],
    context:
      "Zoera Jewellery offers a curated selection designed for everyday luxury. The website needed to present its collections and story while giving customers direct ways to get in touch.",
    features: [
      "Curated jewellery collection presentation",
      "Zoera Jewellery brand story",
      "Style gallery",
      "Light and dark viewing modes",
      "Contact options, including WhatsApp chat",
    ],
    maintenance: "We continue to maintain the Zoera Jewellery website.",
    image: "/assets/work/zoera.jpeg",
    imageAlt: "Zoera Jewellery website homepage",
  },
  {
    slug: "scent-by-bnice",
    name: "Scent by B'Nice",
    industry: "Home fragrance retail",
    url: "https://www.scentsbybnice.co.za",
    urlLabel: "scentsbybnice.co.za",
    summary:
      "A product website for Scent by B'Nice, presenting its candles, room sprays and diffusers, fragrance range and gift sets, with prices in rands and ordering through WhatsApp.",
    scope: ["Public website", "Product catalogue"],
    context:
      "Scent by B'Nice makes candles, room sprays, room diffusers and car diffusers in fragrances such as Amber, French Lavender and Freesia. The website needed to present the collection and gift sets clearly and make it easy for customers to get in touch to order.",
    features: [
      "Product catalogue with prices in ZAR",
      "Fragrance guide across the scent range",
      "Gift set presentation and enquiries",
      "Scent by B'Nice brand story",
      "Contact and ordering through WhatsApp",
    ],
    image: "/assets/work/scents-by-bnice.jpeg",
    imageAlt: "Scent by B'Nice website homepage",
  },
  {
    slug: "new-quin-astra",
    name: "New Quin Astra",
    industry: "Industrial supply and transport",
    url: "https://www.newquinastra.com",
    urlLabel: "newquinastra.com",
    summary:
      "A bilingual English and French website for New Quin Astra, presenting its steel, hardware, mining and safety supply and its regional transport services across Central and East Africa.",
    scope: ["Public website", "English and French content"],
    context:
      "Founded in 2000, New Quin Astra is a distributor and transporter serving steel, hardware, mining and related markets, with headquarters in Lubumbashi and a branch in Dar es Salaam. The website needed to present its product range and transport capability to customers across the region and route enquiries to its sales team.",
    features: [
      "Steel plate and pipe, hardware and consumables, and mining and safety supply ranges",
      "Air, sea and land transport services",
      "Company history, principles and compliance commitments",
      "English and French versions of the site",
      "Sales enquiry, call and email options for both offices",
    ],
    image: "/assets/work/newquinastra.jpeg",
    imageAlt: "New Quin Astra website homepage",
  },
  {
    slug: "kpk-petroleum",
    name: "KPK Petroleum",
    industry: "Fuel supply — petrol and diesel across the DRC",
    url: "https://www.kpkpetroleum.com",
    urlLabel: "kpkpetroleum.com",
    summary:
      "A bilingual French and English website for KPK Petroleum, presenting its petrol and diesel supply across the DRC, its pickup and delivery options and its business purchase terms, with enquiries through WhatsApp and email.",
    scope: ["Public website", "French and English content"],
    context:
      "KPK Petroleum supplies petrol and diesel to individuals, businesses and institutions across the Democratic Republic of the Congo, with pickup in Kamina and delivery to client sites. The website needed to explain how supply works and route orders to its sales team.",
    features: [
      "Petrol and diesel supply information",
      "Pickup in Kamina and delivery across the DRC",
      "Business credit and prepaid fuel options",
      "Step-by-step ordering process and frequently asked questions",
      "French and English versions of the site",
      "WhatsApp and sales email enquiries",
    ],
    image: "/assets/work/kpk-petroleum.jpeg",
    imageAlt: "KPK Petroleum website homepage",
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
