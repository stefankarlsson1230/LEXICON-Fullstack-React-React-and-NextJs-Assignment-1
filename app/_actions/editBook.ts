"use server";

import { Book } from "@/lib/generated/prisma/client";
import { editFormSchema } from "../_validation/edit-form-schema";
import { z } from "zod";
import prisma from "@/lib/prisma";

export async function editBook(values: z.infer<typeof editFormSchema>): Promise<Book | null> {
    const data = editFormSchema.parse(values);

    const updatedBook = await prisma.book.update({
        where: {id: data.id},
        data: {
            title: data.title,
            author: data.author,
            published: new Date(data.published),
            isbn: data.isbn
        }
    });

    return updatedBook;
}


