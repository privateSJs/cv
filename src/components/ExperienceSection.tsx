import type { ExperienceItem } from '../data/cvData'

type ExperienceSectionProps = {
  items: ExperienceItem[]
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">Doświadczenie</h2>
      <div className="space-y-4">
        {items.map((job) => (
          <article key={`${job.company}-${job.period}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                <p className="text-sm font-semibold text-blue-600">{job.company}</p>
              </div>
              <span className="text-xs font-medium text-slate-500">{job.period}</span>
            </div>
            <p className="text-sm leading-6 text-slate-700">{job.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
