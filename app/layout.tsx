import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AURELIA | Luxury Perfumes for India',
  description: 'Discover luxury perfumes crafted for Indian lifestyles and gifting moments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
