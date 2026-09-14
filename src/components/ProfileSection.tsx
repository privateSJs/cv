type ProfileSectionProps = {
  summary: string
}

export function ProfileSection({ summary }: ProfileSectionProps) {
  return (
    <section>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">Profil</h2>
      <p className="text-base leading-7 text-slate-700">{summary}</p>
    </section>
  )
}
