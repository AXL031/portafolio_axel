import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'accent'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-brand-primary/20 text-brand-primary border border-transparent": variant === 'default',
          "text-brand-text border border-white/10": variant === 'outline',
          "bg-brand-accent/20 text-brand-accent border border-transparent": variant === 'accent',
        },
        className
      )}
      {...props}
    />
  )
}
