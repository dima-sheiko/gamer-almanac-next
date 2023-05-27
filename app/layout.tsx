import Navbar from './components/navbar';
import './styles/globals.css';

export const metadata = {
  title: 'Gamer Almanac 2.0',
  description: 'Gaming library app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
