import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class createInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;
}