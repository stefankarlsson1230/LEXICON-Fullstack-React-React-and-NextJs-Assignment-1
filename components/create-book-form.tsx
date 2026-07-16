"use client"

import { formSchema } from "@/app/_validation/form-schema";
import { useForm } from "@tanstack/react-form";
import { FieldGroup } from "./ui/field";
import { Button } from "./ui/button";


export function CreateBookForm() {
    const form = useForm({
        defaultValues: {
            title: "",
            author: "",
            published: "2000-01-01",
            isbn: ""
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({value}) => {
            // The submitting part!!
            alert("Book created!!!");
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

                <Button type="submit" className="w-sm">Create Book</Button>

            </FieldGroup>
        </form>
);




}