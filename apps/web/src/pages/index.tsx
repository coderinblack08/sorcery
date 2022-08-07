import { Button, Heading } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Web() {
  return (
    <div>
      <Heading as="h1">Web</Heading>
      <Button onClick={() => signIn("github")}>Login with GitHub</Button>
    </div>
  );
}
