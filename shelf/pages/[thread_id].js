import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

import RecordGrid from "../components/RecordGrid";
import Footer from "../components/Footer";

export default function ThreadPage({}) {
  const router = useRouter();
  const { thread_id: threadId } = router.query;

  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>

        <Script src="/vanilla-tilt.js" />
      </Head>

      <main class="content clearfix">
        <RecordGrid threadId={threadId} />
      </main>

      <Footer />
    </div>
  );
}
