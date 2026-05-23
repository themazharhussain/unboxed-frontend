import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <Container className="h-14 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-500">
        <span>© {new Date().getFullYear()} Unboxed. All rights reserved.</span>
        <span>Built with Next.js</span>
      </Container>
    </footer>
  );
}
