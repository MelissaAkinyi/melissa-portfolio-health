import { MetadataRoute } from "next";

const siteUrl = "https://melissa-akinyi.vercel.app"; // update after deployment

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/research",
    "/projects",
    "/publications",
    "/writing",
    "/cv",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
