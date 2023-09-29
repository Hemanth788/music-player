import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `
  bg-neutral-900
  rounded-lg
  w-full
  h-fit
  `,
        className
      )}
    >
      {children}
    </div>
  );
}
