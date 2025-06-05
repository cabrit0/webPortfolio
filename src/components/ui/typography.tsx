import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

// Professional Heading Components
export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
      "font-display gradient-text",
      className
    )}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      "font-display text-foreground",
      className
    )}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      "font-display text-foreground",
      className
    )}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      "font-display text-foreground",
      className
    )}>
      {children}
    </h4>
  )
}

// Professional Body Text Components
export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "leading-7 text-muted-foreground [&:not(:first-child)]:mt-6",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-xl text-muted-foreground leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn(
      "text-lg font-semibold text-foreground",
      className
    )}>
      {children}
    </div>
  )
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn(
      "text-sm font-medium leading-none text-muted-foreground",
      className
    )}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-sm text-muted-foreground",
      className
    )}>
      {children}
    </p>
  )
}

// Professional Code Components
export function TypographyCode({ children, className }: TypographyProps) {
  return (
    <code className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      "text-foreground",
      className
    )}>
      {children}
    </code>
  )
}

export function TypographyCodeBlock({ children, className }: TypographyProps) {
  return (
    <pre className={cn(
      "mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4",
      "font-mono text-sm text-foreground",
      className
    )}>
      <code>{children}</code>
    </pre>
  )
}

// Professional List Components
export function TypographyList({ children, className }: TypographyProps) {
  return (
    <ul className={cn(
      "my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground",
      className
    )}>
      {children}
    </ul>
  )
}

export function TypographyOrderedList({ children, className }: TypographyProps) {
  return (
    <ol className={cn(
      "my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground",
      className
    )}>
      {children}
    </ol>
  )
}

// Professional Quote Component
export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn(
      "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
      className
    )}>
      {children}
    </blockquote>
  )
}

// Professional Table Components
export function TypographyTable({ children, className }: TypographyProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn(
        "w-full text-sm text-foreground",
        className
      )}>
        {children}
      </table>
    </div>
  )
}

export function TypographyTableHeader({ children, className }: TypographyProps) {
  return (
    <thead className={cn(
      "border-b border-border",
      className
    )}>
      {children}
    </thead>
  )
}

export function TypographyTableBody({ children, className }: TypographyProps) {
  return (
    <tbody className={cn(
      "[&_tr:last-child]:border-0",
      className
    )}>
      {children}
    </tbody>
  )
}

export function TypographyTableRow({ children, className }: TypographyProps) {
  return (
    <tr className={cn(
      "border-b border-border transition-colors hover:bg-muted/50",
      className
    )}>
      {children}
    </tr>
  )
}

export function TypographyTableHead({ children, className }: TypographyProps) {
  return (
    <th className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
      className
    )}>
      {children}
    </th>
  )
}

export function TypographyTableCell({ children, className }: TypographyProps) {
  return (
    <td className={cn(
      "p-4 align-middle text-foreground",
      className
    )}>
      {children}
    </td>
  )
}

// Professional Gradient Text Component
export function GradientText({ children, className }: TypographyProps) {
  return (
    <span className={cn(
      "gradient-text font-display font-bold",
      className
    )}>
      {children}
    </span>
  )
}
