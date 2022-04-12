import useSWR from "swr";

import Record from "./Record";

function RecordGridLoading({}) {
  return (
    <transition-group name="zoom">
      <div id="loading-spinner" key="theSpinner">
        <div class="progress-text">
          <span>Loading...</span>
          <div class="spinner"></div>
        </div>
      </div>
    </transition-group>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useThread(threadKey) {
  const url = `https://musicthread.app/api/v0/thread/${threadKey}`;
  const { data, error } = useSWR(url, fetcher);

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
