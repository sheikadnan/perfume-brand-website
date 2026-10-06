export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-[0.2em] text-brand-700">AURELIA</p>
          <p className="mt-4 text-sm text-stone-600">Luxury perfumes for modern rituals and memorable gifting.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li>Best sellers</li>
            <li>Gift sets</li>
            <li>Signature collection</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li>Shipping & returns</li>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">Follow</p>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 px-6 py-5 text-center text-sm text-stone-500 lg:px-8">
        © 2026 AURELIA. Crafted for India.
      </div>
    </footer>
  );
}
