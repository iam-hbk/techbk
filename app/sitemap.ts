import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })
  );
  const workRoutes = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...workRoutes];
}
