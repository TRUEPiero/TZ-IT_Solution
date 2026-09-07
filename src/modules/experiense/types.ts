import type { Company } from '@prisma/client';

type ProfileExperience = {
    id: number;
    company: Company;
    position: string;
    startDate: Date;
    endDate: Date | null
}

export type {
    ProfileExperience
}