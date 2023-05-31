import { Silkscreen } from 'next/font/google';
import Link from 'next/link';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export default function Header() {
  return (
    <header className={silkscreen.className}>
      <Link href="/">
        <h1 className="text-center text-5xl sm:text-6xl">
          Gamer Almanac
          <sub className="align-top text-xl sm:text-2xl">2.0</sub>
        </h1>
      </Link>
    </header>
  );
}
