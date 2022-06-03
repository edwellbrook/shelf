import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import { useRouter } from "next/router"
import useSWR from "swr"

import RecordGrid from "@/components/RecordGrid"
import Footer from "@/components/Footer"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useThread(threadKey) {
    const url = `https://musicthread.app/api/v0/thread/${threadKey}`
    const { data, error } = useSWR(url, fetcher)

    return {
        thread: data?.thread,
        links: data?.links,
        isLoading: !error && !data,
        isError: error,
    }
}

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
    )
}

export default function ThreadPage({ thread, links, error }) {
    const router = useRouter()

    // const { thread, links, isLoading, isError } = useThread(threadId)

    //     if (isLoading) {
    //         return (
    //             <div id="wrap">
    //                 <Head>
    //                     <title>Shelf</title>
    //                     <link rel="canonical" href={`https://musicthread.app/thread/${threadId}`} />
    //                 </Head>
    //
    //                 <main className="content clearfix">
    //                     <RecordGridLoading />
    //                 </main>
    //
    //                 <Footer />
    //             </div>
    //         )
    //     }

    if (error) {
        return (
            <div id="wrap">
                <Head>
                    <title>Shelf</title>
                    <link rel="canonical" href={`https://musicthread.app/thread/${threadId}`} />
                </Head>

                <main className="content clearfix">
                    <span>Error loading page</span>
                </main>

                <Footer />
            </div>
        )
    }

    return (
        <div id="wrap">
            <Head>
                <title>
                    {thread.title} by {thread.author.name} &bull; Shelf
                </title>
                <link rel="canonical" href={`https://musicthread.app/thread/${thread.id}`} />
            </Head>

            <main className="content clearfix">
                <RecordGrid thread={thread} links={links} size={router.query.size} />
            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://musicthread.app/api/v0/thread/${context.query.thread_id}`)
    const data = await res.json()

    return {
        props: {
            thread: data?.thread,
            links: data?.links,
            error: data?.error ?? null,
        },
    }
}
