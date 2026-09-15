import type {
    PersonalInfo,
    Skills,
    Language,
} from "../types/cv.ts";


export const personalInfo: PersonalInfo = {
  name: "Jarosław Stysiał",
  email: "jarek9917@gmail.com",
  phone: "+48 796 203 768",
  github: "https://github.com/privateSJs",
  linkedIn: "https://www.linkedin.com/in/privatejs/"
}

export const skills: Skills = {
    testing: [
        "Test Automation",
        "Software Validation",
        "Pytest",
        "Behave (BDD)",
        "Quality Assurance"
    ],

    programming: [
        "Python",
        "TypeScript",
        "SQL",
        'Lua',
        "Go"
    ],

    tools: [
        "GitHub",
        "BitBucket",
        "Jenkins",
        "Docker",
        "Linux",
    ]
}

export const languages: Language[] = [
    {
        name: "PL",
        level: "Native"
    },
    {
        name: "EN",
        level: "B2"
    }
];