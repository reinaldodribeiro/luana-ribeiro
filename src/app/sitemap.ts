import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/images/luana-ribeiro-retrato.jpg`,
        `${SITE_URL}/images/luana-ribeiro-escritorio.jpg`,
        `${SITE_URL}/images/luana-ribeiro-sofa.jpg`,
        `${SITE_URL}/images/luana-ribeiro-mesa.jpg`,
        `${SITE_URL}/images/luana-ribeiro-celular.jpg`,
      ],
    },
  ];
}
