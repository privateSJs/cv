import { useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { cvData } from '../data/cvData'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { ProfileSection } from './ProfileSection'
import { SkillsSection } from './SkillsSection'

export function CvLayout() {
  const cvRef = useRef<HTMLElement | null>(null)

  const downloadPdf = async () => {
    const element = cvRef.current

    if (!element) {
      return
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pdfHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    pdf.save('cv.pdf')
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8">
      <button
        type="button"
        onClick={downloadPdf}
        className="no-print inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        Pobierz PDF
      </button>

      <main
        ref={cvRef}
        aria-label="CV"
        className="w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
      >
        <header className="flex items-center justify-between gap-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-700 px-6 py-8 text-white md:px-10">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              {cvData.profile.role}
            </p>
            <h1 className="text-3xl font-bold md:text-5xl">{cvData.profile.name}</h1>
          </div>
          <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100">
            {cvData.profile.status}
          </div>
        </header>

        <div className="grid md:grid-cols-[300px_1fr]">
          <aside className="bg-slate-50 p-6 md:p-8">
            <ContactSection items={cvData.contact} />
            <SkillsSection items={cvData.skills} />
          </aside>

          <div className="space-y-8 p-6 md:p-8">
            <ProfileSection summary={cvData.profile.summary} />
            <ExperienceSection items={cvData.experience} />
            <EducationSection items={cvData.education} />
          </div>
        </div>
      </main>
    </div>
  )
}
