import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SeedPage } from "./_actions/seed";
import { TableContent } from "@/components/table-content";
import { getAllBooks } from "./_actions/getAllBooks";

export default async function books() {

    if(!(await SeedPage())) return <p>Something went wrong with seeding the database!</p>

    const books = await getAllBooks();

    return (
        <div className="p-4 max-w-6xl mx-auto">

            <Table className="caption-top">
                <TableCaption className="mb-6 text-2xl font-bold">All books</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>ISBN</TableHead>
                    </TableRow>
                </TableHeader> 
                <TableBody>
                    {books.map((b) => <TableContent key={b.id} book={b} />)}
                </TableBody>
            </Table>
        </div> 
    );
}