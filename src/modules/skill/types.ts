import { Skill, SkillLevel } from "@prisma/client";

type ProfileSkill = {
    id: number;
    skill: Skill;
    level: SkillLevel
}

export type {
    ProfileSkill
}