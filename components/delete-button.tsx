"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { deleteBook } from "@/app/_actions/deleteBook";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type prop = {
    id: string
}

export function DeleteButton({ id }: prop) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    async function handleClick() {
        const shouldDelete = confirm("Are you sure you want to delete this book?");
        if(!shouldDelete) return;

        setIsDeleting(true);
        const success = await deleteBook(id);
        setIsDeleting(false);

        if(success) {
            toast.success("Successfully deleted book!");
            router.replace('/');
        } else toast.error("Could not delete the book!");
    }


    return (
        <Button
            onClick={handleClick}
            disabled={isDeleting}
        >
            Delete
        </Button>
    )

}