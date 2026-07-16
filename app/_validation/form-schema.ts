import z from "zod";

export const formSchema = z.object({
    title: z.string().min(1, "The title is required"),
    author: z.string().min(1, "Author is required"),
    published: z.string().min(1, "A date is required"),
    isbn: z.string().min(13, "Must be at least 13 characters").max(13, "Must be no more than 13 characters").regex(/^\d+$/, "Only digits")
});

