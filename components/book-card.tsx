"use client";

import { Book } from "@/lib/generated/prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Prop = {
    book: Book
}


export function BookCard({book}: Prop) {

    return (
        <Card className="w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xl"><span className="font-bold">Author: </span>{book.author}</p>
                <p className="text-xl"><span className="font-bold">Publication date: </span>{book.published.toLocaleDateString()}</p>
                <p className="text-xl"><span className="font-bold">ISBN: </span>{book.isbn}</p>
                <p className="text-xl"><span className="font-bold">Author: </span>{book.author}</p>
                <p className="text-xl"><span className="font-bold">Created: </span>{book.createdAt.toLocaleDateString()}</p>
                <p className="text-xl"><span className="font-bold">Updated: </span>{book.updatedAt.toLocaleDateString()}</p>
            </CardContent>
            
        </Card>
        



    );

}