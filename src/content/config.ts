
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        page_order: z.number(),
        page_kind: z.string(),
        is_content_index: z.boolean(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: postsCollection,
};