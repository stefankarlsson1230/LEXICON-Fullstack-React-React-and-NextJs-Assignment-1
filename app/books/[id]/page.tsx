import { getBook } from "@/app/_actions/getBook";
import { BookCard } from "@/components/book-card";
import { notFound } from "next/navigation";

export default async function BookPage( props: { params: Promise<{ id: string}> }) {
    const { id } = await props.params;
    
    const book = await getBook(id);

    if (!book) notFound();

    return (
        <div className="max-w-6xl mx-auto">
            <BookCard book={book}/>
        </div>
    );

}