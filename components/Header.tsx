import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="text-2xl font-semibold tracking-[0.2em] text-brand-700">
          AURELIA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-stone-700 transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:border-brand-600 hover:text-brand-700">
            Cart (2)
          </Link>
          <Link href="/checkout" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800">
            Checkout
          </Link>
        </div>
      </div>
    </header>
  );
}
