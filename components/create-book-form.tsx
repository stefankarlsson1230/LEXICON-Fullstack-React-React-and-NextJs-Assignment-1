"use client"

import { formSchema } from "@/app/_validation/form-schema";
import { useForm } from "@tanstack/react-form";
import { FieldGroup } from "./ui/field";


export function CreateBookForm() {
    const form = useForm({
        defaultValues: {
            title: "",
            author: "",
            published: new Date("2000-01-01"),
            isbn: ""
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({value}) => {
            // The submitting part!!
            alert("Post created!!!");
        }
    });    

    return(
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit(e);
            }}
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
                            />
                        </div>
                    )}
                </form.Field>



            </FieldGroup>



        </form>
);




}