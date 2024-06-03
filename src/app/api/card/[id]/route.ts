import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const supabase = createClient();
    const id = params.id;
    
    const body = await req.json();
    const {title, description} = body;
    const updates: { title?: string, description?: string } = {};

    if (title) {
      updates.title = title;
    }
  
    if (description) {
      updates.description = description;
    }
   
  
    const { data, error } = await supabase
      .from("cards")
      .update(updates)
      .eq("id", id);
  
    if (error) {
      return NextResponse.json(
        { error: "Error updating title or description" },
        { status: 500 }
      );
    }
  
    return NextResponse.json({ updated_card: data });
  }