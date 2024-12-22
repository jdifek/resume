export interface Resume {
  id: string;
  title: string;
  style: string;
  progress: number;
  lastModified: string;
}

export interface PersonalDetail {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}

export interface ProfessionalSkill {
  name: string;
  level: 1 | 2 | 3 | 4;
}

export interface Education {
  institution: string;
  degree: 'School' | 'College' | 'Bachelor' | 'Master';
  graduationYear: string;
  description?: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string;
}

export interface JobReview {
  name: string;
  title: string;
  email: string;
  phone: string;
}