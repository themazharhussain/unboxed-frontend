interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <section className="w-full mx-auto flex items-center justify-center" >
     <div className="w-full max-w-250">
       {children}
     </div>
    </section>
  );
}
