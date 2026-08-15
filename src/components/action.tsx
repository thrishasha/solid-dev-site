import { cva, type VariantProps } from "class-variance-authority";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:brightness-110",
        outline: "border border-border bg-surface text-foreground hover:bg-surface-2",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-surface-2",
        accent: "bg-accent text-accent-foreground hover:brightness-105",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ActionVariants = VariantProps<typeof actionVariants>;
