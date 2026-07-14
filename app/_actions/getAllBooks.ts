"use server";

import prisma from "@/lib/prisma";

    export async function getAllBooks() {
        const books = await prisma.book.findMany({
        orderBy: {
            title: "asc"
        }
    });

        return books;
    }

