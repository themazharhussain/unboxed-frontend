import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 flex flex-col items-start gap-4">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
        404
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Page not found
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-11 items-center rounded-lg bg-zinc-900 dark:bg-zinc-50 px-6 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
      >
        Go home
      </Link>
    </section>
  );
}
