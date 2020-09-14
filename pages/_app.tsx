import "../styles/globals.css";
import "../styles/flex.css";
import "../styles/sticky-header.css";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
