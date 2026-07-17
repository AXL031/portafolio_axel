import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4 text-center mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-brand-text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-brand-primary rounded-full mt-4" />
    </div>
  )
}
