import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';

export const metadata: Metadata = {
  title: 'AURELIA | Luxury Perfumes for India',
  description: 'Premium Indian perfume brand with luxury gifting, fragrance discovery, and secure checkout.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
