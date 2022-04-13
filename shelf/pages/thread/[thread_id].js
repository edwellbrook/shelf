import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";

import RecordGrid from "@/components/RecordGrid";
import Footer from "@/components/Footer";

export default function ThreadPage({ threadId }) {
  const router = useRouter();

  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>
        <link
          rel="canonical"
          href={`https://musicthread.app/thread/${threadId}`}
        />

        <Script src="/vanilla-tilt.js" />
      </Head>

      <main className="content clearfix">
        <RecordGrid threadId={threadId} size={router.query.size} />
      </main>

      <Footer />
    </div>
  );
}

ThreadPage.getInitialProps = (ctx) => {
  return { threadId: ctx.query.thread_id };
};
