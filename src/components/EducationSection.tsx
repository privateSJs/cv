type EducationSectionProps = {
  items: string[]
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">Edukacja</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="relative pl-5 text-sm leading-6 text-slate-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-blue-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
