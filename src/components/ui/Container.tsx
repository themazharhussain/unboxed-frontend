interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-275 px-4">
        {children}
      </div>
    </section>
  );
}
