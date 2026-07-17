import { getBook } from "@/app/_actions/getBook";
import { EditBookForm } from "@/components/edit-book-form";
import { notFound } from "next/navigation";

export default async function editBook(props: {params: Promise<{id: string}>}) {
 
    const { id } = await props.params;
        
        const book = await getBook(id);
    
        if (!book) notFound();
    
        return (
            <div className="max-w-6xl mx-auto">
                <EditBookForm book={book}/>
            </div>
        );
}
