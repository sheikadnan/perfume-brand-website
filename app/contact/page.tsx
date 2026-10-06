import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Contact us</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-900">We’d love to hear from you.</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-medium text-stone-700">
                Name
                <input className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="Your name" />
              </label>
              <label className="block text-sm font-medium text-stone-700">
                Email
                <input className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-6 block text-sm font-medium text-stone-700">
              Subject
              <input className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="How can we help?" />
            </label>
            <label className="mt-6 block text-sm font-medium text-stone-700">
              Message
              <textarea className="mt-2 min-h-[140px] w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="Tell us about your query" />
            </label>
            <button className="mt-8 rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-800">
              Send message
            </button>
          </form>

          <div className="rounded-[2rem] border border-stone-200 bg-brand-900 p-8 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <div className="mt-8 space-y-6 text-brand-100">
              <p>Email: hello@aurelia.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 24 Rosewood Avenue, Bengaluru, Karnataka 560001</p>
              <p>Hours: Monday to Saturday, 10:00 AM to 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
