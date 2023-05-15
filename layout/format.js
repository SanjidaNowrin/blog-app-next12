import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function Format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
