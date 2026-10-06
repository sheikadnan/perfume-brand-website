import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 text-center text-stone-800">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-stone-900">Page not found</h1>
        <p className="mt-4 text-stone-600">The fragrance you’re looking for seems to have drifted away.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white hover:bg-brand-800">
          Return home
        </Link>
      </div>
    </main>
  );
}
