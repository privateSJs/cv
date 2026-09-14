import type { ContactItem } from '../data/cvData'

type ContactSectionProps = {
  items: ContactItem[]
}

export function ContactSection({ items }: ContactSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">Kontakt</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
            <span className="block text-[11px] uppercase tracking-[0.12em] text-slate-500">
              {item.label}
            </span>
            <strong className="mt-1 block text-sm font-semibold text-slate-800">{item.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
