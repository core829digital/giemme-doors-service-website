import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/configuratore", "/privacy", "/cookie", "/termini"];
  return routes.map((r) => ({
    url: `${SITE.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : r === "/configuratore" ? "monthly" : "yearly",
    priority: r === "" ? 1 : r === "/configuratore" ? 0.9 : 0.3,
  }));
}
