import type { MetadataRoute } from "next";

// TODO: update this once you have your real production domain
const BASE_URL = "https://gangaamrit.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/about", "/contact", "/faq", "/terms", "/privacy-policy"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
