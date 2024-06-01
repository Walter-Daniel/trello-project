import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
export async function POST(
  req: Request,
  { params }: { params: { workspace_id: string } }
) {
  const supabase = createClient();
  const workspace_id = params.workspace_id;
  const body = await req.json();
  const { title } = body;

  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("lists")
    .insert([{ title, workspace_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ "list created": data }, { status: 201 });
}
export async function GET(
  req: Request,
  { params }: { params: { workspace_id: string } }
) {
  const supabase = createClient();
  const workspace_id = params.workspace_id;

  const { data, error } = await supabase
    .from("lists")
    .select("*")
    .eq("workspace_id", workspace_id);

  if (error) {
  
    return NextResponse.json(
      { error: "Error fetching lists" },
      { status: 500 }
    );
  }
  if (!data.length ) {
    return Response.json("There are no lists in this workspace");
  }
  return Response.json({ "Get all list": data });
}
