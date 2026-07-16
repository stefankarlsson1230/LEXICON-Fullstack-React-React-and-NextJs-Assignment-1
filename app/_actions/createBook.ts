"use server"

import z from "zod";
import { formSchema } from "../_validation/form-schema";
import prisma from "@/lib/prisma";
import { Book } from "@/lib/generated/prisma/client";


export async function createBook(values: z.infer<typeof formSchema>): Promise<Book | null> {
    const data = formSchema.parse(values);

    const publishedDate = new Date(values.published);

    const checkISBN = await prisma.book.findUnique({
        where: {
            isbn: values.isbn
        }
    })

    if(checkISBN) return null;

    const newBook = await prisma.book.create({
        data: {
            title: data.title,
            author: data.author,
            published: publishedDate,
            isbn: data.isbn
        }
    });

    return newBook;
}

