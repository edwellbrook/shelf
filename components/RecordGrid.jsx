import Record from "./Record"

export default function RecordGrid({ thread, links, size }) {
    const sizeOptions = {
        l: "large",
        xl: "extra_large",
    }
    const sizeClass = sizeOptions[size]

    return (
        <section id="records">
            <header>
                <h1 id="thread_title">{thread.title}</h1>
                <span>by {thread.author.name}</span>

                {thread.description ? <p className="description">{thread.description}</p> : null}
            </header>

            <ul className={sizeClass}>
                {links.map((link) => (
                    <Record key={link.key} title={link.title} artist={link.artist} artworkURL={link.thumbnail_url} discogsURL={link.page_url} />
                ))}
            </ul>
        </section>
    )
}
