import { createClient } from "@/app/utils/supabase/server";

import { WorkSpace } from "../_components/WorkSpace";
import { Form } from "../_components/Form";
import { FaRegStar } from "react-icons/fa6";

export interface ResponseProp {
  "Get all workspaces": GetAllWorkspace[];
 }
 
 export interface GetAllWorkspace {
  created_at: Date;
  id:         string;
  title:      string;
  user_id:    string;
 }
 

export default async function OrganizationPage() {

  const supabase = createClient()
  
  const { data } = await supabase.auth.getUser();
  if(!data.user){
    console.log('User not found')
    return
  }
  const { id, email }  =  data.user;

  console.log(id)



  const response: ResponseProp = await fetch(`http://localhost:3000/api/workspace/${id}`, {
                          method: 'GET',
                          headers: {
                              'Content-type': 'application/json',
                          },
                      })
                          .then((response) => response.json())
                          .then((data) => {
                              return data;
                          })
                          .catch((error) => {
                              console.error(error);
                          });


  return (
    <>
      <div className="py-4 flex items-center gap-2">
        <FaRegStar className="text-rose-500 text-2xl border rounded-xl p-1 border-rose-500" />
        <h2 className="text-3xl font-semibold">WorkSpace</h2>
      </div>      
      <Form />
      <div className="flex flex-wrap pt-4">
        {
          response["Get all workspaces"].map((workspace) => (
            <WorkSpace key={workspace.id} title={workspace.title} id={workspace.id}  />
          ))
        }
      </div>
    </>
  );
}