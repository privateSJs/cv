export type ContactItem = {
  label: string
  value: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

export const cvData = {
  profile: {
    role: 'Frontend Developer',
    name: 'Jan Kowalski',
    status: 'Available for work',
    summary:
      'Doświadczony frontend developer z ponad 6 latami praktyki w tworzeniu nowoczesnych, wydajnych i dostępnych aplikacji webowych. Specjalizuję się w React, TypeScript i UX, a moim celem jest tworzenie rozwiązań, które łączą użyteczność, estetykę i wysoką skalowalność.',
  },
  contact: [
    { label: 'Email', value: 'hello@jan-kowalski.dev' },
    { label: 'Telefon', value: '+48 555 123 456' },
    { label: 'Lokalizacja', value: 'Warszawa, Polska' },
    { label: 'Portfolio', value: 'jan-kowalski.dev' },
  ] as ContactItem[],
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Node.js',
    'REST API',
    'Tailwind',
    'Figma',
    'Git',
    'Performance',
    'UX/UI',
    'SQL',
  ],
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Nexa Studio',
      period: '2022 — teraz',
      description:
        'Odpowiedzialny za architekturę aplikacji webowych, modernizację UI i wdrażanie procesów CI/CD. Zwiększyłem wydajność interfejsów o 35% i prowadziłem code review dla zespołu 6 osób.',
    },
    {
      role: 'Frontend Developer',
      company: 'Pixel Forge',
      period: '2020 — 2022',
      description:
        'Budowa responsywnych dashboardów, integracja REST API i optymalizacja UX w projektach dla klientów B2B oraz SaaS.',
    },
    {
      role: 'Junior Web Developer',
      company: 'Digital Alley',
      period: '2018 — 2020',
      description:
        'Tworzenie landing page’ów, wdrożenia w React, HTML/CSS oraz pracy z CMS i grafiką marketingową.',
    },
  ] as ExperienceItem[],
  education: [
    'Magister inżynierii informatyki — Uniwersytet Informatyki i Biznesu',
    'Certyfikat: Frontend Developer — Google / Meta',
    'Kursy: TypeScript, React, UX Design, SEO',
  ],
}
