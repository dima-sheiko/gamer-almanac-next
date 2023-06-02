import { Silkscreen } from 'next/font/google';
import Link from 'next/link';
import ThemeSwitcher from './themeSwitcher';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export default function Header() {
  return (
    <header
      className={`${silkscreen.className} flex flex-col items-center justify-center gap-4`}
    >
      <h1 className="text-center text-5xl sm:text-6xl">
        <Link href="/">
          Gamer Almanac
          <sub className="align-top text-xl sm:text-2xl">2.0</sub>
        </Link>
      </h1>
      <ThemeSwitcher />
    </header>
  );
}
