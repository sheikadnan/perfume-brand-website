import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Your cart</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-900">Ready for checkout</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            {[
              ['Velvet Oud', '30ml', '₹3,499', '1'],
              ['Citrus Bloom', '50ml', '₹2,999', '1']
            ].map(([name, size, price, qty]) => (
              <div key={name} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-100 text-2xl">✦</div>
                  <div>
                    <p className="font-semibold text-stone-900">{name}</p>
                    <p className="text-sm text-stone-500">{size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-stone-600">Qty: {qty}</span>
                  <span className="font-semibold text-stone-900">{price}</span>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Summary</h2>
            <div className="mt-6 space-y-4 text-stone-600">
              <div className="flex justify-between"><span>Subtotal</span><span>₹6,498</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₹0</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-₹499</span></div>
            </div>
            <div className="my-6 h-px bg-stone-200" />
            <div className="flex justify-between text-lg font-semibold text-stone-900">
              <span>Total</span>
              <span>₹5,999</span>
            </div>
            <a href="/checkout" className="mt-8 block rounded-full bg-brand-700 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-brand-800">
              Proceed to checkout
            </a>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
