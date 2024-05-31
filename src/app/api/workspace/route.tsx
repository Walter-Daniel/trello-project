import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
export async function POST(req) {
  const supabase = createClient();

  const body = await req.json();
  const { title, user_id } = body;


  if (!title || !user_id) {
    return NextResponse.json(
      { error: "title and user_id are required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("workspaces")
    .insert([{ title, user_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return Response.json({"  Workspaces created": data }, { status: 201 });
}

// export async function GET(){
//   const supabase = createClient()
//   const { data } = await supabase.auth.getUser()
//   const myWorkspaces = await supabase.from("workspaces").select("*").eq("user_id", data?.user?.id)
//   console.log("La data apapapapa",myWorkspaces);
  
//   return Response.json({"Get all workspaces": myWorkspaces})
// }