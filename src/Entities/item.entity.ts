import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field(type => Int, { nullable: true })
  quantity?: number;

}
