import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  width?: number | string;
  height?: number | string;
  className?: string;
}

function ButtonLabel({ children }: { children: React.ReactNode }) {
  if (typeof children !== "string") {
    return <span>{children}</span>;
  }

  return (
    <span className="flex h-[1em] items-center overflow-hidden leading-none">
      {children.split("").map((char, index) => {
        if (char === " ") {
          return (
            <span key={index} className="w-[0.3em]" aria-hidden="true">&nbsp;</span>
          );
        }
        return (
          <span key={index} className="relative inline-block h-[1em] overflow-hidden">
            <span
              className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              <span className="h-[1em] leading-[1em]">{char}</span>
              <span className="h-[1em] leading-[1em]">{char}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  width = 209,
  height = 58,
  className = "",
}: ButtonProps) {
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  const classes =
    variant === "primary"
      ? `group inline-flex items-center justify-center overflow-hidden rounded-[100px] bg-primary text-body text-base font-medium cursor-pointer ${className}`
      : `group inline-flex items-center justify-center overflow-hidden rounded-[100px] bg-[#EEEEED] text-primary text-base font-medium cursor-pointer ${className}`;

  if (href) {
    return (
      <Link href={href} style={style} className={classes}>
        <ButtonLabel>{children}</ButtonLabel>
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={style} className={classes}>
      <ButtonLabel>{children}</ButtonLabel>
    </button>
  );
}
