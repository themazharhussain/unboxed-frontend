import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function CTA() {
  return (
    <section className="py-16 border-t border-zinc-100 dark:border-zinc-800">
      <Container className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Ready to build?
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          Start by editing the pages and components in this project.
        </p>
        <Button href="/contact">Get in touch</Button>
      </Container>
    </section>
  );
}
