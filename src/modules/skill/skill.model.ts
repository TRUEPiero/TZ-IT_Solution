import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Skill {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    level: string;
}