import { defineCollection, z } from "astro:content";

const developerProfile = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.array(z.string()),
      description: z.string(),
      image: image(),
    }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});
const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      tools: z.array(z.string()),
      liveLink: z.string().url(),
      codeLink: z.string().url(),
    }),
});
export const collections = {
  about: developerProfile,
  services: servicesCollection,
  works: worksCollection,
};
