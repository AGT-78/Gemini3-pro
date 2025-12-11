import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary/95 text-primary-foreground hover:bg-primary shadow-lg shadow-primary/30 ring-1 ring-primary/40 hover:shadow-xl hover:shadow-primary/40 hover:ring-primary/60",
    outline: "border-2 border-primary/80 text-primary hover:bg-primary/95 hover:text-primary-foreground hover:border-primary shadow-md shadow-primary/10",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }
  
  const sizes = {
    default: "h-11 px-8 py-2",
    sm: "h-9 rounded-md px-4",
    lg: "h-14 rounded-md px-10 text-base",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }

