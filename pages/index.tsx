import HeadTag from 'components/core/Head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <HeadTag />
      <main>
        <Link href="/animes">Animes</Link>
      </main>
    </div>
  );
}
