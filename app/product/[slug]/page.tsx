import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug) ?? products[0];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-6 text-sm text-stone-500">
          <Link href="/" className="hover:text-brand-700">Home</Link>
          <span> / </span>
          <Link href="/products" className="hover:text-brand-700">Shop</Link>
          <span> / {product.name}</span>
        </div>

        <div className="grid gap-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-100 to-stone-200 p-10">
            <div className="flex h-full min-h-[320px] items-center justify-center rounded-[1.25rem] border border-white/60 bg-white/40 text-8xl">
              ✨
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">{product.category}</p>
            <h1 className="mt-3 text-4xl font-semibold text-stone-900">{product.name}</h1>
            <p className="mt-3 text-3xl font-semibold text-brand-700">₹{product.price}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-stone-600">
              <span>★★★★★</span>
              <span>4.9 (126 reviews)</span>
            </div>

            <p className="mt-6 text-stone-600">{product.description}</p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-800">
                Add to cart
              </button>
              <button className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-brand-600 hover:text-brand-700">
                Wishlist
              </button>
            </div>

            <div className="mt-8 space-y-6 border-t border-stone-200 pt-8">
              <div>
                <p className="font-semibold text-stone-900">Fragrance notes</p>
                <p className="mt-2 text-stone-600">{product.notes}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Ideal for</p>
                <p className="mt-2 text-stone-600">Evening occasions, gifting, festive wear and premium daily rituals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
