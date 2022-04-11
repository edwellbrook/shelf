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
            Shelf would not exist without the data provided by these fine sites:
          </p>
          <ul>
            <li>
              <a href="https://boardgamegeek.com">BoardGameGeek</a>: Board game
              data source
            </li>
            <li>
              <a href="https://www.discogs.com">Discogs</a>: Record data source
              <ul>
                <li>
                  Apple&rsquo;s{" "}
                  <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">
                    iTunes Search API
                  </a>
                  : Secondary record cover art source
                </li>
              </ul>
            </li>
          </ul>

          <p>Many thanks to the following individuals:</p>
          <ul>
            <li>
              <a href="https://gmigdos.wordpress.com/author/cyberpython/">
                George
              </a>
              , for his{" "}
              <a href="https://gmigdos.wordpress.com/2011/01/13/javascript-convert-rgb-values-to-hsl/">
                clever solution
              </a>{" "}
              to convert RGB values to the HSL colorspace
            </li>
            <li>
              <a href="https://davidwalsh.name">David Walsh</a>, for his{" "}
              <a href="https://davidwalsh.name/css-cube">3D CSS cube</a> which
              proved the base for Shelf's experimental 3D board game rendering
              style
            </li>
            <li>
              <a href="https://meyerweb.com/ui/about.html">Eric A. Meyer</a>,
              for his legendary{" "}
              <a href="https://meyerweb.com/eric/tools/css/reset/">
                reset stylesheet
              </a>
            </li>
          </ul>

          <p>
            Finally, Shelf was built on the shoulders of these open source
            projects:
          </p>
          <ul>
            <li>
              <a href="https://nodejs.org/en/">Node</a> &amp;{" "}
              <a href="https://www.npmjs.com">NPM</a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
