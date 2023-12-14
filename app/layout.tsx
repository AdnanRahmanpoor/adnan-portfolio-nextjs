import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/utils/SmoothScrolling';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Adnan's Portfolio",
  description: 'Personal Portfolio site made using Next.JS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <SmoothScrolling>
        <body className={inter.className}>{children}</body>
      </SmoothScrolling>
    </html>
  );
}
