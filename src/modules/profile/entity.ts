import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Skill } from "../skill/skill.model.js";
import { Project } from "../project/project.model.js";
import { Experience } from "../experiense/experiense.model.js";
import  type{ EntityParams } from "./types.js";
import { formatDate } from "../../lib/formatter.js";

@ObjectType()
export class Profile {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => [String])
    links: string[];

    @Field(() => [String])
    achievements: string[];

    @Field(type => [Skill])
    skills: Skill[];

    @Field(type => [Experience])
    experience: Experience[];

    @Field(type => [Project])
    projects: Project[];

    constructor(params: EntityParams) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.links = params.links;
        this.achievements = params.achievements;
        this.skills = this.prepareSkills(params.skills);
        this.experience = this.prepareExperience(params.experience);
        this.projects = params.projects;
    }

    private prepareSkills (skills: any[]) {
        return skills.map(pSkill => {
            return {
                id: pSkill.id,
                title: pSkill.skill.title,
                level: pSkill.level
            }
        })
    }

    private prepareExperience (experience: any[]) {
        return experience.map(exp => {
            return {
                id: exp.id,
                company: exp.company.title,
                period: `${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : "по текущ."}`,
                position: exp.position
            }
        })
    }
}