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
      ? `inline-flex items-center justify-center rounded-[100px] bg-primary text-body text-base font-medium cursor-pointer transition-opacity hover:opacity-90 active:opacity-90 ${className}`
      : `inline-flex items-center justify-center rounded-[100px] bg-[#EEEEED] text-primary text-base font-medium cursor-pointer transition-opacity hover:opacity-90 active:opacity-90 ${className}`;

  if (href) {
    return (
      <Link href={href} style={style} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={style} className={classes}>
      {children}
    </button>
  );
}
