import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Skill } from "../skill/skill.model.js";
import { Project } from "../project/project.model.js";
import { Experience } from "../experiense/experience.model.js";

import type { EntityParams } from "./types.js";
import type { ProfileSkill } from "../skill/types.js";

@ObjectType()
export class Profile {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field(() => String)
    links: string;

    @Field(() => String)
    achievements: string;

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
        this.skills = params.skills as any;
        this.experience = params.experience as any;
        this.projects = params.projects;
    }
}