type SkillsSectionProps = {
  items: string[]
}

export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">Umiejętności</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
