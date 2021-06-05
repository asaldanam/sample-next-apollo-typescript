import HeadTag from 'components/core/Head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <HeadTag />
      <main>
        {/* <Link href="/animes">Animes</Link> */}
        <ul>
          <li>
            <Link href="/static">Static Page Example</Link>
          </li>
          <li>
            <Link href="/incremental">Incremental Page Example</Link>
          </li>
          <li>
            <Link href="/server">Server Page Example</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
