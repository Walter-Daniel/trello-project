import { Button } from "@nextui-org/react";
import { logout } from "./logout/actions";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  // const supabase = createClient()
  // const { data } = await supabase.auth.getUser()

//De aca trae los workspaces de la persona logeada

  // const myWorkspaces = await supabase.from("workspaces").select("*").eq("user_id", data?.user?.id);
  // console.log("Mis workspaces",myWorkspaces);
  
  
  
  return (
    <form action={logout}>
      <Button type="submit">
        LOGOUT
      </Button>
    </form>
  );
}
