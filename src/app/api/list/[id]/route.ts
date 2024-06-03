import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const supabase = createClient();
    const id = params.id;
    
    const body = await req.json();
    const {title} = body;
   
  
    const { data, error } = await supabase
      .from("lists")
      .update([{title}])
      .eq("id", id);
  
    if (error) {
      return NextResponse.json(
        { error: "Error updating title " },
        { status: 500 }
      );
    }
  
    return NextResponse.json({ updated_list: data });
  }