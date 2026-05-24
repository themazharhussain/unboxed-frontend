import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Welcome to Unboxed
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A clean starting point for your Next.js App Router project. Simple,
          fast, and ready for you to build on.
        </p>
        <Button href="/about">Learn more</Button>
      </Container>
    </section>
  );
}
