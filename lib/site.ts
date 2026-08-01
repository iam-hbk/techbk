export const site = {
  name: "TecHBK",
  legalName: "TecHBK",
  url: "https://techbk.dev",
  description:
    "TecHBK is a software development consulting business helping organizations plan, build, improve, and maintain dependable software — from South Africa and the DRC to the world.",
  email: "info@techbk.dev",
  emailHref:
    "mailto:info@techbk.dev?subject=New%20project%20inquiry",
  phone: "+27 64 244 8112",
  phoneHref: "tel:+27642448112",
  whatsapp: "https://wa.me/27642448112",
  footerTagline:
    "Software development consulting — from first decision to daily operation.",
  footprint: "South Africa / DRC / Global",
  availability: "Currently available for new projects",
  founder: {
    name: "Heritier Kaumbu",
    role: "Founder & Lead Consultant",
    github: "https://github.com/iam-hbk",
    resume:
      "https://vbeidqt5tvyy2ydf.public.blob.vercel-storage.com/CVs/Heritier%20Kaumbu%20CV-GQADoYbw2SafzlDvocteedsbRC8OsZ.pdf",
    portrait: "/assets/Profile.png",
  },
} as const;

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
] as const;
