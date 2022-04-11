import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

import RecordGrid from "../components/RecordGrid";

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

      <footer id="footer" class="footer">
        <ul>
          <li>
            <a class="rainbow-1" href="/about">
              About
            </a>
          </li>
          <li>
            <a class="rainbow-2" href="/acknowledgements">
              Acknowledgements
            </a>
          </li>
          <li>
            <a class="rainbow-3" href="https://github.com/barrowclift/shelf">
              Contribute
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
