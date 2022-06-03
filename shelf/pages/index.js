import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import useSWR from "swr"

import RecordGrid from "@/components/RecordGrid"
import Footer from "@/components/Footer"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useAccount(accountToken) {
  const url = `https://musicthread.app/api/v0/account/${accountToken}`
  const { data, error } = useSWR(url, fetcher)

  return {
    account: data?.account,
    threads: data?.threads,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function Home() {
  const accountToken = "8mtCK1RdXh4SopcY0-9Ywn5I0HBynZq-hHO9ig0pObI"
  const { account, threads, isLoading, isError } = useAccount(accountToken)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error...</span>
  }

  return (
    <div id="wrap">
      <Head>
        <title>Shelf</title>

        <Script src="/vanilla-tilt.js" />
      </Head>

      <main class="content clearfix">
        <ul>
          {threads.map((thread) => (
            <li key={thread.key}>
              <Link href={`/thread/${thread.key}`}>
                <a>{thread.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
