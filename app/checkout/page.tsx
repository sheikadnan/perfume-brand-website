import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Checkout</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-900">Secure payment</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">Delivery details</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-stone-300 px-4 py-3" placeholder="Full name" />
                <input className="rounded-xl border border-stone-300 px-4 py-3" placeholder="Phone number" />
                <input className="md:col-span-2 rounded-xl border border-stone-300 px-4 py-3" placeholder="Street address" />
                <input className="rounded-xl border border-stone-300 px-4 py-3" placeholder="City" />
                <input className="rounded-xl border border-stone-300 px-4 py-3" placeholder="Pincode" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">Payment method</h2>
              <div className="mt-6 space-y-3 text-stone-700">
                <label className="flex items-center gap-3 rounded-xl border border-stone-300 p-3"><input type="radio" name="payment" defaultChecked /> UPI / Cards / Netbanking</label>
                <label className="flex items-center gap-3 rounded-xl border border-stone-300 p-3"><input type="radio" name="payment" /> Cash on delivery</label>
              </div>
              <div className="mt-6 rounded-xl bg-brand-50 p-4 text-sm text-brand-800">
                Razorpay-ready payment experience for Indian customers with UPI, cards and net banking support.
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Order total</h2>
            <div className="mt-6 space-y-4 text-stone-600">
              <div className="flex justify-between"><span>Velvet Oud</span><span>₹3,499</span></div>
              <div className="flex justify-between"><span>Citrus Bloom</span><span>₹2,999</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₹0</span></div>
            </div>
            <div className="my-6 h-px bg-stone-200" />
            <div className="flex justify-between text-lg font-semibold text-stone-900">
              <span>Total</span>
              <span>₹6,498</span>
            </div>
            <button className="mt-8 w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-800">
              Pay with Razorpay
            </button>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
