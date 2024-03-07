import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class idInput {
    @Field()
    id : number;
}