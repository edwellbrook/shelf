import Link from "next/link"

export default function Footer({}) {
  return (
    <footer id="footer" className="footer">
      <ul>
        <li>
          <Link href="/">
            <a className="rainbow-1">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/acknowledgements">
            <a className="rainbow-2">Acknowledgements</a>
          </Link>
        </li>
        <li>
          <a className="rainbow-3" href="https://github.com/edwellbrook/shelf">
            Contribute
          </a>
        </li>
      </ul>
    </footer>
  )
}
