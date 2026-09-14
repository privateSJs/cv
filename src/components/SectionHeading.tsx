type SectionHeadingProps = {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
      {title}
    </h2>
  )
}
