import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  to: string;
  type?: "default" | "secondary";
  className?: string;
}

const Button = ({ text, to, type = "default", className }: ButtonProps) => {
  return (
    <Link
      href={to}
      className={cn(
        className,
        type === "default"
          ? "px-8 py-2 rounded-md bg-primary text-white font-bold font-sans transition duration-200 hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary"
          : "inline-flex w-fit h-12 animate-shimmer items-center justify-center rounded-md border border-[#503c3c] bg-[linear-gradient(110deg,#503c3c,45%,#704d4d,55%,#503c3c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:shadow-2xl hover:shadow-[#d5cea3]/[0.3]"
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
