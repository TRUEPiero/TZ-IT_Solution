import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Project {
    @Field(type => Int)
    id: number;

    @Field()
    titile: string;

    @Field()
    link: string;
}