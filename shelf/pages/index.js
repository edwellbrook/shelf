import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import RecordGrid from "../components/RecordGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>

        <Script src="/vanilla-tilt.js" />
      </Head>

      <main class="content clearfix">
        <RecordGrid threadId="1mw65aa2pIu4rIH9yPwn8SUj6dy" />
      </main>

      <Footer />
    </div>
  );
}
