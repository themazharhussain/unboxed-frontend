import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "App Router",
    description: "Built on Next.js App Router with server components by default.",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling with full dark mode support.",
  },
  {
    title: "Motion",
    description: "Smooth animations powered by Motion for React.",
  },
];

export default function Features() {
  return (
    <section className="py-16 border-t border-zinc-100 dark:border-zinc-800">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          title="Features"
          subtitle="Everything you need to get started."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-2"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
