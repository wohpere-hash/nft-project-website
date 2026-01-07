import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string | number
  className?: string
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm border border-border/50 bg-card p-6 transition-all hover:border-primary/50",
        className,
      )}
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground">{value}</p>
      </div>
      <div className="absolute bottom-0 right-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  )
}
