import { z, defineCollection } from "astro:content";
const lessonCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
  }),
});

export const collection = {
  lessons: lessonCollection,
};
