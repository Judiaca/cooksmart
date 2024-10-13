import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/Layout";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <Layout>
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    </Layout>
  );
}
