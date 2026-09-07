import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Skill } from "./skill.model.js";
import type { ProfileSkill } from "./types.js";

@Resolver(() => Skill)
export class SkillResolver {

    @ResolveField(() => String)
    title(@Parent() pSkill: ProfileSkill): string {
        return pSkill.skill.title
    }
}