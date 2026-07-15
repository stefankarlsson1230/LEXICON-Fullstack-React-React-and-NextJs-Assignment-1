"use server";

import { Book } from "@/lib/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function getAllBooks(): Promise<Book[] | null> {
    return await prisma.book.findMany({
    orderBy: {
        title: "asc"
    }});
}

