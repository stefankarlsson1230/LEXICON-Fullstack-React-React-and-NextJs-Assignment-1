import { Book } from "@/lib/generated/prisma/client"
import { TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import { Search } from "lucide-react";

type Prop = {
    book: Book
}

export async function TableContent({ book }: Prop) {

    return (
        <TableRow>
            <TableCell><Link href={`../books/${book.isbn}`}><Search/></Link></TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.published.toLocaleDateString("sv-SE")}</TableCell>
            <TableCell>{book.isbn}</TableCell>
        </TableRow>
    );
} 