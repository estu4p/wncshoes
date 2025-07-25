import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  url?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, children, url = "#", ...props }: ButtonProps) {
  const baseClass = "px-4 py-1 rounded-2xl text-white bg-red-500";
  return (
    <button {...props} className={clsx(baseClass, className)}>
      <Link href={url}>{children}</Link>
    </button>
  );
}

export default Button;
