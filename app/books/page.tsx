import { TableContent } from "@/components/table-content";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/prisma";

export default async function books() {

    const books = await prisma.book.findMany({
        orderBy: {
            title: "asc"
        }
    });

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