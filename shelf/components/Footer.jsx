import Link from "next/link";

export default function Footer({}) {
  return (
    <footer id="footer" class="footer">
      <ul>
        <li>
          <Link href="/">
            <a class="rainbow-1">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/acknowledgements">
            <a class="rainbow-2">Acknowledgements</a>
          </Link>
        </li>
        <li>
          <a class="rainbow-3" href="https://github.com/barrowclift/shelf">
            Contribute
          </a>
        </li>
      </ul>
    </footer>
  );
}
