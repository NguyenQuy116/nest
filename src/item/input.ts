import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;
}
@InputType()
export class UpdateItemInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  quantity?: number;
}