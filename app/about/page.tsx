import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Our story</p>
        <h1 className="mt-4 text-4xl font-semibold text-stone-900">Elegant fragrance rooted in India.</h1>
        <div className="mt-10 space-y-8 text-lg leading-8 text-stone-600">
          <p>
            AURELIA was born from the idea that fragrance should be as personal as the memories it creates.
            We build each scent to capture warmth, elegance and emotion in a way that feels distinctly modern yet timeless.
          </p>
          <p>
            Our perfumers combine rich ingredients, refined artistry and a love of Indian culture to craft bottles that
            feel luxurious from the first scent to the final trace.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            ['Crafted with intention', 'Every scent is prepared to balance elegance, brightness and lasting depth.'],
            ['Made for gifting', 'Beautiful packaging and curated fragrances for celebrations and milestones.'],
            ['Designed for daily rituals', 'Luxury fragrance that fits workdays, evenings and cherished memories.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
              <p className="mt-3 text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
