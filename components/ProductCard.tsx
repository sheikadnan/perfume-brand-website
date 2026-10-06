import Link from 'next/link';

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  notes: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-luxury">
      <div className="flex h-64 items-center justify-center bg-gradient-to-br from-brand-100 via-white to-brand-200 text-6xl">
        ✦
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-700">
            {product.category}
          </span>
          <span className="text-sm text-stone-500">4.9 ★</span>
        </div>
        <h3 className="text-xl font-semibold text-stone-900">{product.name}</h3>
        <p className="mt-3 text-sm text-stone-600">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-semibold text-brand-700">₹{product.price}</p>
          <Link href={`/product/${product.slug}`} className="rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800">
            View product
          </Link>
        </div>
      </div>
    </article>
  );
}
