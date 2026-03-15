export interface CVData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  competencies: {
    category: string;
    skills: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    details: string[];
    year: string;
  }[];
  experience: {
    role: string;
    description: string;
  };
  languages: {
    language: string;
    proficiency: string;
  }[];
  personalInfo: {
    label: string;
    value: string;
  }[];
}
