import { Field, GraphQLISODateTime, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Experience {
    @Field(type => Int)
    id: number;

    @Field()
    company: string;

    @Field()
    position: string;

    @Field()
    responsibilities: string;

    @Field(() => GraphQLISODateTime)
    startDate: Date;

    @Field(() => GraphQLISODateTime, { nullable: true })
    endDate: Date | null;

    @Field()
    period: string; 
}