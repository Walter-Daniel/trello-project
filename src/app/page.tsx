import { Button } from "@nextui-org/react";
import { logout } from "./logout/actions";
import { createClient } from "./utils/supabase/server";

export default async function Home() {
  return (
    <form action={logout}>
      <Button type="submit">LOGOUT</Button>
    </form>
  );
}
