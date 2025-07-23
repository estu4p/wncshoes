import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, children, ...props }: ButtonProps) {
  const baseClass = "px-4 py-1 rounded-2xl text-white bg-red-500";
  return (
    <button {...props} className={clsx(baseClass, className)}>
      <Link href="#">{children}</Link>
    </button>
  );
}

export default Button;
