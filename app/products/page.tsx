import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Shop all</p>
            <h1 className="mt-3 text-4xl font-semibold text-stone-900">Luxury perfumes</h1>
          </div>
          <div className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-600">
            12 signature scents
          </div>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-4">
          {['All', 'Floral', 'Woody', 'Fresh', 'Amber'].map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-brand-600 hover:text-brand-700"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
