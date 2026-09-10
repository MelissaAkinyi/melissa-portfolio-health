import { MetadataRoute } from "next";

const siteUrl = "https://melissa-akinyi.vercel.app"; // update after deployment

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
