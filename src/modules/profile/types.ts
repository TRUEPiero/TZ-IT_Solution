import { ProfileProject } from '../project/types.js';
import { ProfileExperience } from '../experiense/types.js';
import { ProfileSkill } from '../skill/types.js';

type EntityParams = {
    id: number;
    name: string;
    description: string;
    links: string[];
    achievements: string[];
    skills: ProfileSkill[];
    experience: ProfileExperience[];
    projects: ProfileProject[];
}

export type {
    EntityParams,
}