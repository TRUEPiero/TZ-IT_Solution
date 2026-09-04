import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Skill } from "../skill/skill.model.js";
import { Project } from "../project/project.model.js";
import { Experience } from "../experiense/experiense.model.js";

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
}