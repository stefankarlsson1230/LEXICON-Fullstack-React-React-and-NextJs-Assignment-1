import z from "zod";

export const formSchema = z.object({
    title: z.string().min(1, "The title is required"),
    author: z.string().min(1, "Author is required"),
    published: z.date(),
    isbn: z.string().length(13, "Must be 13 digits"),
});

