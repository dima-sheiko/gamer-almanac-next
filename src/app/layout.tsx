import { Roboto_Flex } from 'next/font/google';
import Header from '../components/header';
import '../styles/globals.css';
import QueryProvider from '../lib/queryProvider';

export const metadata = {
  title: 'Gamer Almanac 2.0',
  description: 'Gaming library app',
};

const roboto = Roboto_Flex({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={roboto.className}
    >
      <body className="bg-emerald-100">
        <div className="m-auto max-w-[1440px] p-5">
          <Header />
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
