import useSWR from "swr";

import Record from "./Record";

function RecordGridLoading({}) {
  return (
    <transition-group name="zoom">
      <div id="loading-spinner" key="theSpinner">
        <div className="progress-text">
          <span>Loading...</span>
          <div className="spinner"></div>
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

export default function RecordGrid({ threadId, size }) {
  const { thread, links, isLoading, isError } = useThread(threadId);

  if (isLoading) {
    return <RecordGridLoading />;
  }

  if (isError) {
    return <span>Error</span>;
  }

  const sizeOptions = {
    l: "large",
    xl: "extra_large",
  };
  const sizeClass = sizeOptions[size];

  return (
    <section id="records">
      <header>
        <h1 id="thread_title">{thread.title}</h1>
        <span>by {thread.author.name}</span>

        {thread.description ? (
          <p className="description">{thread.description}</p>
        ) : null}
      </header>

      <ul className={sizeClass}>
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
    </section>
  );
}
