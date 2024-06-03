'use client'

import { create } from "@/actions/create-workspace"
import { Button, Input } from "@nextui-org/react"
import { useFormState, useFormStatus } from "react-dom";

export const Form = () => {

    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(create, initialState);
    const { pending } = useFormStatus();

  return (
    <form action={dispatch} className="flex flex-col gap-4 md:w-1/4">
        <div className="flex flex-col">
            <Input
            id="title"
            name="title"
            label="Title"
            placeholder="Enter a board title"
            isDisabled={pending}
            isRequired
            variant="bordered"
            labelPlacement="outside"
            fullWidth
            />
        {state?.errors?.title ? (
           <div>
            {
                state.errors.title.map((error:string, index) => (
                    <p key={index} className="text-rose-500">{error}</p>
                ))
            }
           </div>
        ): null}
        </div>
        <Button type="submit" disabled={pending} className={`${pending ? 'bg-gray-600' :'bg-black '} text-white`}>Submit</Button>
    </form>
  )
}
