import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

import RecordGrid from "../components/RecordGrid";
import Footer from "../components/Footer";

export default function Home() {
  const records = [
    {
      id: "test",
      title: "test",
      artist: "test",
      artworkURL: null,
      discogsURL: null,
    },
  ];

  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>

        <Script src="/vanilla-tilt.js" />
      </Head>

      <main class="content clearfix">
        <RecordGrid records={records} />
      </main>

      <Footer />
    </div>
  );
}
