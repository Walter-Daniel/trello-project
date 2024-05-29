import { Button } from "@nextui-org/react";
import { logout } from "./logout/actions";

export default function Home() {
  return (
    <form action={logout}>
      <Button type="submit">
        LOGOUT
      </Button>
    </form>
  );
}
