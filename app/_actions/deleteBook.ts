"use server"

import prisma from "@/lib/prisma";

export async function deleteBook(id: string): Promise<boolean> {

    try {
        const deleted = await prisma.book.delete({
            where: { id }
        });
        return true;
    }
    catch (e) {
        return false;
    }
}