"use server"

import { Book } from "@/lib/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function getBook(id: string): Promise<Book | null> {
    return await prisma.book.findUnique({ where: { id } });
}  

