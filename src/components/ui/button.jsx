import * as React from "react";

// simple class merge without extra libs
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      type = "button",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50";

    // ✅ Supabase-ish: surface depth (inset highlight) + soft colored shadow
    const variants = {
      default: `
  rounded-md
  bg-primary/20
  text-white/95
  border border-primary/50

  shadow-[inset_0_1px_0_hsl(var(--primary)/0.45),_0_8px_24px_-10px_hsl(var(--primary)/0.45)]
  hover:bg-primary/30
  hover:border-primary/65
  hover:shadow-[inset_0_1px_0_hsl(var(--primary)/0.6),_0_14px_36px_-14px_hsl(var(--primary)/0.6)]
  hover:-translate-y-[1px]

  active:bg-primary/25
  active:translate-y-0

  transition-all duration-200
`,

      // ✅ Supabase outline: minimal, crisp, low-noise
      outline: `
  rounded-md
  bg-white/5
  text-white/80
  border border-white/15

  hover:bg-white/10
  hover:border-white/25
  hover:text-white

  transition-all duration-200
`,

      // optional
      ghost: "rounded-md text-primary hover:bg-primary/10",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-11 px-6 text-sm",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-10 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
