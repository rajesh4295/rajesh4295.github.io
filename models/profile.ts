
export type skillLevel = 'advanced' | 'competent' | 'moderate' | 'learning';
export type skillType = 'frontend' | 'backend' | 'database' | 'soft' | 'other';

export interface IProfile {
    personal?: IPersonal;
    contact?: IContact;
    education?: IEducation[];
    skills?: {
        professional?: ISkills[];
        personal?: ISkills[];
    },
    jobHistory?: IJobHistory[];
    projects?: IProject[];
    acheivements?: string[];
    summary?: string[];
    social?: ISocial;
    certifications?: ICerts[];
}

export interface IEducation {
    college?: string;
    place?: string;
    degree?: string;
    specialization?: string;
    startYear?: number;
    endYear?: number;
    grade?: string;
    board?: string;
}
export interface IProject {
    name?: string;
    startMonth?: string;
    startYear?: number;
    endMonth?: string;
    endYear?: number;
    description?: string;
    responsibilities?: string[];
    tools?: string[];
    link?: string;
}
export interface ISkills {
    name?: string;
    icon?: string;
    level?: skillLevel;
    type?: skillType;

}
export interface ICerts {
    name?: string;
    year?: number;
    credential?: string;
    link?: string;
}
export interface IJobHistory {
    companyName?: string;
    role?: string;
    project: IProject[];
}
export interface IContact {
    email?: string;
    phone?: number[];
    zoom?: string;
    skype?: string;
}
export interface IPersonal {
    name?: string;
    img?: string;
    dob?: string;
    experience?: number;
    title?: string;
    languages?: string[];
    interests?: string[];
    passport?: 'Available' | 'Not Available'
}
export interface ISocial {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
}