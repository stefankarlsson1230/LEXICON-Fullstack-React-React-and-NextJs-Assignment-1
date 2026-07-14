import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function BookPage( props: { params: Promise<{ isbn: string}> }) {

    const { isbn } = await props.params;
    
    const book = await prisma.book.findUnique({ where: { isbn } });

    if (!book) notFound();

    return <p>{book.title}</p>

}