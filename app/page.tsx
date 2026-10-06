import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <main className="bg-stone-50 text-stone-800">
      <Header />

      <section className="relative overflow-hidden bg-hero-pattern bg-stone-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-brand-600">
              Crafted in India • Luxury fragrance house
            </p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
              Scents that linger in your story.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-stone-600">
              Discover premium perfumes made for every mood, occasion and moment worth remembering.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/products" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-800">
                Shop The Collection
              </a>
              <a href="/about" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-brand-600 hover:text-brand-700">
                Our Story
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-stone-600">
              <div>
                <p className="text-2xl font-semibold text-stone-900">10k+</p>
                <p>happy customers</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-stone-900">4.9/5</p>
                <p>average rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-stone-900">48h</p>
                <p>dispatch</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-transparent to-brand-200 blur-3xl" />
            <div className="relative rounded-[2rem] border border-stone-200 bg-white p-4 shadow-luxury">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 p-8 text-white">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-brand-100">
                  <span>Signature edit</span>
                  <span>30ml</span>
                </div>
                <div className="mt-8 rounded-[1.25rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                  <div className="flex h-52 items-center justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 text-3xl shadow-2xl">
                      ✨
                    </div>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-brand-100">No. 09</p>
                      <h2 className="mt-2 text-3xl font-semibold">Velvet Oud</h2>
                    </div>
                    <p className="text-2xl font-semibold">₹3,499</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Best sellers</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900">Fragrance favourites</h2>
          </div>
          <a href="/products" className="text-sm font-medium text-brand-700">View all products →</a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-brand-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3 lg:px-8">
          {[
            { label: 'Free shipping', value: 'On orders above ₹999' },
            { label: 'Secure checkout', value: 'UPI, cards & net banking' },
            { label: 'Luxury gifting', value: 'Elegant boxes & notes included' }
          ].map((feature) => (
            <div key={feature.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-200">{feature.label}</p>
              <p className="mt-4 text-lg font-medium">{feature.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Why customers choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900">Perfume crafted for the rhythm of your life.</h2>
            <div className="mt-8 space-y-8">
              {[
                ['Long-lasting notes', 'An immersive blend that stays with you from sunrise to evening plans.'],
                ['Luxury ingredients', 'Sourced for richness, warmth and clean, balanced composition.'],
                ['Indian gifting culture', 'Thoughtful presentation for birthdays, weddings and celebrations.']
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-xl text-brand-700">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
                    <p className="mt-1 text-stone-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-luxury">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-stone-900 via-stone-800 to-brand-700 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-100">The fragrance guide</p>
              <h3 className="mt-4 text-2xl font-semibold">Find your signature scent</h3>
              <ul className="mt-6 space-y-4 text-sm text-stone-200">
                <li>• Fresh and citrusy: ideal for daytime energy</li>
                <li>• Floral and soft: perfect for everyday elegance</li>
                <li>• Woody and warm: made for evening occasions</li>
                <li>• Amber and musky: long-lasting luxury depth</li>
              </ul>
              <a href="/products" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-900">Explore by scent profile</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Loved by customers</p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900">Reviews from fragrance lovers</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['“The packaging felt premium and the scent lasted beautifully all evening.”', '— Ananya M.'],
            ['“A sophisticated fragrance brand that feels luxurious without being too heavy.”', '— Raghav S.'],
            ['“I bought this as a gifting set for my sister and she loved it.”', '— Mehek P.']
          ].map(([quote, name]) => (
            <div key={name} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-brand-600">★★★★★</p>
              <p className="mt-4 text-stone-700">{quote}</p>
              <p className="mt-6 font-medium text-stone-900">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
