import { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import "../styles/global.css";
import Context from "context/Context";

export default function MyApp({ Component, pageProps }: AppProps) {
  //Providers - Context/Providers, Theme, data
  //Layout
  //props adicionales

  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
