import Head from "next/head";

import Footer from "../components/Footer";

export default function AcknowledgementsPage({}) {
  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>
      </Head>

      <main class="content clearfix">
        <div class="writing">
          <h1 id="acknowledgements">Acknowledgements</h1>
          <p>
            Shelf was orginally built as a{" "}
            <a href="https://shelf.barrowclift.me/about">
              stand-alone open-source project
            </a>{" "}
            by <a href="https://twitter.com/@Barrowclift">Marc Barrowclift</a>.
            This project wouldn't exist without his fantastic work and generious
            open-source license.
          </p>

          <p>Thank you, Marc.</p>

          <p>
            This version of Shelf is powered by the{" "}
            <a href="https://musicthread.app/">MusicThread API</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
