import { Book } from "@/lib/generated/prisma/client"
import { TableCell, TableRow } from "./ui/table";

type Prop = {
    book: Book
}

export async function TableContent({ book }: Prop) {

    return (
        <TableRow>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.published.toLocaleDateString("sv-SE")}</TableCell>
            <TableCell>{book.isbn}</TableCell>
        </TableRow>
    );
} 