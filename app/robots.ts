import type { MetadataRoute } from "next";

const BASE_URL = "https://gangaamrit.in"; // TODO: update with your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
