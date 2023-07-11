import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Auto trader AG',
  description: 'Find the latest updates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classNames = [inter.className, 'bg-gray-50'];
  return (
    <html lang="en">
      <body className={classNames.join(' ')}>{children}</body>
    </html>
  );
}
