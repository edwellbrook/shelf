import useSWR from "swr";

import Record from "./Record";

function RecordGridLoading({}) {
  return (
    <ul>
      <transition-group name="zoom">
        <div v-if="loadingSpinnerVisible" id="loading-spinner" key="theSpinner">
          <div class="progress-text">
            <span>
              Slowly loading records from Discogs... (requests are severely rate
              limited, please be patient)
            </span>
            <div class="spinner"></div>
          </div>
        </div>

        {/* {% include "record" %} */}
      </transition-group>
    </ul>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useThread(threadKey) {
  const { data, error } = useSWR(
    `https://musicthread.app/api/v0/thread/${threadKey}`,
    fetcher
  );

  return {
    thread: data?.thread,
    links: data?.links,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function RecordGrid({ threadId }) {
  const { thread, links, isLoading, error } = useThread(threadId);

  if (isLoading) {
    return <RecordGridLoading />;
  }

  if (error) {
    return <span>Error</span>;
  }

  return (
    <div id="records">
      <ul>
        {links.map((link) => (
          <Record
            key={link.key}
            title={link.title}
            artist={link.artist}
            artworkURL={link.thumbnail_url}
            discogsURL={link.page_url}
          />
        ))}
      </ul>
    </div>
  );
}
