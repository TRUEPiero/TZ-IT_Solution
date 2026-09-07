import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Experience } from "./experience.model.js";
import { formatDate } from "../../lib/formatter.js";
import type { ProfileExperience } from "./types.js";

@Resolver(() => Experience)
export class ExperienceResolver {

    @ResolveField(() => String)
    company(@Parent() experience: ProfileExperience): string {
        return experience.company.title
    }

    @ResolveField(() => String)
    period(@Parent() experience: Experience): string {
        return `${formatDate(experience.startDate)} - ${
            experience.endDate
                ? formatDate(experience.endDate)
                : "сейчас"
        }`;
    }
}