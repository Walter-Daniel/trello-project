'use server'

import { revalidatePath } from "next/cache"

export async function deleteWorkSpace(id: string){
    console.log('delete', id)
    // revalidatePath(`/organization/58de8aa0-3a3b-4e6d-bd11-0e47716bde39`)
    // return

}