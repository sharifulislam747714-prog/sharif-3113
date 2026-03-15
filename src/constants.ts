import { CVData } from "./types";

export const cvData: CVData = {
  name: "Mohammad Shoriful Islam",
  title: "Digital Marketing Specialist & Financial Accountant",
  location: "Monoharganj, Cumilla, Bangladesh",
  phone: "01787620847",
  email: "sharifulislam747714@gmail.com",
  summary: "A dedicated, fast-learning, and versatile professional with a unique blend of traditional educational background, modern digital expertise, and strong accounting knowledge. Highly proficient in Meta Marketing, Website Maintenance, Video Editing, Graphics Design, as well as Financial Accounting. Adept at managing ledgers, preparing financial statements, and operating accounting software like Tally. Fluent in multiple languages including Arabic, Urdu, and Bengali.",
  competencies: [
    {
      category: "Accounting & Finance",
      skills: ["Tally Software", "Financial Statements Preparation", "Ledger Management", "General Accounting"]
    },
    {
      category: "Digital Marketing",
      skills: ["Meta Business Suite", "Meta Marketing", "Social Media Management"]
    },
    {
      category: "Creative Skills",
      skills: ["Video Editing", "Graphics Design", "Content Creation"]
    },
    {
      category: "Web & IT",
      skills: ["Website Maintenance", "MS Word", "MS Excel", "Basic IT Troubleshooting"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-solving", "Time Management", "Quick Learner", "Adaptability"]
    }
  ],
  education: [
    {
      degree: "Dawra-e-Hadith (Master's Equivalent in Islamic Studies)",
      institution: "Darul Markazul Fiqhil Islami, Bashundhara",
      details: ["Result: Mumtaz (Outstanding)"],
      year: "2024-2025"
    },
    {
      degree: "Hifzul Quran",
      institution: "Darul Uloom Madaninagar Madrasa",
      details: [],
      year: "2013"
    }
  ],
  experience: {
    role: "Entry-Level / Fresher",
    description: "While I do not have formal corporate experience, I possess practical, hands-on knowledge in accounting, digital marketing, web maintenance, and creative design. I am fully prepared to apply these diverse skills professionally and deliver high-quality results."
  },
  languages: [
    { language: "Bengali", proficiency: "Native" },
    { language: "Arabic", proficiency: "Fluent (Reading, Writing, Speaking)" },
    { language: "Urdu", proficiency: "Fluent (Reading, Writing, Speaking)" },
    { language: "English", proficiency: "Working Knowledge (Basic Reading, Writing, Speaking)" }
  ],
  personalInfo: [
    { label: "Father's Name", value: "Nurul Alam" },
    { label: "Mother's Name", value: "Saira Khatun" },
    { label: "Date of Birth", value: "January 1, 2000" },
    { label: "Religion", value: "Islam" },
    { label: "Marital Status", value: "Single" },
    { label: "Permanent Address", value: "Monoharganj, Cumilla, Bangladesh" }
  ]
};
