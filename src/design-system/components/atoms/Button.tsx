import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer overflow-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-900/10",
        secondary: "bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md",
        glass: "bg-white/20 backdrop-blur-lg border border-white/30 text-zinc-900 hover:bg-white/40 shadow-lg shadow-black/5",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900",
        link: "text-zinc-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-10 py-3 text-base",
        sm: "h-10 px-8 text-sm gap-2",
        md: "h-12 px-10 text-base gap-2.5",
        lg: "h-16 px-16 text-lg gap-3",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
