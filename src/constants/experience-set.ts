import { ExperienceType } from "../types/ExperienceType";

import andelaLogo from "../assets/andela_logo.jpg";
import heptaLogo from "../assets/heptanalytics_logo.jpg";
import uplusLogo from "../assets/uplus_mutual_partners_logo.jpg";

const experienceSet: ExperienceType[] = [
  {
    role: "Front-End Developer",
    company: "Uplus Mutual Partners",
    duration: "2022 - Present",
    location: "Hybrid",
    website: "uplus.rw",
    description:
      "Developing and maintaining front-end solutions for web applications, particularly in the fintech domain. This involves creating client or internal data visualization systems using React/TypeScript and the Tailwind CSS framework.",
    skills: ["JavaScript", "TypeScript", "React", "Redux", "Tailwindcss"],
    logo: uplusLogo,
  },
  {
    role: " Software Developer",
    company: "Hepta Analytics",
    duration: "Jan 2021 - May 2021",
    location: "Remote",
    website: "heptanalytics.com",
    description:
      "Developed front-end web app solutions for e-commerce AI chatbot conversational based products recommendations using VueJS, React and Python.",
    skills: ["JavaScript", "React", "Vue", "Redux", "Python"],
    logo: heptaLogo,
  },
  {
    role: "Software Engineer",
    company: "Andela",
    duration: "2020 - 2021",
    location: "Remote",
    website: "andela.com",
    description:
      "Worked on development of a travel and hotel booking platform, participated in UI designs, and helped developing an internal human resource management application for external company.",
    skills: [
      "JavaScript",
      "React",
      "NodeJS",
      "Postgress",
      "MongoDB",
      "FireBase",
      "Redux",
      "ExpressJS",
      "HTML",
      "CSS",
    ],
    logo: andelaLogo,
  },
];

export default experienceSet;
