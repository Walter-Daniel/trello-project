import { getList } from "@/actions/get-list";

interface WorkSpace {
  params : {
    organizationId: string;
  }
}

export default async function OrganizationIdPage({params}:WorkSpace) {

  console.log(params.organizationId)

  const list = await getList(params.organizationId)

  console.log(list)


  return (
    <>
      <h2>DESDE EL ID</h2>
    </>
  );
}