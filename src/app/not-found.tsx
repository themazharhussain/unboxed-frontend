import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center space-y-4">
        <p className="text-sm font-medium text-secondary uppercase tracking-widest">
          404
        </p>
        <h1 className="text-4xl font-semibold md:text-6xl">
          Page not found
        </h1>
        <p className="text-[18px] text-secondary max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="pt-2">
          <Button href="/">Go home</Button>
        </div>
      </div>
    </Container>
  );
}
