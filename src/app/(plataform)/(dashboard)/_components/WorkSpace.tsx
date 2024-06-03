import { deleteWorkSpace } from "@/actions/delete-workspace";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface WorkSpaceProps {
    title: string;
    id: string;
}

export const WorkSpace = ({ title, id }:WorkSpaceProps) => {
    const deleteWorkSpaceById = deleteWorkSpace.bind(null, id);
  return (
    <form className="space-y-2 flex-col items-center gap-2 p-2 m-2 border-gray-400 shadow-md min-h-[5rem] w-full md:w-[10rem]" action={deleteWorkSpaceById}>
        <p className="text-overlay">{title}</p>
        <Button as={Link} rel="stylesheet" href={`/organization/${id}`} size="sm" fullWidth>See more</Button>
        <Button type="submit" color="danger" size="sm" fullWidth>Delete</Button>
    </form>
  )
}
