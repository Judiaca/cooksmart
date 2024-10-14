import { SessionProvider } from "next-auth/react";
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles /> {/* Include GlobalStyles here */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
