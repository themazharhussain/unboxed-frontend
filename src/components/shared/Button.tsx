import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary: "btn-primary",
    outline:
      "inline-flex items-center justify-content-center w-[209px] h-[58px] rounded-[100px] border border-primary/30 text-primary text-[16px] font-[500] leading-[21px] cursor-pointer transition-opacity hover:opacity-80 active:opacity-60",
  };

  const classes = `${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
