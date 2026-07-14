"use client"

import { Book } from "@/lib/generated/prisma/client"
import Link from "next/link";
import { Search } from "lucide-react";
import { TableCell, TableRow } from "./ui/table";

type Prop = {
    book: Book
}

export function TableContent({ book }: Prop) {

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