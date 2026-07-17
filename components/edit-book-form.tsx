"use client"

import { editFormSchema } from "@/app/_validation/edit-form-schema";
import { useForm } from "@tanstack/react-form";
import { FieldGroup } from "./ui/field";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation"
import { Book } from "@/lib/generated/prisma/client";
import { editBook } from "@/app/_actions/editBook";

type Prop = {
    book: Book
}


export function EditBookForm({ book }: Prop) {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            id: book.id,
            title: book.title,
            author: book.author,
            published: book.published.toLocaleDateString(),
            isbn: book.isbn
        },
        validators: {
            onChange: editFormSchema,
            onSubmit: editFormSchema
        },
        onSubmit: async ({value}) => {
            const updatedBook = await editBook({
                id: book.id,
                title: value.title,
                author: value.author,
                published: value.published,
                isbn: value.isbn
            });

            if (updatedBook) {
                toast.success("Book updated!", {
                position: "top-center",
                duration: 4000
                })
                router.push(`../books/${updatedBook.id}`);
            } else {
                toast.error("Something went wrong!");
            }
        }
    });    

    return(
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit(e);
            }}
            className="p-4 max-w-6xl mx-auto"
        >
            <FieldGroup>
                <form.Field name="title">
                    {(field) => (
                        <div>
                            <label htmlFor={field.name}>
                                Title
                            </label>
                            <input
                                id={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Title"
                                className="w-sm border rounded mx-3 px-2 py-2 max-w-4xs"
                            />
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-red-500">
                                    {field.state.meta.errors.map((err) => {
                                        if (typeof err === 'string') return err;
                                        if (typeof err === 'object' && err.message) return err.message;
                                        return 'Invalid input';
                                    }).join(', ')}
                                </p>)
                            }
                        </div>
                    )}
                </form.Field>

                <form.Field name="author">
                    {(field) => (
                        <div>
                            <label htmlFor={field.name}>
                                Author
                            </label>
                            <input
                                id={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Author"
                                className="w-sm border rounded mx-3 px-2 py-2 max-w-4xs"
                            />
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-red-500">
                                    {field.state.meta.errors.map((err) => {
                                        if (typeof err === 'string') return err;
                                        if (typeof err === 'object' && err.message) return err.message;
                                        return 'Invalid input';
                                    }).join(', ')}
                                </p>)
                            }
                        </div>
                    )}
                </form.Field>

                <form.Field name="published">
                    {(field) => (
                        <div>
                            <label htmlFor={field.name}>
                                Published
                            </label>
                            <input
                                id={field.name}
                                type="date"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Select a date"
                                className="w-sm border rounded mx-3 px-2 py-2 max-w-3xs"
                            />
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-red-500">
                                    {field.state.meta.errors.map((err) => {
                                        if (typeof err === 'string') return err;
                                        if (typeof err === 'object' && err.message) return err.message;
                                        return 'Invalid input';
                                    }).join(', ')}
                                </p>)
                            }
                        </div>
                    )}
                </form.Field>

                <form.Field name="isbn">
                    {(field) => (
                        <div>
                            <label htmlFor={field.name}>
                                ISBN
                            </label>
                            <input
                                id={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="ISBN"
                                className="w-sm border rounded mx-3 px-2 py-2 max-w-2xs"
                            />
                            {field.state.meta.errors.length > 0 && (
                                <p className="text-red-500">
                                    {field.state.meta.errors.map((err) => {
                                        if (typeof err === 'string') return err;
                                        if (typeof err === 'object' && err.message) return err.message;
                                        return 'Invalid input';
                                    }).join(', ')}
                                </p>)
                            }
                        </div>
                    )}
                </form.Field>

                <Button type="submit" className="w-sm">Update Book</Button>

            </FieldGroup>
        </form>
);




}